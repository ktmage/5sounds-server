import express, { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";

const nodeEnv = process.env.NODE_ENV || "development";
dotenv.config({ path: path.resolve(process.cwd(), `.env.${nodeEnv}.local`) });

const app = express();
const port = process.env.PORT || 3000;

// 静的ファイルの設定
app.use(express.static(path.join(path.resolve(__dirname, "../public"))));

app.get("/api", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(path.resolve(__dirname, "../public/index.html")));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
