import { z } from 'zod'

// 포스트 입력 데이터 스키마
export const PostInputSchema = z.object({
  title: z.string().min(10, '제목은 최소 10자 이상이어야 합니다.'),
  slug: z.string().min(10, '슬러그는 최소 10자 이상이어야 합니다.'),
  category: z.string().min(1, '카테고리는 필수입니다.'),
  images: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  description: z.string().min(1, '설명은 필수입니다.'),
  isPublished: z.boolean(),
  avgRating: z.coerce
    .number()
    .min(0, '평균 평점은 최소 0이어야 합니다.')
    .max(5, '평균 평점은 최대 5이어야 합니다.'),
  numReviews: z.coerce
    .number()
    .int()
    .nonnegative('리뷰 수는 0 이상의 정수여야 합니다.'),
  numViews: z.coerce
    .number()
    .int()
    .nonnegative('조회 수는 0 이상의 정수여야 합니다.'),
  numLikes: z.coerce
    .number()
    .int()
    .nonnegative('좋아요 수는 0 이상의 정수여야 합니다.'),
  reviews: z.array(z.any()).default([]),
})

// PostInput 타입 추출
export type PostInput = z.infer<typeof PostInputSchema>
