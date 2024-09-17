import { createGreeting  } from '../utils'


export const config = {
	runtime: 'edge',
  }
  
  export default async (req: any) => {
	createGreeting('world')
	  const response = new Response(JSON.stringify({ message: 'Hello world!' }), {
		  headers: { 'Content-Type': 'application/json' },
	  })
	  return response
  }