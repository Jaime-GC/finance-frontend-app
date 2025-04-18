import Sidebar from "../components/Sidebar.tsx";
import { EditIcon, DeleteIcon } from "../components/icons.tsx";

export default function Users() {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Michael Johnson" },
    { id: 4, name: "Emily Brown" },
  ];

  return (
    <div class="flex min-h-screen bg-gray-100 font-sans">
      <Sidebar />
      <main class="flex-1 p-8">
        <div class="flex justify-between items-center mb-8">
          <h1 class="text-2xl font-bold text-navy">Users</h1>
          <button class="bg-gray-100 rounded-xl px-5 py-3 text-navy font-medium text-lg transition-all
                 shadow-[3px_3px_6px_#d1d9e6,-2px_-2px_6px_#ffffff] hover:shadow-[inset_3px_3px_6px_#d1d9e6,inset_-2px_-2px_6px_#ffffff]">
            <span class="flex items-center">
              <svg class="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
              </svg>
              New User
            </span>
          </button>
        </div>
        
        {/* Users table */}
        <div class="bg-gray-100 rounded-xl shadow-[3px_3px_6px_#d1d9e6,-2px_-2px_6px_#ffffff] p-6">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b border-gray-300">
                  <th class="py-3 px-4 text-left font-medium text-navy">Name</th>
                  <th class="py-3 px-4 text-right font-medium text-navy">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} class="border-b border-gray-200 hover:bg-gray-50">
                    <td class="py-3 px-4">{user.name}</td>
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