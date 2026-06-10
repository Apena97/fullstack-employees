import db from "#db/client";
import { createEmployee } from "#db/queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO
  for (let i = 0; i < 15; i++) {
    const employee = {
      name: faker.name.fullName(),
      birthday: faker.date.past(50).toISOString().split("T")[0],
      salary: faker.datatype.number({ min: 40000, max: 100000 }),
    };
    await createEmployee(employee);
  }
}
