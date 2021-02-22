import { Collection, ObjectID } from 'mongodb';
import { hash, compare } from 'bcryptjs';
import crypto from 'crypto';

export interface LoginUserIdentity {
  id?: string;
  username?: string;
  email?: string;
}

export default class UsersService {
  private users: Collection;
  constructor(users: Collection) {
    this.users = users;
  }

  private makeUserName(email: string, username: string) {
    const _username = username || email.substring(0, email.indexOf('@'));
    return _username;
  }

  /** db에 넣기 위해 bcrypt를 이용해서 password를 hash한다. */
  private hashPassword(password: string) {
    const _password = this.getPassword(password);
    return hash(_password, 10);
  };

  /** meteor 의 SHA256() 함수를 구현한다. 동일한 결과 확인 */
  private getPassword(password: string) {
    const hash = crypto.createHash('sha256');
    return hash.update(password).digest('hex');
  }

  /**
   * Meteor 암호화 알고리즘
   * - https://github.com/meteor/meteor/blob/3cd6e5ebc66216d07e15ef9cc2f326621934e828/packages/accounts-password/password_server.js#L84
   * - 클라이언트에서 password를 sha256 알고리즘으로 hash 한다.
   * - 서버에서 bcryptjs 를 이용해 암호화(encrypt)해서 db 에 저장한다.
   * 참고
   *  - https://forums.meteor.com/t/migrating-off-meteor-accounts/42396/12
   *  - https://www.accountsjs.com/
   */
  private async checkPassword({ bcryptPass, password }) {
    const hashedPass = this.getPassword(password);
    const isChecked = await compare(hashedPass, bcryptPass);
    // console.log(bcryptPass, hashedPass, isChecked);
    return isChecked;
  }

  /** id로 user 찾기 */
  async findById({ userId }) {
    // sample: g7KjHTEdaExQ2Ksv7, 7Dkdx4CuEXqRAhZSo
    if (!userId) throw new Error('Please provide a valid (userId).');

    return await this.users.findOne({ _id: userId });
  }

  /** email 또는 username으로 사용자 찾기 */
  async findUser({ email, username }) {
    let fieldName: string;
    let fieldValue: string;

    if (username) {
      fieldName = 'username';
      fieldValue = username;
    } else if (email) {
      fieldName = 'emails.address';
      fieldValue = email;
    } else {
      throw new Error('Please provide a valid (email) or (username)');
    }

    let selector = {};
    selector[fieldName] = fieldValue;
    const user = await this.users.findOne(selector);
    return user;
  }


  /** */
  async createUser({ email, password, username, name = '' }) {
    if (!username || !email)
      throw new Error('Need to set a username and email');

    const user = {};

    if (password) {
      const pass = this.getPassword(password);
      const hashed = await this.hashPassword(pass);
      user['services'] = { password: { bcrypt: hashed } };
    }

    if (username)
      user['username'] = username;
    if (email)
      user['emails'] = [{ address: email, verified: false }];
    if (name)
      user['profile'] = { name };

    user['_id'] = new ObjectID().toHexString();
    user['createdAt'] = new Date();
    const ret = await this.users.insertOne(user);

    if (ret.result.ok === 1 && ret.result.n === 1)
      return user;
    else throw new Error('Can not create new user reason by something wrong.');
  }

  /** */
  async createTemporaryUser({ email, username, name }) {
    const _username = this.makeUserName(email, username);
    const TEMP_PASS = '!QAZZXSW2';

    return this.createUser({ email, password: TEMP_PASS, username: _username, name });
  }

  async login({ email, username, password }) {
    const user = await this.findUser({ email, username });
    if (!user) throw new Error('User not found.');

    const bcryptPass = user.services?.password?.bcrypt;

    if (user.services.password.bcrypt) {
      const isChecked = await this.checkPassword({ bcryptPass, password });

      if (isChecked) return user;
      else throw new Error('Incorrect user.');
    }

    if (!bcryptPass) throw new Error('User has no password set.');
  }
};