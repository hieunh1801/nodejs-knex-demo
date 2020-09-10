const knex = require("knex");
const mysqlConfig =  {
    connectionLimit: 100,
    host: "172.27.131.201",
    database: "topoDb",
    user: "central",
    password: "Topodb@ast1",
}
const mysqlKnex = knex({
    client: "mysql",
    connection: {
        host: mysqlConfig.host,
        user: mysqlConfig.user,
        password: mysqlConfig.password,
        database: mysqlConfig.database
    },
    pool: { min: 0, max: 7 }
})

const test = async () => {
    // select query
    const roles = await mysqlKnex.select().from("Role");
    const roles1 = await mysqlKnex("Role").select();
    // console.log("test -> roles1", roles1)
    // console.log("test -> roles", roles)
    // const count = await mysqlKnex("Role").count({count: "*"});
    const [{count}]  = await mysqlKnex.count({count: "*"}).from("Role");
    console.log("test -> count", count)
}

test()