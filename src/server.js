import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import Fastify from "fastify";
import { getConfig } from "./config.js";
import { healthRoutes } from "./routes/health.js";

const config = getConfig();
const app = Fastify({ logger: true });

await app.register(cors, { origin: config.SONORA_ALLOWED_ORIGIN });
await app.register(jwt, { secret: config.SONORA_JWT_SECRET });
await app.register(healthRoutes, { prefix: "/v1" });

await app.listen({ port: config.SONORA_PORT, host: "0.0.0.0" });
