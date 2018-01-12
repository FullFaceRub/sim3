create table if not exists users
(user_id serial primary key
,first_name varchar(180)
,last_name varchar(180)
,gender varchar(20)
,hobby varchar(180)
,hair_color varchar(40)
,eye_color varchar(40)
,birthday_day varchar(2)
,birthday_month varchar(10)
,birthday_year varchar(4))

alter table users
add column auth_id text,
add column email text,
add column password varchar(180)