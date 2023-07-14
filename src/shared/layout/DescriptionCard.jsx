import React from 'react';

const DescriptionCard = (props) => {
  return (
    <section className="bg-gray-200 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">{props.title}</h2>
        <div className="flex">
          <p className="text-gray-700 mb-8 flex-1">
            {props.description}
          </p>
          <div className="ml-auto">
            <figure className="relative max-w-xs transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <a href="/">
                <img className="rounded-lg shadow-lg dark:shadow-black/30" src={props.src} alt="image description" />
              </a>
              <figcaption className="absolute px-4 text-lg text-white bottom-6">
                <p>{props.alt}</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionCard;
