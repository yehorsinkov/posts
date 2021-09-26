import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundTodoComponent } from './not-found-todo.component';

describe('NotFoundTodoComponent', () => {
  let component: NotFoundTodoComponent;
  let fixture: ComponentFixture<NotFoundTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
