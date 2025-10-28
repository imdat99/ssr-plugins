import { Hono } from 'hono'
import { renderer } from './entry.ssr'
import { serveStatic } from 'hono/bun'
import { i18nHonoMiddleware } from './Translation/server'
import { cors } from "hono/cors";
import { rpcServer } from 'api/rpc';
// import { renderer } from './renderer'
const app = new Hono()
app.use(cors(), rpcServer);
app.use(serveStatic({ root: './public' }))
app.use(i18nHonoMiddleware, renderer)
console.log("app running");
// app.get('/', (c) => {
//   return c.render(<h1>Hello!</h1>)
// })

export default app
