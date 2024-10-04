import express, { Request, Response, NextFunction, Application } from 'express';
import indexRoute from './routes/indexRoute';

const app: Application = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRoute);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
})
