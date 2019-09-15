const mariadb = require('mariadb');
const pool = mariadb.createPool({ user: 'root', password: 'root', database: 'clanmembers' });

module.exports = class database {

  constructor() {
    pool.getConnection().then(conn => this.conn = conn)
  }

  read(id) {
    let sql = `
    SELECT *
    FROM staff
    `;
    if (id) {
      sql += `
      WHERE id = ${id}
      `
    };
    const result = this.conn.query(sql);
    return result;
  }
  create() {

  }
  update() {

  }
  delete() {

  }
}