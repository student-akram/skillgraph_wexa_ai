import driver from "../config/graph.js";
import { GET_ALL_ROLES } from "../queries/roleQueries.js";

export const getAllRoles = async () => {

    const session = driver.session();

    try {

        const result = await session.run(GET_ALL_ROLES);

        return result.records.map(record => {

            return record.get("r").properties;

        });

    }
    finally {

        await session.close();

    }

}