import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

const PORT = process.env.PORT ?? 4000;

app.use(cors());
app.use(express.json());

app.listen(PORT, async () => {
  console.log('\x1b[45m%s\x1b[0m', `Server started on port ${PORT}`)
});
