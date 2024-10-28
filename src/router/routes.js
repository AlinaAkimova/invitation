import { createRouter, createMemoryHistory } from 'vue-router'
const routes = [
  { path: '/', component: () => import('@/pages/IndexPage.vue') },
  { path: '/info', component: () => import('@/pages/InfoPage.vue') },
]

export const router = createRouter({ 
    history: createMemoryHistory(),
    routes 
})
