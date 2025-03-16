import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-xl font-bold">JJNewmanCorp</h1>
      </header>

      <main className="flex-1 p-4">
        <Outlet /> {/* Affichera les pages ici */}
      </main>

      <footer className="bg-gray-800 text-white p-2 text-center">
        <p>© 2025 JJNewmanCorp</p>
      </footer>
    </div>
  );
}
