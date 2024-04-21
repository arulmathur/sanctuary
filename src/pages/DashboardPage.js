import React from "react";

function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center space-x-6 mb-4">
          <div className="flex-shrink-0">
            <img
              className="h-16 w-16 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1564564295391-7f24f26f568b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="User avatar"
            />
          </div>
          <div>
            <p className="text-xl text-gray-800 font-bold">
              Welcome back, User!
            </p>
            <p className="text-sm text-gray-400">It's good to see you again.</p>
          </div>
        </div>
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Your Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details and application.
          </p>
          <ul className="mt-3 list-disc list-inside text-sm">
            <li>Email: user@example.com</li>
            <li>Location: Somewhere</li>
            <li>Account created on: January 1, 2020</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
