import React from 'react';
import cutString from '../utils/cutString';
import { breakStr } from '../utils/breakStr';

export default function CardProject({ title, description, src, link }) {
  return (
    <div className="max-w-xs mx-2 my-4 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="w-full h-auto rounded-t-md" src={src} alt="" />
      </a>
      <div className="p-4">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 text-gray-700 dark:text-gray-400">{cutString(description, 93)}...</p>
        <a
          href={link}
          target="_parent"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          View Page
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>

      </div>
    </div>
  );
}
