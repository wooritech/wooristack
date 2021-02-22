import { Db } from 'mongodb';
import UsersService from './UsersService';
import TicketsService from './TicketsService';


const services = async (db: Db) => ({
  users: new UsersService(db.collection('users')),
  tickets: new TicketsService(db.collection('Tickets')),
});

export {
  services,
  UsersService,
  TicketsService,

};