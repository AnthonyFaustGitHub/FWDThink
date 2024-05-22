import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDetailsFormComponent } from './ticket-details-form.component';

describe('TicketDetailsFormComponent', () => {
  let component: TicketDetailsFormComponent;
  let fixture: ComponentFixture<TicketDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
