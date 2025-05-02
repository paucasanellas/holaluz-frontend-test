import type { FetchOptions } from 'ofetch'
import type { RuntimeConfig } from 'nuxt/schema'
import type { FetchRepository } from '../domain/fetch.repository'

export class APIFetchRepository implements FetchRepository {
  private readonly API_ENDPOINT: string

  constructor({ config: { API_ENDPOINT } }: { config: RuntimeConfig }) {
    this.API_ENDPOINT = API_ENDPOINT
  }

  async fetch<T>(
    url: string,
    options: FetchOptions = {},
  ): Promise<T> {
    // @ts-expect-error: Method not included
    return $fetch<T>(url, {
      baseURL: this.API_ENDPOINT,
      ...options,
      onResponseError: (error) => {
        throw createError({
          data: error.response._data.error,
          statusCode: error.response.status,
          statusMessage: error.response.statusText,
        })
      },
    })
  }
}
