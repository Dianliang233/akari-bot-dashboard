import 'server-only'

export function fetchAPI(
  input: URL | string,
  init: Parameters<typeof fetch>[1]
) {
  return fetch(
    new URL({
      ...new URL(input),
      protocol: 'https',
      host: process.env.API_HOST!,
    }),
    {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.API_TOKEN}`,
        ...init?.headers,
      },
    }
  )
}
