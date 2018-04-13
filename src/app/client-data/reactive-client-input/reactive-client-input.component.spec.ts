import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveClientInputComponent } from './reactive-client-input.component';

describe('ReactiveClientInputComponent', () => {
  let component: ReactiveClientInputComponent;
  let fixture: ComponentFixture<ReactiveClientInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveClientInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveClientInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
