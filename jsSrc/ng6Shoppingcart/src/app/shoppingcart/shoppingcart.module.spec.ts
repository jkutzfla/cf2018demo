import { ShoppingcartModule } from './shoppingcart.module';

describe('ShoppingcartModule', () => {
  let shoppingcartModule: ShoppingcartModule;

  beforeEach(() => {
    shoppingcartModule = new ShoppingcartModule();
  });

  it('should create an instance', () => {
    expect(shoppingcartModule).toBeTruthy();
  });
});
