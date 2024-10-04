import { Request, Response, NextFunction } from "express";
import { getUsers } from "../models/userSchema";

const getData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await getUsers();
    res.status(200).json(result);
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
  }
}

export {
  getData
}