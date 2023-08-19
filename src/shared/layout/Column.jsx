import React from 'react';

export default function Column({ children }) {
  return (
    <div className="container  ">
      <div className="mt-8 sm:mt-12 ">
        <div className="flex flex-wrap  text-xl">
          {children}
        </div>
      </div>
    </div>
  );
}
