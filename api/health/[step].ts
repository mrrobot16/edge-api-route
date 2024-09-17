import { createGreeting } from '../../lib/utils';
import { createGreetingV2 } from '../../lib/utils-v2';
import axios from 'axios';
export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
	// console.log('req.params', req)
	console.log('req.body', await req.json())
	const test = (await axios.get('http://localhost:3000/api/test'))
	const data = {
		message: 'Hello world!',
		greeting: createGreeting('Hector'),
		greetingV2: createGreetingV2('John'),
		test: test.data,
	};

	const headers = {
	'Content-Type': 'application/json',
	};

	return new Response(JSON.stringify(data), { headers });
}