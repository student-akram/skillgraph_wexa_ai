export const FIND_MENTORS = `
MATCH (p:Person)-[:HAS_SKILL]->(s:Skill)

WHERE s.name IN $skills

RETURN DISTINCT p
ORDER BY p.experience DESC
`;