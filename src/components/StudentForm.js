import { useState, useEffect } from "react";

export default function StudentForm({ onSubmit, initialData }) {
  const [name, setName] = useState(initialData?.name || '');
  const [age, setAge] = useState(initialData?.age || '');
  const [studentClass, setStudent_Class] = useState(initialData?.student_class || '');

  useEffect(() => {
    setName(initialData?.name || '');
    setAge(initialData?.age || '');
    setStudent_Class(initialData?.student_class || '');
  }, [initialData]);

  const handleSubmit = (e) => {
  e.preventDefault();
  const data = { name, age, student_class: studentClass };
  console.log('DATA DIKIRIM:', data); // 👈 Tambahkan ini
  onSubmit(data);
};

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/80 text-[#db88a4] w-full max-w-2xl rounded-2xl shadow-lg p-8 backdrop-blur-md"
    >
      <div className="mb-6">
        <label htmlFor="name" className="block text-xl font-bold mb-2">Nama:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 bg-white border border-pink-300 text-[#db88a4] rounded-lg placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
          placeholder="Masukkan nama siswa"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="age" className="block text-xl font-bold mb-2">Umur:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full px-4 py-2 bg-white border border-pink-300 text-[#db88a4] rounded-lg placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
          placeholder="Masukkan umur"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="class" className="block text-xl font-bold mb-2">Kelas:</label>
        <input
          type="text"
          id="class"
          value={studentClass}
          onChange={(e) => setStudent_Class(e.target.value)}
          className="w-full px-4 py-2 bg-white border border-pink-300 text-[#db88a4] rounded-lg placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
          placeholder="Masukkan kelas siswa"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#db88a4] hover:bg-[#cc8eb1] text-white font-bold py-3 rounded-full text-xl transition duration-300"
      >
        Simpan
      </button>
    </form>
  );
}
