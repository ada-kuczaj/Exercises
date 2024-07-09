function createVisitor(name, age, ticketId) {
    const visitor = {
        name: name,
        age: age,
        ticketId: ticketId
    };
    return visitor;
}

function revokeTicket(visitor) {
    visitor.ticketId = null;
    return visitor;
}


function ticketStatus(ticket, ticketId) {
    if (ticket[ticketId] === null) {
        return 'not sold';
    } else if (ticket[ticketId] === undefined) {
        return 'unknown ticket id';
    } else {
        return `sold to ${ticket[ticketId]}`;
    }
}

function simpleTicketStatus(tickets, ticketId) {
    if (tickets[ticketId] !== null && tickets[ticketId] !== undefined) {
     return tickets[ticketId];
   } else{
     return 'invalid ticket !!!' ;
   };
 }

 function gtcVersion(visitor) {
    if (visitor.gtc !== null && visitor.gtc !== undefined) {
      return visitor.gtc.version;
    } 
  }

module.exports = {
    createVisitor,
    revokeTicket,
    ticketStatus,
    simpleTicketStatus,
    gtcVersion
}