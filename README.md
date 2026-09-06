# Sonora Server

Node.js API for the Sonora self-hosted audiobook platform.

It presents a stable, versioned API to companion clients while Audiobookshelf owns library discovery and media streaming. The server keeps privileged Audiobookshelf credentials out of mobile devices.

## Development

1. Copy `.env.example` to `.env` and replace placeholder secrets.
2. Start the local services: `docker compose up -d audiobookshelf postgres`.
3. Install dependencies: `npm install`.
4. Start the API: `npm run dev`.
5. Verify with `GET http://localhost:3333/v1/health`.

See [the API contract](docs/api-contract.md) for the initial client-facing surface.