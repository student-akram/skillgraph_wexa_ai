import driver from "../config/graph.js";
import { FIND_MENTORS } from "../queries/mentorQueries.js";

export const findMentors = async (skills) => {

    const session = driver.session();

    try {

        const result = await session.run(
            FIND_MENTORS,
            { skills }
        );

        return result.records.map(record => record.get("p").properties);

    }

    finally {

        await session.close();

    }

}