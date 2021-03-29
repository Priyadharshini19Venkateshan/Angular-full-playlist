import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipePracComponent } from './pipe-prac.component';

describe('PipePracComponent', () => {
  let component: PipePracComponent;
  let fixture: ComponentFixture<PipePracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipePracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipePracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
