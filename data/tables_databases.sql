drop table hero_teams;

create table hero_teams (
	id serial Primary Key,
	superhero varchar, 
	team varchar,
	universe varchar,
	alignment varchar 
);

select * FROM hero_teams;

create table heroes (
	id int,
	universe varchar, 
	superhero varchar,
	identity varchar,
	gender varchar, 
	race varchar, 
	alignment varchar, 
	intelligence integer,
	strength integer,
	speed integer,
	durability integer, 
	power integer, 
	combat integer	
);

select * FROM heroes;

