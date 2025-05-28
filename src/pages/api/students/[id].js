import { students } from "@/data_students";

const BACKEND_URL = 'http://localhost:3333';

export default async function handler(req, res) {
  const { method, query: { id } } = req;

  switch (method) {
    case 'GET': {
      const fetchRes = await fetch(`${BACKEND_URL}/students/${id}`);
      const data = await fetchRes.json();
      return res.status(fetchRes.status).json(data);
    }

    case 'PUT': {
      const { name, age, student_class: student_class } = req.body;
      const fetchRes = await fetch(`${BACKEND_URL}/students/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, age, student_class }),
      });

      const data = await fetchRes.json();
      return res.status(fetchRes.status).json(data);
    }

    case 'DELETE': {
      const fetchRes = await fetch(`${BACKEND_URL}/students/${id}`, {
        method: 'DELETE',
      });

      if (fetchRes.status === 204 || fetchRes.status === 200) {
        return res.status(fetchRes.status).json({ message: 'Student deleted successfully' });
      }

      const data = await fetchRes.json();
      return res.status(fetchRes.status).json(data);
    }

    default:
      return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
