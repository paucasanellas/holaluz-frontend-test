import { createResolver, defineNuxtModule, addComponentsDir } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'Module i18n',
    configKey: 'module-i18n',
  },
  setup() {
    const { resolve } = createResolver(import.meta.url)

    addComponentsDir({
      path: resolve('components'),
    })
  },
})
