import { Instance as Chalk } from 'chalk'

import { verifyAuth } from './lib/auth'
const colors = new Chalk({ level: 1 })

export default function middleware (request: Request) {
	console.log(verifyAuth)
	const { method, url, headers } = request
	// console.log(`ENDPOINT: ${req.url}`)
	// console.log(`METHOD: ${req.method}`)
	// console.log(`HEADERS: ${req.headers.get('content-type')}`)
	const message = `${colors.red(method)} ${colors.green(url)} ${colors.red(headers.get('user-agent'))}`
	console.log(message)
}

// // import { NextResponse } from 'next/server';
// import { verifyAuth } from '@lib/auth'
// // The country to block from accessing the secret page
// const BLOCKED_COUNTRY = 'SE';
 
// // Trigger this middleware to run on the `/secret-page` route
// export const config = {
//   matcher: '/api/test',
// };
 
// export default function middleware(request: Request) {
// 	console.log(verifyAuth)
//   // Extract country. Default to US if not found.
// //   const country = (request.geo && request.geo.country) || 'US';
 
// //   console.log(`Visitor from ${country}`);
 
// //   // Specify the correct route based on the requests location
// //   if (country === BLOCKED_COUNTRY) {
// //     request.url.pathname = '/login';
// //   } else {
// //     request.url.pathname = `/secret-page`;
// //   }
 
//   // Rewrite to URL
// //   return NextResponse.rewrite(request.url);
// }