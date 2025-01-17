/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose'

// 글로벌 캐시를 설정합니다.
const cached = (global as any).mongoose || { conn: null, promise: null }

// MongoDB 데이터베이스에 연결
export const connectToDatabase = async (
  MONGODB_URI = process.env.MONGODB_URI
) => {
  // 캐시에 연결 객체(conn)가 존재한다면 기존 연결을 반환합니다.
  if (cached.conn) return cached.conn

  // MONGODB_URI가 제공되지 않았을 경우
  if (!MONGODB_URI) throw new Error('MONGODB_URI is missing')

  // 기존 프로미스가 없다면 mongoose.connect()를 호출하여 연결을 시작하고, 프로미스를 캐시에 저장합니다.
  cached.promise = cached.promise || mongoose.connect(MONGODB_URI)

  // 연결 프로미스가 완료되면 연결 객체를 캐시에 저장합니다.
  cached.conn = await cached.promise

  // 연결 객체를 반환합니다.
  return cached.conn
}
