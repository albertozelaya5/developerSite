import { z } from "zod";

export const loginSchema = z.object({
  userName: z.string().min(1, {
    message: "Username must be at least 1 characters.",
  }),
  password: z.string().min(1, {
    message: "Password must be at least 1 characters.",
  }),
});
