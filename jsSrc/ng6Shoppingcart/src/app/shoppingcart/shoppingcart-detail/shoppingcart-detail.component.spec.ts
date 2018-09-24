import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcartDetailComponent } from './shoppingcart-detail.component';

describe('ShoppingcartDetailComponent', () => {
  let component: ShoppingcartDetailComponent;
  let fixture: ComponentFixture<ShoppingcartDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingcartDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingcartDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
