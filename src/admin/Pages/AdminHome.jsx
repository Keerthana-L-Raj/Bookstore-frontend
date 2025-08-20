import React from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function AdminHome() {
  const books = [
    { title: "The Great Gatsby", sold: 120 },
    { title: "To Kill a Mockingbird", sold: 200 },
    { title: "1984", sold: 180 },
    { title: "The Alchemist", sold: 250 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <AdminHeader />

      {/* Page Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Section */}
        <main className="flex-grow p-8 mt-25">
          {/* Cards + Chart Container */}
          <div className="flex flex-col space-y-8">
            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center p-4 bg-blue-200 rounded-lg shadow-md">
                <div className="ml-4">
                  <h5 className="text-lg font-semibold">Total Number of Books</h5>
                  <p>100+</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-green-500 rounded-lg shadow-md">
                <div className="ml-4">
                  <h5 className="text-lg font-semibold">Total Number of Users</h5>
                  <p>100+</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-yellow-400 rounded-lg shadow-md">
                <div className="ml-4">
                  <h5 className="text-lg font-semibold">Total Number of Employees</h5>
                  <p>100+</p>
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-amber-200 rounded-xl shadow-md">
              <div className="bg-white p-6 rounded-2xl w-full h-96">
                <h2 className="text-xl font-semibold mb-4">Book Sales</h2>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={books}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="title" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="sold"
                      stroke="#6366F1"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      dot={{ r: 6, fill: "#6366F1" }}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminHome;
