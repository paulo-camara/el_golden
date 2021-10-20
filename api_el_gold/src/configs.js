const config_database_env = (env) => {
    const configs = {
        ['dev']: {
            host: 'localhost',
            port: 5432,
            user: "postgres",
            password: "011422",
            database: "db_challenge"
        },
        ['prod']: {}
    };

    return configs[env];
};

module.exports = config_database_env;