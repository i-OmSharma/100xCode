"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const createUser_1 = require("./routes/createUser");
const insertUser_1 = require("./routes/insertUser");
const getUser_1 = require("./routes/getUser");
const deleteUser_1 = require("./routes/deleteUser");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.post("/users", insertUser_1.insertUser);
app.get("/users/:email", getUser_1.getUser);
app.delete("/users/:username", deleteUser_1.deleteUser);
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, db_1.connectToDB)();
    yield (0, createUser_1.createUser)();
    console.log(`Server is running at http://localhost:${port}`);
}));
