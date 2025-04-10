import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-4xl font-bold text-center">
        Willkommen bei der Magischen Fragekugel!
      </h1>
      <div className="mt-4">
        <Link
          href="/magic"
          className="px-6 py-2 bg-blue-500 text-white rounded-full"
        >
          Starte die magische Fragekugel
        </Link>
      </div>
    </div>
  );
}
