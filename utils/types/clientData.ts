import { z } from "zod"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().email(),
    number: z.string(),
    message: z.string()
});

export {
    formSchema,
}