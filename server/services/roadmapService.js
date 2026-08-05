import driver from "../config/graph.js";
import { GET_LEARNING_ROADMAP } from "../queries/roadmapQueries.js";

export const getRoadmap = async (skill) => {

    const session = driver.session();

    try {

        const result = await session.run(
            GET_LEARNING_ROADMAP,
            { skill }
        );

        if(result.records.length===0){

            return [];

        }

        const path=result.records[0].get("path");

        return path.segments.map(segment=>{

            return{

                from:segment.start.properties.name,

                to:segment.end.properties.name

            }

        });

    }

    finally{

        await session.close();

    }

}