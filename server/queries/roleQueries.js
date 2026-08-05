export const GET_ALL_ROLES = `
MATCH (r:Role)
RETURN r
ORDER BY r.name
`;