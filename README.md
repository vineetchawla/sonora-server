# Sonora Server

A fully custom, self-hosted Node.js audiobook service.

Sonora owns its own media catalog, user accounts, authenticated streaming URLs, and listening-progress sync. Android and future clients talk only to Sonora's versioned API.

## Development

1. Copy `.env.example` to `.env` and replace placeholder secrets.
2. Put audiobook folders in `./data/audiobooks`.
3. Start the complete local stack:

   ```sh
   docker compose up --build
   ```

4. Verify the API:

   ```sh
   curl http://localhost:3333/v1/health
   ```

The service receives the media library at `/media/audiobooks` as a read-only volume. The next implementation step is catalog indexing into PostgreSQL, followed by authenticated range streaming and playback-progress synchronization.

See [the API contract](docs/api-contract.md) for the mobile-facing API.