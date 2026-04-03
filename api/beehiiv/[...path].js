export default async function handler(req, res) {
  const { path = [] } = req.query
  const beehiivPath = Array.isArray(path) ? path.join('/') : path

  const url = new URL(`https://api.beehiiv.com/v2/${beehiivPath}`)

  // Forward query params (except the catch-all "path" param)
  const { path: _omit, ...queryParams } = req.query
  Object.entries(queryParams).forEach(([k, v]) => url.searchParams.set(k, v))

  const response = await fetch(url.toString(), {
    method: req.method,
    headers: {
      Authorization: req.headers.authorization || '',
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()
  res.status(response.status).json(data)
}
