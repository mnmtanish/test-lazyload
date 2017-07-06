import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompZComponent } from './comp-z.component';

describe('CompZComponent', () => {
  let component: CompZComponent;
  let fixture: ComponentFixture<CompZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
