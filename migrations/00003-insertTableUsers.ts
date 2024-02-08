import { Sql } from 'postgres';

const users = [
  {
    id: 1,
    firstName: 'Viktor',
    lastName: 'Piwald',
    address: 'Witzelsbergergasse',
    postcode: 1150,
    mail: 'viktor.zangl@gmx.com',
  },
];

export async function up(sql: Sql) {
  for (const user of users) {
    await sql`
      INSERT INTO
        users (
          firstName,
          lastName,
          address,
          postcode,
          mail
        )
      VALUES
        (
          ${user.firstName},
          ${user.lastName},
          ${user.address},
          ${user.postcode},
          ${user.mail}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const user of users) {
    await sql`
    DELETE FROM users
    WHERE
      id = ${user.id}
      `;
  }
}
