const { Pool } = require("pg");

const pool = new Pool({
	host: "localhost",
	user: "postgres", //Chinh lai user va pass
	password: "anhkhoa191217",
	database: "Hospital",
	port: process.env.DB_PORT || 5432,
});

async function testConnection() {
	try {
		const client = await pool.connect();
		console.log("Kết nối đến PostgreSQL thành công!");

		client.release(); // Đóng kết nối
	} catch (error) {
		console.error("Kết nối thất bại:", error.message);
	}
}

testConnection();

module.exports = pool;
