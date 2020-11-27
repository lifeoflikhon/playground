import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticesComponent } from './statistices.component';

describe('StatisticesComponent', () => {
  let component: StatisticesComponent;
  let fixture: ComponentFixture<StatisticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
