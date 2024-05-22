import { NgModule } from '@angular/core';

import {
    RouterModule,
    Routes
} from '@angular/router';

import { TicketDetailsFormComponent } from './ticket-details-form/ticket-details-form.component';
import { TicketDetailsSummaryComponent } from './ticket-details-summary/ticket-details-summary.component';

const routes: Routes = [
    {
        path: '',
        component: TicketDetailsFormComponent
    },
    {
        path: 'ticket-details-summary',
        component: TicketDetailsSummaryComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }