import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneBookComponent } from './get-one-book.component';

describe('GetOneBookComponent', () => {
  let component: GetOneBookComponent;
  let fixture: ComponentFixture<GetOneBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetOneBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOneBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
