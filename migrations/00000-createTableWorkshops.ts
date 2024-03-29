import { Sql } from 'postgres';

export type Workshop = {
  id: number;
  title: string;
  workshopDate: string;
  timeframe: string;
  location: string | null;
  category: string | null;
  image: string;
  price: number;
  description: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE workshops (
      id integer PRIMARY key generated always AS identity,
      title varchar(70) NOT NULL,
      workshop_date varchar(40) NOT NULL,
      timeframe varchar(40) NOT NULL,
      location varchar(40),
      category varchar(40),
      image varchar(50) NOT NULL,
      price integer NOT NULL,
      description varchar NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE workshops`;
}
