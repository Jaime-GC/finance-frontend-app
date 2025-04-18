import Sidebar from "../components/Sidebar.tsx";
import { EditIcon, DeleteIcon } from "../components/Icons.tsx";

export default function Expenses() {
  const expenses = [
    { id: 1, description: "Groceries", amount: 150, category: "Food", date: "2023-05-15" },
    { id: 2, description: "Netflix", amount: 15, category: "Entertainment", date: "2023-05-14" },
    { id: 3, description: "Gas", amount: 50, category: "Transportation", date: "2023-05-12" },
    { id: 4, description: "Electricity", amount: 80, category: "Utilities", date: "2023-05-10" },
    { id: 5, description: "Restaurant", amount: 45, category: "Food", date: "2023-05-08" },
  ];

  return (
    <div class="flex min-h-screen bg-gray-100 font-sans">
      <Sidebar />
      <main class="flex-1 p-8">
        <h1 class="text-2xl font-bold text-navy mb-6">Expenses</h1>
        
        {/* Summary cards */}
        <div class="grid grid-cols-3 gap-4 mb-8">
          <div class="bg-gray-100 rounded-xl shadow-[3px_3px_6px_#d1d9e6,-2px_-2px_6px_#ffffff] p-6">
            <h2 class="text-gray-500 text-sm mb-2">Total Expenses</h2>
            <p class="text-2xl font-semibold text-navy">$340</p>
          </div>
          <div class="bg-gray-100 rounded-xl shadow-[3px_3px_6px_#d1d9e6,-2px_-2px_6px_#ffffff] p-6">
            <h2 class="text-gray-500 text-sm mb-2">Top Category</h2>
            <p class="text-2xl font-semibold text-navy">Food</p>
          </div>
          <div class="bg-gray-100 rounded-xl shadow-[3px_3px_6px_#d1d9e6,-2px_-2px_6px_#ffffff] p-6">
            <h2 class="text-gray-500 text-sm mb-2">Monthly Average</h2>
            <p class="text-2xl font-semibold text-navy">$1,250</p>
          </div>
        </div>
        
        {/* New expense button */}
        <div class="flex justify-end mb-6">
          <button class="bg-gray-100 rounded-xl px-5 py-3 text-navy font-medium text-lg transition-all
                     shadow-[3px_3px_6px_#d1d9e6,-2px_-2px_6px_#ffffff] hover:shadow-[inset_3px_3px_6px_#d1d9e6,inset_-2px_-2px_6px_#ffffff]">
            New Expense
          </button>
        </div>
        
        {/* Expenses table */}
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
                {expenses.map((expense) => (
                  <tr key={expense.id} class="border-b border-gray-200 hover:bg-gray-50">
                    <td class="py-3 px-4">{expense.description}</td>
                    <td class="py-3 px-4">{expense.category}</td>
                    <td class="py-3 px-4 text-right text-red-600">-${expense.amount}</td>
                    <td class="py-3 px-4">{expense.date}</td>
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