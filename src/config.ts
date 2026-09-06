import { z } from "zod";

const environment = z.object({
  SONORA_PORT: z.coerce.number().int().min(1).max(65535).default(3333),
  SONORA_ALLOWED_ORIGIN: z.string().url().default("http://localhost:3000"),
  SONORA_JWT_SECRET: z.string().min(32),
  ABS_BASE_URL: z.string().url(),
  ABS_SERVICE_API_KEY: z.string().min(1)
});

export type Config = z.infer<typeof environment>;

export function getConfig(input = process.env): Config {
  return environment.parse(input);
}
