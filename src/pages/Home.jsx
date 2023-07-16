import React, { useState, useEffect } from 'react';
import introApi from '../services/intoducingme/index';
import { breakStr } from '../shared/utils/breakStr';
import Typewriter from 'typewriter-effect'
import CardContent from '../shared/layout/CardContent';
import DescriptionCard from '../shared/layout/DescriptionCard';
import Column from '../shared/layout/Column';
import Title from '../shared/layout/Title';

function Home() {

    const [intro, setIntro] = useState({});

    useEffect(() => {
        const getIntro = async () => {
            //lidar com erro aq
            const data = await introApi.getIntro();
            setIntro(data)
        };

        getIntro();
    }, []);


    return (
        <>
            <div className="text-2xl bg-gray-200 justify-center text-center py-10 p-5 mx-auto">
                <h1 className="text-4xl">💻 Creating the future with lines of code</h1>
                <br />
                <Typewriter

                    onInit={(typewriter) => {

                        typewriter

                            .typeString("Hello! Welcome to my Portfolio!")

                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("I'm Kayque, programmer and web developer")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString('I drink more coffee than water, and make the shower cry in the argument 🙃')

                            .start();
                    }}
                />


            </div>
            {intro?.content && (
                <div className="mx-auto ajust container  py-10">
                    <div className="mx-auto">
                        <h1 className="text-4xl">{intro.title}</h1>
                        {breakStr(intro?.content)?.map(cont => <CardContent>{cont}</CardContent>)}
                    </div>

                    <div className='container'>
                        {intro?.img && (
                            <img class=" h-auto image" src={intro.img} alt="image description" />
                        )}

                    </div>
                </div>
            )}

            {intro?.skills && (
                <div className='container'>
                    <Title>My Skills</Title>
                    <Column>
                        {intro?.skills?.map(cont => <DescriptionCard>{cont}</DescriptionCard>)}
                    </Column>
                </div>
            )}

            <div className="container">
                <Title>My Projects</Title>
                development...
            </div>
        </>
    )
}

export default Home