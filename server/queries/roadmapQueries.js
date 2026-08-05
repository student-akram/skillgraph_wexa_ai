export const GET_LEARNING_ROADMAP = `
MATCH path =
(start:Skill)-[:PREREQUISITE_FOR*1..]->(target:Skill {name:$skill})

RETURN path
`;