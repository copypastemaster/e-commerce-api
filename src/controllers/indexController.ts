import { Request, Response, NextFunction } from "express";
import client from "../config/database";

const getData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    
    const result = await client.query(`
      SELECT * FROM tblUsers
    `)

    res.status(201).json(result.rows[0]);
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
  }
}

export {
  getData
}