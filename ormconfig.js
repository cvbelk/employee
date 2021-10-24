module.exports = {
    'type': 'postgres',
    'url': process.env.DB_URL,
    'entities': [process.env.ENTITY_PATH],
    'synchronize': true,
    "port": 5444,
    "username": "postgres",
    "password": "password"
}

// module.exports = {
//     "type": "mysql",
//     "host": "localhost",
//     "port": 3306,
//     "username": "test",
//     "password": "test",
//     "database": "test"
//  }

// TYPEORM_ENTITIES
// TYPEORM_ENTITIES_DIR
//TYPEORM_ENTITIES = entity/*.js,modules/**/entity/*.js
//'entities': [process.env.ENTITY_PATH], 'src/**/entity/**{.ts, .js}', 