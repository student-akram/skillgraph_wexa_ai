import driver from "./config/graph.js";

async function testConnection() {
    const session = driver.session();

    try {
        const result = await session.run(
            "RETURN 'Connected Successfully 🚀' AS message"
        );

        console.log(result.records[0].get("message"));
    } catch (error) {
        console.error("Database Connection Failed");
        console.error(error.message);
    } finally {
        await session.close();
        await driver.close();
    }
}

testConnection();