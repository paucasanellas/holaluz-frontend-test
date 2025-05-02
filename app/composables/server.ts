import type { NitroFetchRequest, NitroFetchOptions } from 'nitropack'

export const useServer = <T>(
  url: NitroFetchRequest,
  options?: NitroFetchOptions<NitroFetchRequest>,
) => {
  return $fetch<T>(url, {
    ...options,
  })
}
