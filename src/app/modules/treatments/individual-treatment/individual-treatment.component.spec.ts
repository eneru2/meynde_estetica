import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualTreatmentComponent } from './individual-treatment.component';

describe('IndividualTreatmentComponent', () => {
  let component: IndividualTreatmentComponent;
  let fixture: ComponentFixture<IndividualTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualTreatmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividualTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
