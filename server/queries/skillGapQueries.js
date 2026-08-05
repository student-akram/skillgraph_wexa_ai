export const FIND_ROLE_SKILLS = `
MATCH (r:Role {id:$roleId})-[:REQUIRES_SKILL]->(s:Skill)
RETURN s.name AS skill
`;