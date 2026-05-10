import React from 'react';

const LoginShimmerUI = ({ message = 'Signing you in...' }) => {
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      <div className="login-progress-border w-80 rounded-2xl bg-black/90 p-8 text-white shadow-2xl">
        <div className="mb-7 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600/20 ring-1 ring-red-500/60">
            <div className="h-5 w-5 animate-pulse rounded-full bg-red-500"></div>
          </div>
          <div>
            <div className="mb-2 h-4 w-36 animate-pulse rounded bg-white/35"></div>
            <div className="h-3 w-24 animate-pulse rounded bg-red-500/35"></div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="h-12 w-full animate-pulse rounded-md bg-gray-800"></div>
          <div className="h-12 w-full animate-pulse rounded-md bg-gray-800"></div>
          <div className="h-12 w-full animate-pulse rounded-md bg-red-700/80"></div>
        </div>

        <p className="mt-6 text-center text-base font-bold tracking-wide text-white drop-shadow-[0_0_10px_rgba(239,68,68,0.85)]">
          {message}
        </p>
        <p className="mt-2 text-center text-xs font-medium text-white/60">
          Please wait a moment
        </p>
      </div>
    </div>
  );
};

export default LoginShimmerUI;
