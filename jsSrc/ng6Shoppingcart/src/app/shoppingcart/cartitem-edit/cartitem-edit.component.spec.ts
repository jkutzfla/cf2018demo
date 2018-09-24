import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartitemEditComponent } from './cartitem-edit.component';

describe('CartitemEditComponent', () => {
  let component: CartitemEditComponent;
  let fixture: ComponentFixture<CartitemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartitemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartitemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
