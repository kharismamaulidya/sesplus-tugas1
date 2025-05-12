import { useState, useEffect } from "react";

export default function BookForm({ onSubmit, initialData }) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [author, setAuthor] = useState(initialData?.author || '');
  const [description, setDescription] = useState(initialData?.description || '');

  useEffect(() => {
    setTitle(initialData?.title || '');
    setAuthor(initialData?.author || '');
    setDescription(initialData?.description || '');
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, author, description });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background: 'linear-gradient(to right, #fce1e4, #f9d3e3, #eec6c7)',
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 text-[#db88a4] w-full max-w-2xl rounded-2xl shadow-lg p-8 backdrop-blur-md"
      >
        <div className="mb-6">
          <label htmlFor="title" className="block text-xl font-bold mb-2">Judul:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 bg-white border border-pink-300 text-[#db88a4] rounded-lg placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
            placeholder="Masukkan judul"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="author" className="block text-xl font-bold mb-2">Penulis:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-4 py-2 bg-white border border-pink-300 text-[#db88a4] rounded-lg placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
            placeholder="Masukkan nama penulis"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="description" className="block text-xl font-bold mb-2">Penjelasan:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 bg-white border border-pink-300 text-[#db88a4] rounded-lg placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
            placeholder="Masukkan penjelasan"
            rows={3}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#db88a4] hover:bg-[#cc8eb1] text-white font-bold py-3 rounded-full text-xl transition duration-300"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}
