import React from 'react';
import {useState, useEffect} from 'react';
import { breakStr } from '../../shared/utils/breakStr';
import DiscordProfileCard from '../../shared/layout/components/DiscordProfileCard';
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import contactApi from '../../services/contact';

const Contact = () => {

    const [contact, setContact] = useState({});

    useEffect(() => {
        const getContact= async () => {

            try {
                const data = await contactApi.getContact();
                setContact(data)
            } catch (err) {
                console.log('erro na api intro: ', err)
            }
        };

        getContact();
    }, []);

    return (
        <div className="mx-auto container py-10">
            <h1 className="text-3xl font-semibold mb-6">Contact me - Sirius.sh</h1>

            <h2 className="text-xl font-semibold mb-4">Details</h2>
            <p className="mb-4">
            If you prefer, you can contact me directly by the following means:
            </p>
            <p className="mb-4">Email: {contact.email}</p>
            
            <h2 className="text-xl font-semibold mb-4">Social Media</h2>
            <div className="flex space-x-4">
                {contact?.twitter && (
                    <a href={contact.twitter} className="text-blue-500 hover:text-blue-700">
                    <FaTwitter size={32} />
                </a>
                )}
                {contact?.insta && (
                    <a href={contact.insta} className="text-pink-500 hover:text-pink-700">
                    <FaInstagram size={32} />
                </a>
                )}
                {contact?.github && (
                    <a href={contact.github} className="text-gray-600 hover:text-gray-800">
                    <FaGithub size={32} />
                </a>
                )}
            </div>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Discord Server</h2>
            <div className="mt-8">
                <iframe src="https://discord.com/widget?id=1002988119798325360&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Discord</h2>
            <div className="mt-8">
                <DiscordProfileCard username='sirius_sh_xls' discriminator='Sírius' avatarUrl='https://cdn.discordapp.com/attachments/995485098336067675/1142887525606756442/pr4.jpeg' />
            </div>
        </div>
    )
}

export default Contact;
