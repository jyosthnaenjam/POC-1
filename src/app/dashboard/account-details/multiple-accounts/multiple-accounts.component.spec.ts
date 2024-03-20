import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleAccountsComponent } from './multiple-accounts.component';

describe('MultipleAccountsComponent', () => {
  let component: MultipleAccountsComponent;
  let fixture: ComponentFixture<MultipleAccountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleAccountsComponent]
    });
    fixture = TestBed.createComponent(MultipleAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
