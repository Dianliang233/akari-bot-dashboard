import 'server-only'

export function fetchAPI(input: string, init?: Parameters<typeof fetch>[1]) {
  return fetch(process.env.API_BASE_URL! + input, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.API_TOKEN}`,
      ...init?.headers,
    },
  })
}
