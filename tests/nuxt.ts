import {
  renderSuspended,
  registerEndpoint,
  mockComponent,
  mockNuxtImport,
} from '@nuxt/test-utils/runtime'

import { screen, within, fireEvent } from '@testing-library/vue'

export const render: typeof renderSuspended = (component, options = {}) => {
  return renderSuspended(component, {
    ...options,
  })
}

export {
  registerEndpoint,
  mockComponent,
  mockNuxtImport,
  within,
  screen,
  fireEvent,
}
