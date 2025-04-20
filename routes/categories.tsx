import { Handlers, PageProps } from "$fresh/server.ts";
import Sidebar from "../islands/Sidebar.tsx";
import { EditIcon, DeleteIcon } from "../components/Icons.tsx";
import axios from "npm:axios";

interface Category {
  id: number;
  name: string;
}

export const handler: Handlers<{ categories: Category[] }> = {
  async GET(_, ctx) {
    try {
      const resp = await axios.get<Category[]>(
        "http://localhost:8080/categories/all",
      );
      return ctx.render({ categories: resp.data });
    } catch {
      return ctx.render({ categories: [] });
    }
  },
};

export default function Categories(
  { data }: PageProps<{ categories: Category[] }>,) {
    const { categories } = data;

  return (

    <div class="flex h-screen overflow-hidden bg-gray-100 font-sans">
      <Sidebar />

      <main class="flex-1 p-8 flex flex-col overflow-hidden">
        <div class="flex justify-between items-center mb-8">
          <h1 class="text-2xl font-bold text-navy">Categories</h1>

          <button class="bg-gray-100 rounded-xl px-5 py-3 text-navy font-medium text-lg transition-all
                 shadow-[3px_3px_6px_#d1d9e6,-2px_-2px_6px_#ffffff] hover:shadow-[inset_3px_3px_6px_#d1d9e6,inset_-2px_-2px_6px_#ffffff]">
            <span class="flex items-center">
              <svg class="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
              </svg>
              New Category
            </span>
          </button>
        </div>

        <div class="bg-gray-100 rounded-xl shadow-[3px_3px_6px_#d1d9e6,-2px_-2px_6px_#ffffff] p-6 flex-1 flex flex-col overflow-hidden">
          <div class="overflow-y-auto flex-1 custom-scrollbar">
            <table class="w-full">
                
              <thead class="sticky top-0 bg-gray-100 z-10">
                <tr class="border-b border-gray-300">
                  <th class="py-3 px-4 text-left font-medium text-navy">Name</th>
                  <th class="py-3 px-4 text-right font-medium text-navy">Actions</th>
                </tr>
              </thead>

              <tbody>
                {categories.map((c) => (
                  <tr key={c.id} class="border-b border-gray-200 hover:bg-gray-50">
                    <td class="py-3 px-4">{c.name}</td>
                    <td class="py-3 px-4 text-right">
                      <button class="text-navy hover:text-blue-700 p-1 mr-2 rounded-full hover:bg-gray-200 transition-colors">
                        <EditIcon />
                      </button>
                      <button class="text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-gray-200 transition-colors">
                        <DeleteIcon />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </main>
    </div>
  );
}