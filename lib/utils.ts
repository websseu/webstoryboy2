import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 슬러그(slug) 형태로 변환하는 함수
export const toSlug = (text: string): string =>
  text
    .toLowerCase() // 모든 문자를 소문자로 변환
    .replace(/[^\w\s-]+/g, '') // 단어 문자(알파벳, 숫자), 공백, 하이픈(-)을 제외한 모든 문자 제거
    .replace(/\s+/g, '-') // 하나 이상의 공백을 하이픈(-)으로 변환
    .replace(/^-+|-+$/g, '') // 앞뒤에 있는 하이픈을 모두 제거
