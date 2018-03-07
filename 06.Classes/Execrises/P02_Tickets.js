function tickets(tickets, sortCriteria) {

  class Ticket {
    constructor(destination, price, status) {
      
      this.destination = destination;
      this.price = price;
      this.status = status;
    }

    customSort(sortCriteria, sortParameter) {

      if (sortCriteria === "price") {
        return this.price - sortParameter;
      } else if (sortCriteria === "destination") {
        return this.destination.localeCompare(sortParameter);
      } else {
        return this.status.localeCompare(sortParameter);
      }
    }
  }

  let ticketsArr = [];

  for (const ticket of tickets) {

    let currentTicketInfo = ticket.split('|');

    let currentTicket = new Ticket(currentTicketInfo[0], Number(currentTicketInfo[1]), currentTicketInfo[2]);

    ticketsArr.push(currentTicket);

  }

  ticketsArr.sort((a, b) => {
    return a.customSort(sortCriteria, b[sortCriteria]);
  });

  return (ticketsArr);
}