import pg from 'pg'

const pool=new pg.Pool({
    host:'localhost',
    port:5432,
    user:'postgres',
    password:'santanu2001',
    database:'youtube'

})


export default pool