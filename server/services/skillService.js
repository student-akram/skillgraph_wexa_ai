import driver from "../config/graph.js";
import {
  GET_ALL_SKILLS,
  GET_SKILL_BY_ID
} from "../queries/skillQueries.js";

export const getAllSkills = async () => {

  const session = driver.session();

  try {

    const result = await session.run(GET_ALL_SKILLS);

    return result.records.map(record => record.get("s").properties);

  } finally {

    await session.close();

  }

};

export const getSkillById = async (id) => {

  const session = driver.session();

  try {

    const result = await session.run(
      GET_SKILL_BY_ID,
      { id }
    );

    if (result.records.length === 0)
      return null;

    return result.records[0].get("s").properties;

  } finally {

    await session.close();

  }

};