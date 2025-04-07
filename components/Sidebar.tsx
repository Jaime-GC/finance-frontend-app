import { h } from "preact";

export default function Sidebar() {
  const menuItems = [
    { href: "/", label: "🏠 Dashboard" },
    { href: "/expenses", label: "💸 Gastos" },
    { href: "/incomes", label: "💰 Ingresos" },
    { href: "/categories", label: "📂 Categorías" },
    { href: "/reports", label: "📊 Reportes" },
    { href: "/users", label: "👤 Usuarios" },
  ];

  return (
    <aside class="flex flex-col justify-start w-64 min-h-screen bg-gray-100 px-6 py-8 rounded-tr-3xl rounded-br-3xl shadow-[4px_4px_8px_#d1d9e6,-2px_-2px_6px_#ffffff]">
      <nav class="flex flex-col gap-4">
        {menuItems.map((item) => (
          <a
            href={item.href}
            class="flex items-center gap-3 bg-gray-100 rounded-xl px-5 py-3 text-gray-800 font-medium text-lg transition-all
                   shadow-[3px_3px_6px_#d1d9e6,-2px_-2px_6px_#ffffff] hover:shadow-[inset_3px_3px_6px_#d1d9e6,inset_-2px_-2px_6px_#ffffff]"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
