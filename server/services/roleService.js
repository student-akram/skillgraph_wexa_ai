import driver from "../config/graph.js";
import {
  GET_ALL_ROLES,
  GET_ROLE_BY_ID
} from "../queries/roleQueries.js";

export const getAllRoles = async () => {
  const session = driver.session();

  try {
    const result = await session.run(GET_ALL_ROLES);

    return result.records.map(record => record.get("r").properties);

  } finally {
    await session.close();
  }
};

export const getRoleById = async (id) => {

  const session = driver.session();

  try {

    const result = await session.run(
      GET_ROLE_BY_ID,
      { id }
    );

    if (result.records.length === 0)
      return null;

    return result.records[0].get("r").properties;

  } finally {

    await session.close();

  }

};