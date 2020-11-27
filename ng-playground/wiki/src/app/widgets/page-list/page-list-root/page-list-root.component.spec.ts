import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListRootComponent } from './page-list-root.component';

describe('PageListRootComponent', () => {
  let component: PageListRootComponent;
  let fixture: ComponentFixture<PageListRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
