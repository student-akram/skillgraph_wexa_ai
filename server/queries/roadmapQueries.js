export const GET_LEARNING_ROADMAP = `
MATCH path =
(start:Skill)-[:PREREQUISITE_FOR*]->(target:Skill {name:$skill})

RETURN path
`;