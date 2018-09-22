/* set base data */

insert into users (lastname, firstname) values ('Kutz-Flamenbaum', 'Josh');
insert into users (lastname, firstname) values ('User', 'Demo');

insert into products (name, priceDollar, pricePoint, category) values ('Cheap Shampoo', 9.99, 0, 'Shampoo');
insert into products (name, priceDollar, pricePoint, category) values ('Drug Store Shampoo', 14.99, 0, 'Shampoo');
insert into products (name, priceDollar, pricePoint, category) values ('Prestige Shampoo', 28.00, 100, 'Shampoo');

insert into products (name, priceDollar, pricePoint, category) values ('Cheap Conditioner', 9.99, 0, 'Conditioner');
insert into products (name, priceDollar, pricePoint, category) values ('Drug Store Conditioner', 14.99, 0, 'Conditioner');
insert into products (name, priceDollar, pricePoint, category) values ('Prestige Conditioner', 28.00, 100, 'Conditioner');

update products set dateCreated=getdate(), dateModified=getdate();
