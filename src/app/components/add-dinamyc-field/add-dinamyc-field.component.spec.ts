import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDinamycFieldComponent } from './add-dinamyc-field.component';

describe('AddDinamycFieldComponent', () => {
  let component: AddDinamycFieldComponent;
  let fixture: ComponentFixture<AddDinamycFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDinamycFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDinamycFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
