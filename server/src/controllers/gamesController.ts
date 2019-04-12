import { Request, Response } from 'express';
import pool from '../database';


class GamesController {

  public index(req: Request, res: Response) {
    pool.query('DESCRIBE games');
    res.send('games');

  }

  public async getOne(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const games = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
    console.log(games);
    if (games.length > 0) {
      return res.send(games[0]);
    }
    res.status(404).send({ text: 'le jeu n existe pas' });

  }
  public async list(req: Request, res: Response) {
    const games = await pool.query('SELECT * FROM games');
    res.json(games);
  }

  public async create(req: Request, res: Response): Promise<void> {
    await pool.query('INSERT INTO games set ?', [req.body]);
    res.send({ message: 'le jeu est enregistré' });
  }

  public async put(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    await pool.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
    res.send({ text: 'le jeun a bien été mis à jour' });
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query('DELETE FROM games WHERE  id = ?', [id]);
    res.send({ text: 'le jeu est bien supprimé' });
  }
}

const gamesController = new GamesController();
export default gamesController;