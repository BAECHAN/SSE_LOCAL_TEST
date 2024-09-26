import express from "express";
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 8090;

app.use(
  cors({
    origin: "http://localhost:5174", // React 개발 서버 도메인
    credentials: true, // 자격 증명 허용
  })
);
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  next();
});

// API 엔드포인트
app.get("/api/hello", (req: any, res: any) => {
  return res.json({
    message: "Hello, World!",
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
