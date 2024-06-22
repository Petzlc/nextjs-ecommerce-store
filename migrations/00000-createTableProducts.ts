import { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE products (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name varchar(100) NOT NULL,
      variety varchar(100) NOT NULL,
      type varchar(30) NOT NULL,
      producer varchar(100) NOT NULL,
      region varchar(100) NOT NULL,
      year varchar(100) NOT NULL,
      price integer NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE products`;
}
