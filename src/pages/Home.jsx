import React, { useState, useEffect } from 'react';
import introApi from '../services/intoducingme/index';
import projectsApi from '../services/projects';
import { breakStr } from '../shared/utils/breakStr';
import Typewriter from 'typewriter-effect'
import cutString from '../shared/utils/cutString';
import CardContent from '../shared/layout/CardContent';
import CardProject from '../shared/layout/CardProject';
import DescriptionCard from '../shared/layout/DescriptionCard';
import Column from '../shared/layout/Column';
import { Link } from 'react-router-dom';
import Title from '../shared/layout/Title';

function Home() {

    const [intro, setIntro] = useState({});

    useEffect(() => {
        const getIntro = async () => {

            try {
                const data = await introApi.getIntro();
                setIntro(data)
            } catch (err) {
                console.log('erro na api intro: ', err)
            }
        };

        getIntro();
    }, []);

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            try {
                const data = await projectsApi.getProjectPosts();
                setProjects(data);
            } catch (err) {
                console.log('erro na projectsApi: ', err);
            }
        };

        getProjects();
    }, []);

    return (
        <>
            <div className="text-2xl bg-gray-200 justify-center text-center py-10 p-5 mx-auto">
                <h1 className="text-4xl">💻 Creating the future with lines of code</h1>
                <br />
                <Typewriter

                    onInit={(typewriter) => {

                        typewriter

                            .typeString("Olá! Bem vindo ao meu portfólio")

                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Meu nome é Kayque, Programador e Desenvolvedor web")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString('Bebo mais café do que água, e faço o chuveiro chorar no argumento 🙃')

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
                            <img class=" h-auto max-w-xs mx-auto image rounded-3xl" src={intro.img} alt="image description" />
                        )}

                    </div>
                </div>
            )}

            {intro?.skills && (
                <div className='mx-auto ajust container  py-10'>

                    <div className="mx-auto">
                        <Title>Minhas Skills</Title>

                        <Column>
                            {intro?.skills?.map(cont => <DescriptionCard>{cont}</DescriptionCard>)}
                        </Column>
                    </div>


                </div>
            )}

            <div className="mx-auto ajust container  py-10">
                <div className="mx-auto">
                    <Title>Meus Projetos</Title>
                    <Column>
                        {projects.map(project => (
                            <CardProject
                            key={project.id} // Make sure to add the key
                            title={project.title}
                            description={project.description}
                            src={project.src}
                            link={`/projects/${project.id}`}
                          />
                            
                          
                        ))}
                    </Column>
                </div>
            </div>
        </>
    )
}


export default Home