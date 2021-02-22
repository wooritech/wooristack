import { objectType } from 'nexus';

export const UserEmail = objectType({
  name: 'UserEmail',
  definition(t) {
    t.string('address', { description: '사용자 이메일 주소' });
    t.boolean('verified', { description: '이메일 주소 검증 여부' });
    t.boolean('isPrimary', { description: '주 이메일 주소 여부' });
    t.boolean('isPublic', { description: '이메일 주소 공개 여부' });
  },
  description: '사용자 이메일 객체'
});

export const UserProfile = objectType({
  name: 'UserProfile',
  definition(t) {
    t.string('name');
    t.string('company');
    t.string('phone');
  }
});

/** todo: #354 role 체계 변경이 필요하다. v2 */
export const UserRole = objectType({
  name: 'UserRole',
  definition(t) {
    t.list.field('system', { type: "String" });
    t.list.field('realgrid', { type: "String" });
  }
});

export const User = objectType({
  name: 'User',
  definition(t) {
    t.id('_id');
    t.string('username');
    t.date('createdAt');
    t.field('profile', { type: UserProfile });
    t.list.field('emails', { type: UserEmail, description: '사용자 이메일 주소 목록' });
    t.field('roles', { type: UserRole });
  },
});

