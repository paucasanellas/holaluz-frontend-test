import type { FetchOptions } from 'ofetch'

export interface FetchRepository {
  fetch<T>(
    url: string,
    options?: FetchOptions
  ): Promise<T>
}
