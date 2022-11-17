<<<<<<< HEAD
# middleGOODs
bài giữa kì petDATA
=======
1. Raw query
SELECT * FROM Users

2. ORM (Object Relational Mapping)
User.findAll()

SEQUELIZE
- Getting Started: https://sequelize.org/docs/v6/getting-started/
- Sequelize CLI: https://sequelize.org/docs/v6/other-topics/migrations/#installing-the-cli
- Migration sequelizerc: https://sequelize.org/docs/v6/other-topics/migrations/#the-sequelizerc-file
- Migration: https://sequelize.org/docs/v6/other-topics/migrations/
>>>>>>> fe348a3 (11/11/2020 30%)

- {
  "development": {
    "username": "root",
    "password": "",
    "database": "",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

- env: DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=

caif node module