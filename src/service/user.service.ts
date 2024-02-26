import { omit } from 'lodash';
import userModel, { UserDocument } from '../models/user.model';

// Service to create a new user
export async function createUser(values: UserDocument) {
  try {
    const user = await userModel.create(values);
    return omit(user.toJSON(), 'password');
  } catch (err: any) {
    throw new Error(err);
  }
}

//Service To Validate User's Password
export async function validatePassword({
  email,
  password
}: {
  email: string;
  password: string;
}) {
  const user = await userModel.findOne({ email });

  if (!user) {
    return false;
  }
  //If user exist, call the comparePassword function
  const isValid = await user.comparePassword(password);
  if (!isValid) return false;

  //Otherwise return the user but omit the password
  return omit(user.toJSON(), 'password');
}
