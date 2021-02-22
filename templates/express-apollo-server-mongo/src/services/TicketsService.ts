import { Collection, ObjectID } from 'mongodb';

export default class TicketsService {
  private tickets: Collection;
  constructor(tickets: Collection) {
    this.tickets = tickets;
  }

  /** id로 티켓 찾기 */
  async findById({ ticketId }) {
    // sample: bWWbcds4GzhmHRNBN, Ns25AXyd5x5oA2kfa
    if (!ticketId) throw new Error('Please provide a valid (ticketId).');

    return await this.tickets.findOne({ _id: ticketId });
  }

  /** 티켓 번호로 로 티켓 찾기 */
  async findByNo({ ticketNo }) {
    if (!ticketNo) throw new Error('Please provide a valid (ticketNo).');

    return await this.tickets.findOne({ no: ticketNo });
  }

  async createTicket({ ticket }) {
    return await this.tickets.insertOne(ticket);
  }

};
