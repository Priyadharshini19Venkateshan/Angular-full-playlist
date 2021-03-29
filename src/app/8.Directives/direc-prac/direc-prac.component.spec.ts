import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirecPracComponent } from './direc-prac.component';

describe('DirecPracComponent', () => {
  let component: DirecPracComponent;
  let fixture: ComponentFixture<DirecPracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirecPracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirecPracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
