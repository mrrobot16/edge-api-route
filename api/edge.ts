export const config = {
  runtime: 'edge',
};

function handler(request: Request) {
	const params = new URLSearchParams(request.url)
	const url = new URL(request.url)
	const data = {
		params,
		url,
		status: 200
	};

	const headers = {
	'Content-Type': 'application/json',
	};
	return new Response(JSON.stringify(data), { headers });
}

const GET = handler
export default GET