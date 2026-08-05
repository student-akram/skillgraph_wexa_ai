export const GET_ALL_PERSONS = `
MATCH (p:Person)
RETURN p
ORDER BY p.name
`;

export const GET_PERSON_BY_ID = `
MATCH (p:Person {id:$id})
RETURN p
`;