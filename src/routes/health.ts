import type { FastifyInstance } from "fastify";
import type { AudiobookshelfClient } from "../clients/audiobookshelf.js";

export async function healthRoutes(
  app: FastifyInstance,
  client: AudiobookshelfClient
) {
  app.get("/health", async () => {
    const audiobookshelf = await client.health();
    return {
      status: audiobookshelf.available ? "ok" : "degraded",
      services: { audiobookshelf }
    };
  });
}
