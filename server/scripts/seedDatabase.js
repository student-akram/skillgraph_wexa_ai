import driver from "../config/graph.js";

import { roles } from "./roles.js";
import { skills } from "./skills.js";
import { persons } from "./persons.js";

import {
  personSkills,
  roleSkills,
  prerequisites
} from "./relationships.js";

const session = driver.session();

async function seedDatabase() {
  try {

    console.log("Deleting existing graph...");

    await session.run(`
      MATCH (n)
      DETACH DELETE n
    `);

    console.log("Creating Roles...");

    for (const role of roles) {

      await session.run(
        `
        MERGE (r:Role {id:$id})
        SET
          r.name=$name,
          r.description=$description,
          r.averageSalary=$averageSalary
      `,
        role
      );

    }

    console.log("Creating Skills...");

    for (const skill of skills) {

      await session.run(
        `
        MERGE (s:Skill {id:$id})
        SET
          s.name=$name,
          s.category=$category,
          s.difficulty=$difficulty
      `,
        skill
      );

    }

    console.log("Creating Persons...");

    for (const person of persons) {

      await session.run(
        `
        MERGE (p:Person {id:$id})
        SET
          p.name=$name,
          p.email=$email,
          p.experience=$experience,
          p.bio=$bio
      `,
        person
      );

    }

    console.log("Creating Person Skills...");

    for (const item of personSkills) {

      for (const skill of item.skills) {

        await session.run(
          `
          MATCH (p:Person {name:$person})
          MATCH (s:Skill {name:$skill})

          MERGE (p)-[:HAS_SKILL]->(s)
        `,
          {
            person: item.person,
            skill
          }
        );

      }

    }

    console.log("Creating Role Skills...");

    for (const item of roleSkills) {

      for (const skill of item.skills) {

        await session.run(
          `
          MATCH (r:Role {name:$role})
          MATCH (s:Skill {name:$skill})

          MERGE (r)-[:REQUIRES_SKILL]->(s)
        `,
          {
            role: item.role,
            skill
          }
        );

      }

    }

    console.log("Creating Prerequisites...");

    for (const item of prerequisites) {

      await session.run(
        `
        MATCH (pre:Skill {name:$prerequisite})
        MATCH (s:Skill {name:$skill})

        MERGE (pre)-[:PREREQUISITE_FOR]->(s)
      `,
        item
      );

    }

    console.log("Database Seeded Successfully 🎉");

  } catch (error) {

    console.log(error);

  } finally {

    await session.close();
    await driver.close();

  }

}

seedDatabase();