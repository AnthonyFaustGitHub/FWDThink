import { Component } from '@angular/core';

import { 
    FormGroup,
    FormBuilder,
    FormArray,
    FormControl,
    FormsModule,
    ReactiveFormsModule,
    Validators,
    AbstractControl
} from '@angular/forms';

import {
    FloatLabelType,
    MatFormFieldModule
} from '@angular/material/form-field';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';

import { Tickets } from '../interfaces/ticket-details';
import { tickets } from '../data/ticket-details-data';

import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-ticket-details-form',
  templateUrl: './ticket-details-form.component.html',
  styleUrls: ['./ticket-details-form.component.less'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule
  ]
})

export class TicketDetailsFormComponent {

    ngOnInit() { 
        // Shows validation to user 
        this.ticketDetailsForm.controls['description'].markAsTouched();
        this.ticketDetailsForm.controls['subject'].markAsTouched();
        this.ticketDetailsForm.controls['category'].markAsTouched();
    }

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private ticketService: TicketService
    ) {
        this.ticketDetailsForm = this.formBuilder.group({
            category: new FormControl(''),
            types: new FormArray([]),
            subject: new FormControl('', [Validators.required]),
            description: new FormControl('', [Validators.required]),
            files: new FormArray([])
        })
        this.listOfTickets =this.ticketService.getTickets();
    }
    
    // Properties
    
    public form: FormGroup;
    public types: any;
    public ticketDetailsForm: FormGroup;
    public tickets = tickets;
    public listOfTickets: any = []; 
    public listOfTicketFiles: any = [];
    public count: number = 1;
    public selectedCategory = 'hi';

    // Methods
    
    public attachFile(): void {
        const listOfTicketFiles: FormArray = this.ticketDetailsForm.get('files') as FormArray;
        listOfTicketFiles.push(new FormControl("nameoffileattached" + this.count));
        this.listOfTicketFiles = listOfTicketFiles.value;
        this.count++
    }
    
    public changeType(event: any): void {   
        const listOfTypes: FormArray = this.ticketDetailsForm.get('types') as FormArray;
        
        if (event.checked) {
            listOfTypes.push(new FormControl(event.source.value.type));
        } else {
            let i: number = 0;
            listOfTypes.controls.forEach((control) => {
            if (control.value == event.source.value.type) {
                listOfTypes.removeAt(i);
                return;
            }
            i++;
            });
        }
    }

    public changeCategory(selectedCategory: any): void {
        let getSelectedCategory = this.tickets?.find((category) => 
        category.category == selectedCategory.value.category);
    
        // set types to corresponding category
        this.types = getSelectedCategory?.types;  
    }
    
    public clearForm(): void {
        this.ticketDetailsForm.reset();
        this.types = [];
    }
    
    public deleteTicketFile(ticketFileName: any): void {
        const listOfTicketFiles: FormArray = this.ticketDetailsForm.get('files') as FormArray;
        
        let i: number = 0;
        listOfTicketFiles.controls.forEach((control) => {
        if (control.value == ticketFileName) {
            listOfTicketFiles.removeAt(i);

            this.listOfTicketFiles = this.listOfTicketFiles.filter(function(ticketFile: string) {
                return ticketFile !== ticketFileName
            })                
            return;
        }
        i++;
        });        
    }
    
    public submitTicket(): void {
        if (this.ticketDetailsForm.valid) {
            this.ticketService.createTicket(this.ticketDetailsForm.value);
            this.router.navigate(['ticket-details-summary']);
        }
    }
}