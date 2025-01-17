// mongoose에서 필요한 타입 및 함수들을 import
import { Document, Model, model, models, Schema } from 'mongoose'
import { IPostInput } from '@/types'

export interface IPost extends Document, IPostInput {
  _id: string // MongoDB 문서의 고유 ID
  createdAt: Date
  updatedAt: Date
}

// Mongoose 스키마 정의
const postSchema = new Schema<IPost>(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    images: [String],
    tags: { type: [String], default: ['new arrival'] },
    description: {
      type: String,
      trim: true,
    },
    isPublished: {
      type: Boolean,
      required: true,
      default: false,
    },
    avgRating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    numViews: {
      type: Number,
      required: true,
      default: 0,
    },
    numLikes: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Review',
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
)

// 이미 생성된 모델이 있으면 이를 재사용하고, 없으면 새 모델 생성
const Post = (models.Post as Model<IPost>) || model<IPost>('Post', postSchema)

export default Post
