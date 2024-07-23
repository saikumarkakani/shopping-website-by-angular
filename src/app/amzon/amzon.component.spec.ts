import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmzonComponent } from './amzon.component';

describe('AmzonComponent', () => {
  let component: AmzonComponent;
  let fixture: ComponentFixture<AmzonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmzonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmzonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
