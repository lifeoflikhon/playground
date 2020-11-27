import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarRootComponent } from './search-bar-root.component';

describe('SearchBarRootComponent', () => {
  let component: SearchBarRootComponent;
  let fixture: ComponentFixture<SearchBarRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
