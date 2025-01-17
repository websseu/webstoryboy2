import Link from 'next/link'
import { GiMoebiusStar, GiTuba } from 'react-icons/gi'
import { MdStars } from 'react-icons/md'
import Menu from './Menu'

export default function Header() {
  return (
    <header id='header' className='border-b-2 border-black'>
      <div className='flex justify-between items-center mx-4'>
        <div className='w-9 h-9 bg-background rounded-full items-center justify-center ring ring-gray-300/20 hover:bg-red-50 bg-mainBg flex cursor-pointer'>
          <Link href='/'>
            <GiMoebiusStar size='20' />
          </Link>
        </div>
        <div className='md:my-2 my-1 bg-background md:px-4 px-2'>
          <Link
            href={'/'}
            className='flex items-center md:text-8xl sm:text-7xl text-6xl poppins uppercase font-black'
          >
            <span className='mr-[-0.5vw] inline-block'>st</span>
            <MdStars className='animate-color' />
            <span className='ml-[-0.5vw] inline-block'>ry</span>
          </Link>
        </div>
        <div className='w-9 h-9 bg-background rounded-full items-center justify-center ring ring-gray-300/20 hover:bg-red-50 bg-mainBg flex cursor-pointer'>
          <Link href='/'>
            <GiTuba size='20' />
          </Link>
        </div>
      </div>
      <Menu />
    </header>
  )
}
