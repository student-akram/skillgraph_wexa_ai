export const GET_ALL_ROLES = `
MATCH (r:Role)
RETURN r
ORDER BY r.name
`;
export const GET_ROLE_BY_ID = `
MATCH (r:Role {id:$id})
RETURN r
`;