export const GET_ALL_SKILLS = `
MATCH (s:Skill)
RETURN s
ORDER BY s.name
`;

export const GET_SKILL_BY_ID = `
MATCH (s:Skill {id:$id})
RETURN s
`;