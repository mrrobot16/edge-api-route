// import axios from 'axios'

export const config = {
	runtime: 'edge',
  }
  
  async function handler(request: Request) {
	  const { method, url, redirect } = request
	  const body = await request.json()
	  const URL_request_url = new URL(url)
	  const { protocol, host, pathname, search, searchParams } = URL_request_url
	  const baseUrl = `${protocol}//${host}`
	  const search_params_get_step = parseInt(searchParams.get('step') as string)
	  const step = search_params_get_step
	  // const test_endpoint = await axios.get(`${baseUrl}/api/test`)
  
	  const data = {
		  URL_request_url,
		  method: method,
		  baseUrl,
		  protocol, 
		  host, 
		  pathname,
		  search,
		  search_params_get_step,
		  body,
		  redirect
		  // test_endpoint_data: test_endpoint.data,
	  }
  
	  if(step === 1) {
  
	  }
  
	  const headers = {
		  'Content-Type': 'application/json',
	  }
	  const response = new Response(JSON.stringify(data), { headers })
	  return response
  }
  
  const POST = handler
  
  export default POST
  