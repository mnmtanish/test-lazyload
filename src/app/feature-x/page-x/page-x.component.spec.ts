import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageXComponent } from './page-x.component';

describe('PageXComponent', () => {
  let component: PageXComponent;
  let fixture: ComponentFixture<PageXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
