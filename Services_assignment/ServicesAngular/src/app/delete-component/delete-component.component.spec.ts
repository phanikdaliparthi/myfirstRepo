import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteComponentComponent } from './delete-component.component';

describe('DeleteComponentComponent', () => {
  let component: DeleteComponentComponent;
  let fixture: ComponentFixture<DeleteComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
