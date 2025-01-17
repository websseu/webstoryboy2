import data from '@/lib/data'
import { connectToDatabase } from '.'
import Product from './models/post.model'
import { cwd } from 'process'
import { loadEnvConfig } from '@next/env'

loadEnvConfig(cwd())

const main = async () => {
  try {
    const { posts } = data
    await connectToDatabase(process.env.MONGODB_URI)

    await Product.deleteMany()
    const createdProducts = await Product.insertMany(posts)

    console.log({
      createdProducts,
      message: 'Seeded database successfully',
    })
    process.exit(0)
  } catch (error) {
    console.error(error)
    throw new Error('Failed to seed database')
  }
}

main()
