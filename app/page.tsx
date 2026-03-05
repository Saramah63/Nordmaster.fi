import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl md:text-5xl font-semibold">Nordmaster Group</h1>
        <p className="mt-4 text-slate-300">
          Visit our welding services page for full details and contact options.
        </p>
        <Link
          href="/services/hitsaustyot"
          className="inline-flex items-center justify-center mt-8 rounded-full bg-white text-slate-900 px-6 py-3 text-sm font-semibold"
        >
          Go to service page
        </Link>
      </div>
    </main>
  );
}
