# how to start dev

create the default route:

ng generate module --routing

src/app/core
src/app/shoppingcart
src/app/shared

#no: ng generate module app-routing --routing -m app --flat
ng generate module shoppingcart -m app
ng generate module core -m app
ng generate module shared -m app


ng generate component shoppingcart/shoppingcart-list -m shoppingcart --export
ng generate component shoppingcart/shoppingcart-display -m shoppingcart
ng generate component shoppingcart/shoppingcart-create -m shoppingcart
ng generate component shoppingcart/shoppingcart-detail -m shoppingcart
ng generate component shoppingcart/cartitem-edit -m shoppingcart
ng generate component shoppingcart/cartitem-add -m shoppingcart

ng generate service core/product -m core
ng generate service core/shoppingcart -m core
