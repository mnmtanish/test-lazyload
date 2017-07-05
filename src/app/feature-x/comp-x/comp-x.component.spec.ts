import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompXComponent } from './comp-x.component';

describe('CompXComponent', () => {
  let component: CompXComponent;
  let fixture: ComponentFixture<CompXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
