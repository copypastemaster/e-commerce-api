import { Router, Response, Request, NextFunction } from 'express';
import { getData } from '../controllers/indexController';

const indexRoute: Router = Router();

indexRoute.get('/', getData);


export default indexRoute;