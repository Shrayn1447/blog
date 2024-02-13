import {z} from 'zod'
export const formSchema = z.object({
    text: z
      .string()
      .min(4, { message: "Слишком короткий" })
      .max(350, { message: "Максимально 350 символов" }),
    title: z.string()
      .min(4, { message: "Слишком кототкий" })
      .max(30, { message: "Максимально 30 символов" }),
    img: z.string().url({ message: "Не правельный url" }),
  });