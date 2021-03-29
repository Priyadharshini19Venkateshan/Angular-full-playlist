import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempDrivenFormsComponent } from './temp-driven-forms.component';

describe('TempDrivenFormsComponent', () => {
  let component: TempDrivenFormsComponent;
  let fixture: ComponentFixture<TempDrivenFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempDrivenFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempDrivenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
