import Sidebar from "../components/Sidebar.tsx";
import { EditIcon, DeleteIcon } from "../components/Icons.tsx";

export default function Incomes() {
  const incomes = [
    { id: 1, description: "Salary", amount: 3000, category: "Work", date: "2023-05-01" },
    { id: 2, description: "Freelance", amount: 800, category: "Extra Work", date: "2023-05-06" },
    { id: 3, description: "Dividends", amount: 200, category: "Investments", date: "2023-05-15" },
    { id: 4, description: "Item Sales", amount: 150, category: "Other", date: "2023-05-18" },
    { id: 5, description: "Refund", amount: 75, category: "Other", date: "2023-05-22" },
  ];

  return (
    <div class="flex min-h-screen bg-gray-100 font-sans">
      <Sidebar />
      <main class="flex-1 p-8">
        <h1 class="text-2xl font-bold text-navy mb-6">Income</h1>
        
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
            <p class="text-2xl font-semibold text-navy">$4,500</p>
          </div>
        </div>
        
        {/* New income button */}
        <div class="flex justify-end mb-6">
          <button class="bg-gray-100 rounded-xl px-5 py-3 text-navy font-medium text-lg transition-all
                     shadow-[3px_3px_6px_#d1d9e6,-2px_-2px_6px_#ffffff] hover:shadow-[inset_3px_3px_6px_#d1d9e6,inset_-2px_-2px_6px_#ffffff]">
            New Income
          </button>
        </div>
        
        {/* Income table */}
        <div class="bg-gray-100 rounded-xl shadow-[3px_3px_6px_#d1d9e6,-2px_-2px_6px_#ffffff] p-6">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b border-gray-300">
                  <th class="py-3 px-4 text-left font-medium text-navy">Description</th>
                  <th class="py-3 px-4 text-left font-medium text-navy">Category</th>
                  <th class="py-3 px-4 text-right font-medium text-navy">Amount</th>
                  <th class="py-3 px-4 text-left font-medium text-navy">Date</th>
                  <th class="py-3 px-4 text-center font-medium text-navy">Actions</th>
                </tr>
              </thead>
              <tbody>
                {incomes.map((income) => (
                  <tr key={income.id} class="border-b border-gray-200 hover:bg-gray-50">
                    <td class="py-3 px-4">{income.description}</td>
                    <td class="py-3 px-4">{income.category}</td>
                    <td class="py-3 px-4 text-right text-green-600">+${income.amount}</td>
                    <td class="py-3 px-4">{income.date}</td>
                    <td class="py-3 px-4 text-center">
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