import { Instance as Chalk } from 'chalk'
const colors = new Chalk({ level: 1 })

export default function middleware (request: Request) {
	const { method, url, headers } = request
	// console.log(`ENDPOINT: ${req.url}`)
	// console.log(`METHOD: ${req.method}`)
	// console.log(`HEADERS: ${req.headers.get('content-type')}`)
	const message = `${colors.red(method)} ${colors.green(url)} ${colors.red(headers.get('user-agent'))}`
	console.log(message)
}