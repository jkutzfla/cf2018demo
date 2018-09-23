import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcartCreateComponent } from './shoppingcart-create.component';

describe('ShoppingcartCreateComponent', () => {
  let component: ShoppingcartCreateComponent;
  let fixture: ComponentFixture<ShoppingcartCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingcartCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingcartCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
