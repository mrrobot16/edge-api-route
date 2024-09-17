import { createGreeting } from '@/utils';
import { createGreetingV2 } from '@/utils-v2';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  const data = {
    message: 'Hello world!',
    greeting: createGreeting('Hector'),
    greetingV2: createGreetingV2('John'),
  };

  const headers = {
    'Content-Type': 'application/json',
  };

  return new Response(JSON.stringify(data), { headers });
}