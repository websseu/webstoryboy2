'use client'
import React from 'react'
import data from '@/lib/data'
import { MenuItem } from '@/types'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Menu() {
  const pathname = usePathname()

  return (
    <nav className='header__nav'>
      <ul>
        {data.headerMenus.map((menu: MenuItem, index: number) => (
          <li key={index}>
            <Link
              href={menu.href}
              className={`hover:underline underline-offset-4 ${
                pathname === menu.href ? 'underline' : ''
              }`}
            >
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
