import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="relative flex items-center justify-center">

        {/* rotating ring */}
        <div className="w-14 h-14 rounded-full border-4 border-gray-300 border-t-gray-600 animate-spin"></div>

        {/* inner circle */}
        <div className="absolute w-5 h-5 bg-gray-800 rounded-full animate-pulse"></div>

      </div>
    </div>
  );
};

export default Loading;