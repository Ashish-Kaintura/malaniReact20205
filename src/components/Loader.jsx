import React from "react";

export default function Loader() {
  return (
    <div>
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
        <div className="text-center">
          <div className="loader border-4 border-gray-200 border-t-blue-500 rounded-full w-12 h-12 animate-spin mx-auto"></div>
          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            Loading Premium Experience...
          </h2>
        </div>
      </div>
    </div>
  );
}
