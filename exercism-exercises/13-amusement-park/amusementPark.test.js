const { createVisitor, revokeTicket, ticketStatus, simpleTicketStatus, gtcVersion } = require('./amusementPark')

test('creating visitor object', () => {
    expect(createVisitor('Verena Nardi', 45, 'H32AZ123')).toEqual({ name: 'Verena Nardi', age: 45, ticketId: 'H32AZ123' });
});

test('revoking visitor ticket', () => {
    expect(revokeTicket({ name: 'Verena Nardi', age: 45, ticketId: 'H32AZ123' })).toEqual({ name: 'Verena Nardi', age: 45, ticketId: null });
});

test('checking ticket status when ticket not in the system', () => {
    expect(ticketStatus({ '0H2AZ123': null, '23LA9T41': 'Verena Nardi' }, 'RE90VAW7')).toBe('unknown ticket id');
});

test('checking ticket status when ticket assigned to a person', () => {
    expect(ticketStatus({ '0H2AZ123': null, '23LA9T41': 'Verena Nardi' }, '23LA9T41')).toBe('sold to Verena Nardi');
});

test('checking ticket status when ticket is not sold', () => {
    expect(ticketStatus({ '0H2AZ123': null, '23LA9T41': 'Verena Nardi' }, '0H2AZ123')).toBe('not sold');
});

test('checking simple ticket status when invalid', () => {
    expect(simpleTicketStatus({ '0H2AZ123': null, '23LA9T41': 'Verena Nardi' }, '0H2AZ123')).toBe('invalid ticket !!!');
});

test('checking simple ticket status when valid', () => {
    expect(simpleTicketStatus({ '0H2AZ123': null, '23LA9T41': 'Verena Nardi' }, '23LA9T41')).toBe('Verena Nardi');
});

test('checking gtc version with new visitor', () => {
    const visitorNew = {
        name: 'Verena Nardi',
        age: 45,
        ticketId: 'H32AZ123',
        gtc: {
          signed: true,
          version: '2.1',
        },
      };
    expect(gtcVersion(visitorNew)).toBe('2.1');
});

test('checking gtc version with old visitor', () => {
    const visitorOld = {
        name: 'Verena Nardi',
        age: 45,
        ticketId: 'H32AZ123',
      };
    expect(gtcVersion(visitorOld)).toBe(undefined);
});