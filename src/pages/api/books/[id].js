const BACKEND_URL = 'http://localhost:3333'

export default async function handler(req, res) {
  const { method, query: {id} } = req;

  switch (method) {
    case 'GET': {
      const fetchRes = await fetch(`${BACKEND_URL}/books/${id}`);
      const data = await fetchRes.json();
      return res.status(fetchRes.status).json(data);
    }    

    case 'PUT': {
const { title, author, description } = req.body;
const fetchRes = await fetch(`${BACKEND_URL}/books/${id}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title, author, description }),
});


      const data = await fetchRes.json();
      return res.status(fetchRes.status).json(data);
    }

  case 'DELETE': {
  const fetchRes = await fetch(`${BACKEND_URL}/books/${id}`, {
    method: 'DELETE',
  });

  if (fetchRes.status === 204 || fetchRes.status === 200) {
    return res.status(fetchRes.status).json({ message: 'Book deleted successfully' });
  }

  const data = await fetchRes.json();
  return res.status(fetchRes.status).json(data);
}

  }}
