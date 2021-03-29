import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolveExampleComponent } from './resolve-example.component';

describe('ResolveExampleComponent', () => {
  let component: ResolveExampleComponent;
  let fixture: ComponentFixture<ResolveExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolveExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
