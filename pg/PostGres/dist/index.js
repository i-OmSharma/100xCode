"use strict";
// function to create a user table in DB.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    user: "om",
    host: "localhost",
    database: "mydb",
    password: "pass",
    port: 5432,
});
function createUserTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log(result);
    });
}
function insertIntoTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const insertQuery = `
            INSERT INTO users (
                username,
                email,
                password,
                created_at
            )
            VALUES($1, $2, $3, CURRENT_TIMESTAMP)
            RETURNING *;
        `;
        const Values = ['example', 'example@example.com', 'asdasd'];
        const res = yield client.query(insertQuery, Values);
        console.log('Insertion complete:', res.rows[0]);
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // await createUserTable()
            yield insertIntoTable();
        }
        catch (err) {
            console.log("ERROR", err);
        }
        finally {
            yield client.end(); //always close connection with DB
            console.log("Connection Closed");
        }
    });
}
main();
