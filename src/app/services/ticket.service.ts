import { Injectable } from '@angular/core';
import { Tickets } from '../interfaces/ticket-details';

@Injectable({
    providedIn: 'root'
})

export class TicketService {

    // Properties
    
    public tickets: Tickets[] = [];
    public ticketFiles: Tickets[] = [];
    
    // Methods
    
    createTicket(ticket: Tickets) {
        // Clear previous ticket before creating a new one
        this.tickets = [];
        this.tickets.push(ticket);
    }
    
    getTickets() {
        return this.tickets[0];
    }
}