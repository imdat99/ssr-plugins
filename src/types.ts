import type { RedisClient } from "bun";
import { Session } from "hono-sessions";
import type { JwtVariables } from "hono/jwt";

export type HonoVarTypes = {
	Variables: {
		// session: Session<SessionDataTypes>;
		// session_key_rotation: boolean;
		redis: RedisClient;
	};
};
