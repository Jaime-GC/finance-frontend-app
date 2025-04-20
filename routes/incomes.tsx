import { Handlers, PageProps } from "$fresh/server.ts";
import Sidebar from "../islands/Sidebar.tsx";
import { NewButton } from "../islands/NewButton.tsx";
import { EditIcon, DeleteIcon } from "../components/Icons.tsx";
import axios from "npm:axios";
import { EditItemModal } from "../islands/EditItemModal.tsx";
import { DeleteButton } from "../islands/DeleteButton.tsx";

interface Income {
  id: number;
  description: string;
  amount: number;
  date: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
  category: {
    id: number;
    name: string;
  };
}

export const handler: Handlers<{ incomes: Income[] }> = {
  async GET(_, ctx) {
    const API_URL = "http://localhost:8080/incomes/all"; // URL de la API

    try {
      const response = await axios.get<Income[]>(API_URL);
      return ctx.render({ incomes: response.data });
    } catch (error) {
      console.error("Error al obtener los ingresos:", error);
      return ctx.render({ incomes: [] }); // Devuelve una lista vacía si hay un error
    }
  },
};

export default function Incomes({ data }: PageProps<{ incomes: Income[] }>) {
  const { incomes } = data;

  return (
    <div class="flex h-screen overflow-hidden bg-gray-100 font-sans">
      <Sidebar />
      <main class="flex-1 p-8 flex flex-col overflow-hidden">
        <h1 class="text-2xl font-bold text-navy mb-6">Incomes</h1>

        {/* Summary cards */}
        <div class="grid grid-cols-3 gap-4 mb-8">
          <div class="bg-gray-100 rounded-xl shadow-[3px_3px_6px_#d1d9e6,-2px_-2px_6px_#ffffff] p-6">
            <h2 class="text-gray-500 text-sm mb-2">Total Income</h2>
            <p class="text-2xl font-semibold text-navy">$4,225</p>
          </div>
          <div class="bg-gray-100 rounded-xl shadow-[3px_3px_6px_#d1d9e6,-2px_-2px_6px_#ffffff] p-6">
            <h2 class="text-gray-500 text-sm mb-2">Top Source</h2>
            <p class="text-2xl font-semibold text-navy">Work</p>
          </div>
          <div class="bg-gray-100 rounded-xl shadow-[3px_3px_6px_#d1d9e6,-2px_-2px_6px_#ffffff] p-6">
            <h2 class="text-gray-500 text-sm mb-2">Monthly Average</h2>
            <p class="text-2xl font-semibold text-navy">$1,250</p>
          </div>
        </div>

        {/* New income button as modal */}
        <div class="flex justify-end mb-6">
          <NewButton
            resource="incomes"
            label="Income"
            onSuccess={() => window.location.reload()}
          />
        </div>

        {/* Incomes table */}
        <div class="bg-gray-100 rounded-xl shadow-[3px_3px_6px_#d1d9e6,-2px_-2px_6px_#ffffff]
                    p-6 flex-1 flex flex-col overflow-hidden">
          <div class="overflow-y-auto flex-1 custom-scrollbar">
            <table class="w-full table-fixed">
              <colgroup>
                <col class="w-[30%]" />
                <col class="w-[20%]" />
                <col class="w-[15%]" />
                <col class="w-[15%]" />
                <col class="w-[10%]" />
                <col class="w-[10%]" />
              </colgroup>
              <thead class="sticky top-0 bg-gray-100 z-10">
                <tr class="border-b border-gray-300">
                  <th class="py-3 px-6 text-left font-medium text-navy">Description</th>
                  <th class="py-3 px-6 text-left font-medium text-navy">Category</th>
                  <th class="py-3 px-6 text-right font-medium text-navy">Amount</th>
                  <th class="py-3 px-6 text-left font-medium text-navy">Date</th>
                  <th class="py-3 px-6 text-left font-medium text-navy">User</th>
                  <th class="py-3 px-6 text-right font-medium text-navy">Actions</th>
                </tr>
              </thead>
              <tbody>
                {incomes.map((income) => (
                  <tr key={income.id} class="border-b border-gray-200 hover:bg-gray-50">
                    <td class="py-4 px-6">{income.description}</td>
                    <td class="py-4 px-6">{income.category?.name ?? "-"}</td>
                    <td class="py-4 px-6 text-right text-green-600">
                      +${income.amount}
                    </td>
                    <td class="py-4 px-6">{income.date}</td>
                    <td class="py-4 px-6">{income.user?.name ?? "-"}</td>
                    <td class="py-4 px-6 text-right">
                      <EditItemModal
                        resource="incomes"
                        item={income}
                        fields={["description", "amount", "date"]}
                        onSuccess={() => window.location.reload()}
                      />
                      <DeleteButton
                        resource="incomes"
                        id={income.id}
                        onSuccess={() => window.location.reload()}
                      />
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