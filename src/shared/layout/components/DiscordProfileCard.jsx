import React from 'react';

const DiscordProfileCard = ({ username, discriminator, avatarUrl }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 flex items-center">
      <img src={avatarUrl} alt={`Avatar de ${username}`} className="w-12 h-12 rounded-full" />
      <div className="ml-4">
        <h3 className="text-white text-lg font-semibold">{username}</h3>
        <p className="text-gray-400">{discriminator}</p>
      </div>
      <div className="ml-auto">
        <a
          href={`https://discord.com/users/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Ver Perfil
        </a>
      </div>
    </div>
  );
};

export default DiscordProfileCard;
