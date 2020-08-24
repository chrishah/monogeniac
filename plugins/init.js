export default async function ({ store, app }) {
  if (process.server) {
    await store.dispatch('fetchCategories')
    await store.dispatch('skip/fetchSkipLimits')
  }
  // Spa Fallback
  if (process.client && !store.state.categories[app.i18n.locale]) {
    await store.dispatch('fetchCategories')
    await store.dispatch('skip/fetchSkipLimits')
  }
  // Hot reload on development
  if (process.client && process.dev) {
    window.onNuxtReady(() => {
      window.$nuxt.$on('content:update', () => store.dispatch('fetchCategories'))
      window.$nuxt.$on('content:update', () => store.dispatch('skip/fetchSkipLimits'))
    })
  }
}
