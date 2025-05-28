import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white"
         style={{
           background: 'linear-gradient(to right, #738fbd, #a8c3d4, #dbd6df, #eec6c7, #db88a4, #cc8eb1)',
         }}
    >
      <h1 className="text-4xl font-semibold mb-2 drop-shadow-md">Selamat Datang di Website</h1>
      <h2 className="text-5xl font-bold text-[#db88a4] mb-8 drop-shadow-md">SES Plus</h2>

      <div className="flex flex-col md:flex-row gap-4">
        <Link href="/books">
          <button className="bg-[#738fbd] hover:bg-[#a8c3d4] text-white font-bold py-3 px-10 rounded-full text-xl transition duration-300 shadow-lg">
            Masuk Lewat /Books
          </button>
        </Link>

        <Link href="/students">
          <button className="bg-[#db88a4] hover:bg-[#cc8eb1] text-white font-bold py-3 px-10 rounded-full text-xl transition duration-300 shadow-lg">
            Masuk Lewat /Students
          </button>
        </Link>
      </div>
    </div>
  );
}
