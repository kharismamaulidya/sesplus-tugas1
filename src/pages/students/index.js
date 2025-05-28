import { useEffect, useState } from "react";
import Link from 'next/link';
import { getStudents, deleteStudent as apiDeleteStudent } from '../../../lib/api/students';

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("name");

useEffect(() => {
  async function fetchData() {
    try {
      const data = await getStudents();
      console.log("DATA SISWA:", data); // Tambahkan ini
      setStudents(data);
    } catch (err) {
      setError(err.message);
    }
  }

    fetchData();
  }, []);

  const deleteStudent = async (id) => {
    try {
      await apiDeleteStudent(id);
      setStudents((prev) => prev.filter((s) => s.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const filteredStudents = Array.isArray(students)
  ? [...students]
      .filter((s) =>
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        (s.student_class ?? "").toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => a[sort].localeCompare(b[sort]))
  : [];

  if (error) return <div>Error: {error}</div>;

  return (
    <div
      className="min-h-screen px-8 py-10 text-[#2c2c2c]"
      style={{
        background: 'linear-gradient(to right, #dbd6df, #eec6c7, #db88a4, #cc8eb1)',
      }}
    >
      <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-md">Daftar Siswa</h1>
      <div className="h-1 bg-white mb-6 w-full max-w-xs"></div>

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Cari nama atau kelas..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-md w-full sm:w-1/2"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-4 py-2 border rounded-md w-full sm:w-1/4"
        >
          <option value="name">Urutkan: Nama (A-Z)</option>
          <option value="class">Urutkan: Kelas (A-Z)</option>
        </select>
      </div>

      <Link href="/students/add" className="block w-full max-w-xs text-center bg-[#db88a4] hover:bg-[#cc8eb1] text-white font-bold py-4 rounded-2xl text-xl mb-10 transition duration-300 shadow-lg">
        Tambah Siswa
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredStudents.map((s) => (
          <div key={s.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-[#f2cde7]">
            <h2 className="text-xl text-[#db88a4] font-bold mb-2">{s.name}</h2>
            <hr className="border-[#eec6c7] mb-2" />
            <p className="text-black font-semibold mb-1">Umur: <span className="font-normal">{s.age}</span></p>
            <p className="text-black font-semibold mb-4">Kelas: <span className="font-normal">{s.class}</span></p>
            <div className="flex justify-between mt-auto pt-4">
              <Link href={`/students/${s.id}`}>
                <button className="bg-[#a8c3d4] hover:bg-[#738fbd] text-white px-4 py-2 rounded-full text-sm font-semibold transition duration-200">
                  Edit
                </button>
              </Link>
              <button
                onClick={() => deleteStudent(s.id)}
                className="bg-[#db88a4] hover:bg-[#cc8eb1] text-white px-4 py-2 rounded-full text-sm font-semibold transition duration-200"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
