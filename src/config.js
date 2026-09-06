import { z } from "zod";

const environment = z.object({
  SONORA_PORT: z.coerce.number().int().min(1).max(65535).default(3333),
  SONORA_ALLOWED_ORIGIN: z.string().url().default("http://localhost:3000"),
  SONORA_JWT_SECRET: z.string().min(32),
  SONORA_MEDIA_ROOT: z.string().min(1).default("/media/audiobooks"),
  DATABASE_URL: z.string().url()
});

export function getConfig(input = process.env) {
  return environment.parse(input);
}
