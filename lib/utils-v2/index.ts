import { v4 as uuidv4 } from 'uuid'

// Generate a greeting with a unique ID
export const createGreetingV2 = (name: string) => {
  const id = uuidv4()
  return `Hello, ${name}! Your ID is ${id}.`
}