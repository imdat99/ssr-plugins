import { Hono } from 'hono'
import { renderer } from './entry.ssr'
import { serveStatic } from 'hono/bun'
import { i18nHonoMiddleware } from './Translation/server'
import { cors } from "hono/cors";
import { endpoint, jwtRpc, rpcServer } from 'api/rpc';
import { RedisClient } from "bun";
import type { JwtVariables } from 'hono/jwt'
import { contextStorage } from 'hono/context-storage';
import { CookieStore, Session, sessionMiddleware } from 'hono-sessions'
import { HonoVarTypes } from 'types';
type SessionDataTypes = {
  'counter': number
}
// import { renderer } from './renderer'
const app = new Hono<HonoVarTypes>();

app.use(cors(), async (c, next) => {
  c.set("fetch", app.request.bind(app));
  // c.set("acmCampaignClient", acmCampaignClient);
  await next();
}, contextStorage(), jwtRpc, rpcServer);

app.use(serveStatic({ root: './public' }))
app.use(i18nHonoMiddleware, renderer)
console.log("app running");
// app.get('/', (c) => {
//   return c.render(<h1>Hello!</h1>)
// })

export default app