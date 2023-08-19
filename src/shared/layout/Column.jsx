import React from 'react';

export default function Column({ children }) {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="mt-8 sm:mt-12">
        <div className="flex flex-wrap justify-center -mx-2 text-xl">
          {children}
        </div>
      </div>
    </div>
  );
}
