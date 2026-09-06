export interface AudiobookshelfClient {
  health(): Promise<{ available: boolean }>;
}

export class HttpAudiobookshelfClient implements AudiobookshelfClient {
  constructor(
    private readonly baseUrl: string,
    private readonly apiKey: string
  ) {}

  async health(): Promise<{ available: boolean }> {
    try {
      const response = await fetch(new URL("/status", this.baseUrl), {
        headers: { Authorization: `Bearer ${this.apiKey}` },
        signal: AbortSignal.timeout(3_000)
      });
      return { available: response.ok };
    } catch {
      return { available: false };
    }
  }
}
