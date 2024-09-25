import axios from 'axios';
// import path from 'path'

import { createGreeting } from '@lib/utils';
import { createGreetingV2 } from '@lib/utils-v2';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
	const url = new URL(req.url)
	const baseUrl = `${url.protocol}//${url.host}`;
	// const test = await axios.get(`${baseUrl}/api/test`);

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

// import { createGreeting } from '@lib/utils';
// import { createGreetingV2 } from '@lib/utils-v2';