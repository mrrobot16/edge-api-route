export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
	const data = {
		message: 'Hello from api/test.ts!',
	};
	return new Response(JSON.stringify(data));
}