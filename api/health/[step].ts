import { createGreeting } from '../../lib/utils';
import { createGreetingV2 } from '../../lib/utils-v2';
import axios from 'axios';
export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
	// console.log('req', req)
	const url = new URL(req.url)
	const baseUrl = `${url.protocol}//${url.host}`;
	// console.log('req.params', req)
	// console.log('req.body', await req.json())
	const test = (await axios.get(`${baseUrl}/api/test`))
	console.log('test', test.data)
	const data = {
		message: 'Hello world!',
		greeting: createGreeting('Hector'),
		greetingV2: createGreetingV2('John'),
		// test: test.data,
	};

	const headers = {
	'Content-Type': 'application/json',
	};

	return new Response(JSON.stringify(data), { headers });
}