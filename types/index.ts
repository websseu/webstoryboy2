import { z } from 'zod'
import { PostInputSchema } from '@/lib/validator'

export type Data = {
  headerMenus: {
    name: string
    href: string
  }[]
  posts: IPostInput[]
}

export type IPostInput = z.infer<typeof PostInputSchema>
