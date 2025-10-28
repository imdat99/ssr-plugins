import { Hono } from 'hono'
import { renderer } from './entry.ssr'
import { serveStatic } from 'hono/bun'
import { i18nHonoMiddleware } from './Translation/server'
import { cors } from "hono/cors";
// import { renderer } from './renderer'

const app = new Hono()
app.use(serveStatic({ root: './public' }))
app.use(cors(), i18nHonoMiddleware, renderer)
// app.get('/', (c) => {
//   return c.render(<h1>Hello!</h1>)
// })

export default app
