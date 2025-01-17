import { Data, IPostInput } from '@/types'
import { toSlug } from './utils'

const posts: IPostInput[] = [
  {
    title: '고정된 요소에 대한 재미있는 컨텍스트 인식 애니메이션 탐색',
    slug: toSlug('Explore fun, context-aware animations of anchored elements'),
    category: 'tutorial',
    images: ['/images/tutorial1-1.jpg', '/images/tutorial1-2.jpg'],
    tags: ['css', '3D', 'gsap', 'Three.js'],
    description: '',
    isPublished: true,
    avgRating: 4.71,
    numReviews: 7,
    numViews: 9,
    numLikes: 1,
    reviews: [],
  },
]
const data: Data = {
  headerMenus: [
    {
      name: 'Webstoryboy',
      href: '/',
    },
    {
      name: 'Tutorial',
      href: '/tutorial',
    },
    {
      name: 'Lecture',
      href: '/lecture',
    },
    {
      name: 'Reference',
      href: '/reference',
    },
    {
      name: 'Inspiration',
      href: '/inspiration',
    },
  ],
  posts,
}

export default data
