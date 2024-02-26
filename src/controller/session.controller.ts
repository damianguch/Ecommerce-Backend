import { Request, Response } from 'express';
import { validatePassword } from '../service/user.service';
import { createSession } from '../service/session.service';
import { signJwt } from '../utils/jwt.utils';
import config from 'config';

export async function createUserSessionHandler(req: Request, res: Response) {
  /** To create session, do the following */

  //Validate users password
  const user = await validatePassword(req.body);

  //If password is wrong, user will be false
  if (!user) {
    res.status(401).send('Invalid email or password');
  }

  //Create a session
  const session = await createSession(user._id, req.get('user-agent') || '');

  //Create an access token
  const accessToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get('accessTokenTtl') }
  );

  //Create a refresh token
  const refreshToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get('refreshTokenTtl') }
  );

  //Return access & refresh token
  res.status(200).send({ accessToken, refreshToken });
}
