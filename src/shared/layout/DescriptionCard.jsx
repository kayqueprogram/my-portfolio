import React from 'react';

const DescriptionCard = ({children}) => {
  return (

    <a href="#" className="mx-3 margin-top block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 grid grid-cols-3 gap-4 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <p class="font-normal text-gray-700 dark:text-gray-400">{children}</p>
    </a>

  );
};

export default DescriptionCard;
