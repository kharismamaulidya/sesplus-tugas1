import { useRouter } from "next/router";
import BookForm from "../../components/BookFrom";

export default function AddBook() {
  const router = useRouter();

  const addBook = async (book) => {
    await fetch('/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
    router.push('/books');
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
          Tambah Buku Baru
        </h1>
        <BookForm onSubmit={addBook} />
      </div>
    </div>
  );
}
