const { Client } = require('pg');
const config_database_env = require('./configs');

const _query = async (query, values, callback) => {
    const client = new Client(config_database_env(process.argv.slice(2)));

    try {
        await client.connect();
        const result = await client.query(query, values);

        callback(result.rows);
    } catch (error) {
        callback(error);
    }
    client.end()
};

module.exports = _query;
