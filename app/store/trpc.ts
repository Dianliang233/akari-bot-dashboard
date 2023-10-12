import { createTRPCJotai } from 'jotai-trpc'
import { httpBatchLink, getFetch, loggerLink } from '@trpc/client'
import { AppRouter } from '@/routers'
import superjson from 'superjson'

const url = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000/trpc/'

const trpc = createTRPCJotai<AppRouter>({
  links: [
    loggerLink({
      enabled: () => true,
    }),
    httpBatchLink({
      url,
      fetch: async (input, init?) => {
        const fetch = getFetch()
        return fetch(input, {
          ...init,
          credentials: 'include',
        })
      },
    }),
  ],
  transformer: superjson,
})

export { trpc as default }
