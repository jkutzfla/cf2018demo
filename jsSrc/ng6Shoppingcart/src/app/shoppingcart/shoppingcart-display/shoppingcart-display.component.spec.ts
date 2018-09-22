import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcartDisplayComponent } from './shoppingcart-display.component';

describe('ShoppingcartDisplayComponent', () => {
  let component: ShoppingcartDisplayComponent;
  let fixture: ComponentFixture<ShoppingcartDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingcartDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingcartDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
