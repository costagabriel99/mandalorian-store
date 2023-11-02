export default async function handle(req, res) {
  const url = decodeURIComponent(req.url).replace('/api?url=', '')
  const response = await fetch(`https://mandalorian-store.netlify.app/api/${url}`)
  const json = await response.json()
  res.status(response.status).json(json)
}
