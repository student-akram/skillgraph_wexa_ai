import driver from "../config/graph.js";
import {
  GET_ALL_PERSONS,
  GET_PERSON_BY_ID
} from "../queries/personQueries.js";

export const getAllPersons = async () => {

  const session = driver.session();

  try {

    const result = await session.run(GET_ALL_PERSONS);

    return result.records.map(record => record.get("p").properties);

  } finally {

    await session.close();

  }

};

export const getPersonById = async (id) => {

  const session = driver.session();

  try {

    const result = await session.run(
      GET_PERSON_BY_ID,
      { id }
    );

    if(result.records.length===0)
      return null;

    return result.records[0].get("p").properties;

  } finally {

    await session.close();

  }

};