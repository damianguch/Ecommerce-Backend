import userModel, { UserDocument } from '../models/user.model';

export async function createUser(values: Record<string, UserDocument>) {
  try {
    return userModel.create(values);
  } catch (err: any) {
    throw new Error(err);
  }
}
