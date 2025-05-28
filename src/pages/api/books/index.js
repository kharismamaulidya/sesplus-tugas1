const BACKEND_URL = 'http://localhost:3333'

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
   case 'GET': {
  const { search } = req.query; // ⬅️ ini penting!
  let url = `${BACKEND_URL}/books`;

  if (search) {
    url += `?search=${encodeURIComponent(search)}`;
  }

  try {
    const fetchRes = await fetch(url);
    const data = await fetchRes.json();
    return res.status(fetchRes.status).json(data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Gagal mengambil data dari backend" });
  }
}

    case 'POST': {
      const { title, author, description  } = req.body;
      console.log(title, author);

        // Validasi input
  if (!title || !author) {
    return res.status(400).json({ message: "Judul dan penulis harus diisi" });
  }

      const fetchRes = await fetch(`${BACKEND_URL}/students`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            title: title,
            author:author,
            description: description 
         }),
      });

      const data = await fetchRes.json();
      return res.status(fetchRes.status).json(data);
    }

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
