import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLibComponent } from './ngx-lib.component';

describe('NgxLibComponent', () => {
  let component: NgxLibComponent;
  let fixture: ComponentFixture<NgxLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
