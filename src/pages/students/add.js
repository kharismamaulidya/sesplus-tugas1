import { useRouter } from "next/router";
import StudentForm from "../../components/StudentForm"; // ⬅️ Ganti ke form siswa

export default function AddStudent() {
  const router = useRouter();

const addStudent = async (student) => {
  await fetch('/api/students', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  });
  router.push('/students');
};


  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-10"
      style={{
        background: 'linear-gradient(to right, #dbd6df, #eec6c7, #db88a4, #cc8eb1)',
      }}
    >
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-2xl border border-[#f2cde7]">
        <h1 className="text-3xl font-bold text-[#db88a4] mb-6 text-center drop-shadow-md">
          Tambah Siswa Baru
        </h1>
        <StudentForm onSubmit={addStudent} />
      </div>
    </div>
  );
}
