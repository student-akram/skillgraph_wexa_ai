import driver from "../config/graph.js";
import { FIND_ROLE_SKILLS } from "../queries/skillGapQueries.js";

export const findSkillGap = async (roleId, userSkills) => {

    const session = driver.session();

    try {

        const result = await session.run(
            FIND_ROLE_SKILLS,
            { roleId }
        );

        const roleSkills = result.records.map(record =>
            record.get("skill")
        );

        const missingSkills = roleSkills.filter(
            skill => !userSkills.includes(skill)
        );

        return {
            targetRole: roleId,
            requiredSkills: roleSkills,
            missingSkills
        };

    } finally {

        await session.close();

    }

};