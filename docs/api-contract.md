# Sonora API contract, v1

Sonora exposes a versioned JSON API at `/v1`. It is implemented and hosted as part of the Sonora Node.js service; no third-party media server is involved.

## Authentication

The Android app authenticates with Sonora. Successful authentication returns a short-lived Sonora JWT; clients send it as `Authorization: Bearer <token>`. Private media paths are never exposed directly.

## First endpoints

| Endpoint | Purpose |
| --- | --- |
| `GET /v1/health` | Service availability for setup and diagnostics. |
| `POST /v1/auth/login` | Exchange user credentials for a Sonora session. |
| `GET /v1/libraries` | Libraries available to the signed-in user. |
| `GET /v1/books` | Cursor-paginated audiobook list with filtering. |
| `GET /v1/books/{id}` | Book metadata, chapters, cover, and playback state. |
| `PUT /v1/books/{id}/progress` | Idempotently sync current position and completion. |
| `POST /v1/books/{id}/stream` | Return a Sonora-authorized, time-limited stream URL. |

Progress writes will accept a client-generated idempotency key so reconnects and multi-device playback cannot create conflicting history.
