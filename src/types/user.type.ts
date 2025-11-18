import { z } from 'zod';
// source of truth for user
export const UserSchema = z.object({
    id : z.number(),
    name: z.string(),
    email: z.email().optional(),
    age: z.number().min(0).optional(),
});

export type User = z.infer<typeof UserSchema>;

//Database related type
export type UserDocument = User&{
    _id: string;
    createdAt: Date;
    updatedAt: Date;
};
