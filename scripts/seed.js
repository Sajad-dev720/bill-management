const { db } = require("@vercel/postgres");
const { users, roles, user_roles } = require("./placeholder-data.js");
const bcrypt = require("bcrypt");

async function seedUsers(client) {
  try {
    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
          INSERT INTO users (id, name, username, password)
          VALUES (${user.id}, ${user.name}, ${user.username}, ${hashedPassword})
          ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      users: insertedUsers,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedRoles(client) {
  try {
    console.log(roles);
    // Insert data into the "roles" table
    const insertedRoles = await Promise.all(
      roles.map(async (role) => {
        return client.sql`
          INSERT INTO roles (id, role_name)
          VALUES (${role.id}, ${role.role_name})
          ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded ${insertedRoles.length} roles`);
  } catch (error) {
    console.error("Error seeding roles:", error);
    throw error;
  }
}

async function seedUserRoles(client) {
  try {
    const insertedUserRoles = await Promise.all(
      user_roles.map(async (userRoles) => {
        return client.sql`
            INSERT INTO user_roles (user_id, role_id)
            VALUES (${userRoles.user_id}, ${userRoles.role_id})
            ON CONFLICT (user_id, role_id) DO NOTHING;
          `;
      })
    );
  } catch (error) {
    console.error("Error seeding user_roles:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedRoles(client);
  await seedUserRoles(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
