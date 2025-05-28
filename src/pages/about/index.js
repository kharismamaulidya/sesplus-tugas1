import Navbar from "../../components/navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div
        className="min-h-screen px-6 py-16"
        style={{
          background: 'linear-gradient(to right, #eec6c7, #db88a4, #cc8eb1)',
        }}
      >
        <div className="bg-white rounded-2xl shadow-xl p-10 max-w-3xl mx-auto border border-[#f2cde7]">
          <h1 className="text-4xl font-bold text-center text-[#db88a4] mb-6 drop-shadow-md">
            Tentang Aplikasi Buku
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Aplikasi ini dibuat sebagai bagian dari kelas industri untuk mempraktikkan
            pembuatan aplikasi web menggunakan <strong>Next.js</strong> di sisi frontend
            dan <strong>AdonisJS</strong> di sisi backend. Aplikasi ini memungkinkan pengguna
            untuk menambahkan, mengedit, dan menghapus data buku, serta melakukan pencarian.
          </p>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-[#db88a4] mb-2">Fitur:</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>CRUD Data Buku</li>
              <li>Filter & Pencarian Buku</li>
              <li>Desain dengan Tailwind CSS</li>
              <li>Integrasi Frontend dan Backend</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
