import { Request, Response } from 'express';
import log from '../utils/logger';
import { createUser } from '../service/user.service';

export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUser(req.body);
    return res
      .status(201)
      .json({ user, message: 'User created successfully!' });
  } catch (err: any) {
    log.error(err);
    return res.status(409).send(err.message);
  }
}
