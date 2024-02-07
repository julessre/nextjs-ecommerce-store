import { Sql } from 'postgres';

export type Workshop = {
  id: number;
  title: string;
  workshop_date: string;
  timeframe: string;
  location: string | null;
  category: string | null;
  image: string;
  price: number;
  currency: string;
  description: string;
};

export async function up(sql: Sql) {
  await sql`
		CREATE TABLE workshops (
		id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		title varchar(70) NOT NULL,
		workshop_date varchar(40) NOT NULL,
 		timeframe varchar(40) NOT NULL,
 		location varchar(40),
 		category varchar(40),
 		image varchar(50) NOT NULL,
		price integer NOT NULL,
 		currency varchar(10) NOT NULL,
 		description varchar NOT NULL
		)
	`;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE workshops`;
}
