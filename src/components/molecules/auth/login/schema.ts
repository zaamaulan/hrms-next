import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string({ required_error: "Email Address is required" })
    .min(1, { message: "Email Address is required" })
    .email(),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, { message: "Password is required" }),
});
