import { v4 as uuidv4 } from 'uuid'
// import { NextResponse } from 'next/server'
// Generate a greeting with a unique ID
export const createGreeting = (name: string) => {
  const id = uuidv4()
  return `Hello, ${name}! Your ID is ${id}.`
}

// export function jsonResponse(status: number, data: any, init?: ResponseInit) {
//   return new NextResponse(JSON.stringify(data), {
//     ...init,
//     status,
//     headers: {
//       ...init?.headers,
//       'Content-Type': 'application/json',
//     },
//   })
// }
