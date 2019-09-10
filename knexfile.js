// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/data.car-dealer.db3'
    },
    migration: {
      directory: './data/dbConfig'
    },
    seeds: {
      directory: './data/seeds'
    },
  },
}
