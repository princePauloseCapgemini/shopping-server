import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  return res.send("Server is running on port 4000");
});

router.get("/api/login", (req: Request, res: Response) => {
  return res.send("Login Successfull");
});

router.post("/api/signup", (req: Request, res: Response) => {
  return res.send("Account created successfully");
});

export { router as mainRoutes };
