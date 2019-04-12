import {Request, Response} from 'express';

class IndexController{

   public index(req:Request, res:Response) {
        res.send({text:' L API est /api/games'});
    }
}

export const indexController = new IndexController();