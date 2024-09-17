import { createGreeting } from 'utils'

export const config = {
	runtime: 'edge',
  }
  
  export default async (req: any) => {
	const data = {
		message: 'Hello world!',
		greeting: createGreeting('asd'),
	}
	const headers = {
		'Content-Type': 'application/json',
	}
	const response = new Response(JSON.stringify(data), { headers })
	  return response
  }