import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import StudentForm from '../../components/StudentForm'; // ⬅️ gunakan komponen khusus students

export default function EditStudent() {
  const router = useRouter();
  const { id } = router.query;
  const [student, setStudent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    async function fetchStudent() {
      try {
        const res = await fetch(`/api/students/${id}`);
        const data = await res.json();
        setStudent(data);
      } catch (err) {
        console.error(err);
        setError('Gagal memuat data siswa');
      }
    }

    fetchStudent();
  }, [id]);

  const updateStudent = async (data) => {
    await fetch(`/api/students/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    router.push('/students'); // ⬅️ redirect kembali ke daftar students
  };

  if (!student) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return <StudentForm initialData={student} onSubmit={updateStudent} />;
}
