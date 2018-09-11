create database cf2018demo

use master;
go

create login [cfdemo] with password=N'cfdemo', default_database=[master], check_expiration=off, check_policy=off
go

use cf2018demo
create user [cfdemo] for login [cfdemo]
--sql 2008:
EXEC sp_addrolemember N'db_owner', N'cfdemo'
--sql 2012:
ALTER ROLE [db_owner] ADD MEMBER [cfdemo]
