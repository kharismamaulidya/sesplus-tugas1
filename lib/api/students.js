export async function getStudents() {
  const res = await fetch("http://localhost:3333/students");
  const json = await res.json();
  return json.data?.data || [];
}

export async function addStudent(student) {
  const res = await fetch("http://localhost:3333/students", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student),
  });
  if (!res.ok) throw new Error('Gagal menambah siswa');
  return await res.json();
}

export async function updateStudent(id, student) {
  const res = await fetch(`http://localhost:3333/students/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student),
  });
  if (!res.ok) throw new Error('Gagal memperbarui siswa');
  return await res.json();
}

export async function deleteStudent(id) {
  const res = await fetch(`http://localhost:3333/students/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Gagal menghapus siswa');
  return await res.json();
}
