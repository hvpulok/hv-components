import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HvNavbarComponent } from './hv-navbar.component';

describe('HvNavbarComponent', () => {
  let component: HvNavbarComponent;
  let fixture: ComponentFixture<HvNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HvNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HvNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
