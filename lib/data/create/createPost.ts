'use server'
import { getUser } from "../read/getUser"
import { db } from "@/configs/prisma"
import {formSchema} from '@/lib/FormTheme'
import {z} from 'zod'
export const createPost =  async (values : z.infer<typeof formSchema>) => {
    const user = await getUser()
    const post = await db.post.create({
              data : {
                authorId:user?.id!,
                text:values.text,
                title:values.title,
                img:values.img
              }
    })
    return post
}