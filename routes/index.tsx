import Sidebar from "../islands/Sidebar.tsx";

export default function Home() {
  return (
    <div class="flex min-h-screen bg-gray-100 font-sans">
      <Sidebar />
      <main class="flex-1 p-8 grid grid-cols-3 gap-6">
        {/* Cards */}
        <div class="col-span-3 grid grid-cols-3 gap-4">
          <div class="bg-gray-100 rounded-xl shadow-[3px_3px_6px_#d1d9e6,-2px_-2px_6px_#ffffff] p-6">
            <h2 class="text-gray-500 text-sm mb-2">Balance</h2>
            <p class="text-2xl font-semibold text-navy">$3,200</p>
          </div>
          <div class="bg-gray-100 rounded-xl shadow-[3px_3px_6px_#d1d9e6,-2px_-2px_6px_#ffffff] p-6">
            <h2 class="text-gray-500 text-sm mb-2">Income</h2>
            <p class="text-2xl font-semibold text-navy">$5,000</p>
          </div>
          <div class="bg-gray-100 rounded-xl shadow-[3px_3px_6px_#d1d9e6,-2px_-2px_6px_#ffffff] p-6">
            <h2 class="text-gray-500 text-sm mb-2">Expenses</h2>
            <p class="text-2xl font-semibold text-navy">$1,800</p>
          </div>
        </div>

        {/* Recent Transactions */}
        <div class="bg-gray-100 rounded-xl shadow-[3px_3px_6px_#d1d9e6,-2px_-2px_6px_#ffffff] p-6 col-span-1">
          <h3 class="text-lg font-medium mb-4 text-navy">Recent Transactions</h3>
          <ul class="text-sm space-y-2">
            <li class="flex justify-between"><span>Groceries</span><span>-$150</span></li>
            <li class="flex justify-between"><span>Salary</span><span>+$3,000</span></li>
            <li class="flex justify-between"><span>Utilities</span><span>-$100</span></li>
            <li class="flex justify-between"><span>Freelance</span><span>+$800</span></li>
          </ul>
        </div>

        {/* Chart */}
        <div class="bg-gray-100 rounded-xl shadow-[3px_3px_6px_#d1d9e6,-2px_-2px_6px_#ffffff] p-6 col-span-2">
          <h3 class="text-lg font-medium mb-4 text-navy">Income & Expense Summary</h3>
          <div class="h-40 bg-gray-100 rounded-md shadow-[3px_3px_6px_#d1d9e6,-2px_-2px_6px_#ffffff] flex items-center justify-center text-gray-500">
            [ Chart would go here ]
          </div>
        </div>
      </main>
    </div>
  );
}
