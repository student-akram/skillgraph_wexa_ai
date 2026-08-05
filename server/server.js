import driver from "./config/graph.js";

async function test() {

    const session = driver.session();

    const result = await session.run(`
        MATCH (n)
        RETURN count(n) AS total
    `);

    console.log(result.records[0].get("total").toString());

    await session.close();
}

test();