import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonPrimeComponent } from './amazon-prime.component';

describe('AmazonPrimeComponent', () => {
  let component: AmazonPrimeComponent;
  let fixture: ComponentFixture<AmazonPrimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonPrimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmazonPrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
