import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDetailsSummaryComponent } from './ticket-details-summary.component';

describe('TicketDetailsSummaryComponent', () => {
  let component: TicketDetailsSummaryComponent;
  let fixture: ComponentFixture<TicketDetailsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketDetailsSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TicketDetailsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
