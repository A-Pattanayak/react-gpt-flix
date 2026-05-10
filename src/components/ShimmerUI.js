import React from 'react';

const ShimmerRow = ({ titleWidth = 'w-36' }) => {
  return (
    <div className="mb-8">
      <div className={`mb-4 h-7 ${titleWidth} animate-pulse rounded bg-white/20`}></div>
      <div className="hide-scrollbar flex gap-4 overflow-hidden pb-4">
        {Array(7)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="h-48 w-32 flex-shrink-0 animate-pulse rounded-md bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 md:h-60 md:w-40"
            ></div>
          ))}
      </div>
    </div>
  );
};

const ShimmerUI = ({ type = 'home' }) => {
  if (type === 'search') {
    return (
      <div className="relative z-10 -mt-10 bg-gradient-to-b from-transparent via-black/90 to-black px-6 pb-10 pt-16 text-white md:px-12">
        <div className="mb-7 text-center">
          <div className="mx-auto mb-3 h-6 w-52 animate-pulse rounded bg-red-600/45"></div>
          <p className="text-sm font-medium text-white/70">Finding movies for you...</p>
        </div>
        <ShimmerRow titleWidth="w-44" />
        <ShimmerRow titleWidth="w-32" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="h-[56vh] animate-pulse bg-gradient-to-br from-gray-950 via-gray-900 to-black"></div>
      <div className="relative z-10 -mt-24 px-6 pb-10 md:px-12 lg:px-9">
        <ShimmerRow />
        <ShimmerRow titleWidth="w-28" />
        <ShimmerRow titleWidth="w-40" />
      </div>
    </div>
  );
};

export default ShimmerUI;
