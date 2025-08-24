import express from "express";

const authRouter = express.Router();

authRouter.get("/login", (req, res) => {
  res.send("Successfully logged in");
});
authRouter.post("/signup", (req, res) => {
  console.log(req.body);
});

export default authRouter;
