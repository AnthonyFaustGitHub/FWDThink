import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

import { TicketService } from '../services/ticket.service';
import { Tickets } from '../interfaces/ticket-details';

@Injectable({
    providedIn: 'root'
})

@Component({
  selector: 'app-ticket-details-summary',
  standalone: true,
  imports: [
      MatChipsModule,
      MatButtonModule
  ],
  templateUrl: './ticket-details-summary.component.html',
  styleUrl: './ticket-details-summary.component.less'
})

export class TicketDetailsSummaryComponent {

    ngOnInit() { 
        this.tickets = this.ticketService.getTickets();
        this.types = this.tickets.types;
        this.ticketFiles = this.tickets.files;
    }
    
    constructor(
        private ticketService: TicketService,
        private router: Router
    ) {
        this.tickets = this.ticketService.getTickets();
        this.selectedCategory = this.tickets?.category;
    }
    
    // Properties
    
    public tickets: any = [];
    public types: Tickets[] = [];
    public ticketFiles: Tickets[] = [];
    public selectedCategory: any;
    
    // Methods
    
    createAnotherTicket(): void {
    this.tickets = [];
        this.router.navigate(['']);
    }
}
