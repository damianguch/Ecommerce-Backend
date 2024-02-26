import { TypeOf, object, string } from 'zod';

//Used for all user endpoints, definition for the payload
export const createUserSchema = object({
  body: object({
    name: string({
      required_error: 'Name is required'
    }),

    password: string({
      required_error: 'Name is required'
    }).min(6, 'Password too short- Should be 3 chars minimum'),

    passwordConfirmation: string({
      required_error: 'Password confirmation is required'
    }),

    email: string({
      required_error: 'Email is required'
    }).email('Email is not valid')
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: 'Passwords do not match',
    path: ['passwordConfirmation']
  })
});

export type CreateUserInput = TypeOf<typeof createUserSchema>;
