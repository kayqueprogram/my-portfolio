import React, { useState, useEffect } from 'react';
import projectsApi from '../../services/projects';
import { breakStr } from '../../shared/utils/breakStr';
import { useParams } from 'react-router-dom';
import Title from '../../shared/layout/Title';
import Column from '../../shared/layout/Column';

const ProjectDetail = () => {
    const { id } = useParams();

    const [project, setProject] = useState(null);

    useEffect(() => {
        const getProjectDetails = async () => {
            try {
                console.log('Fetching project details for projectId:', id);
                const projectDetails = await projectsApi.getProjectPost(id);
                console.log('Fetched project details:', projectDetails);
                setProject(projectDetails);
            } catch (err) {
                console.log('Errooooooooooooooooooooooooo: ', err);
            }
        };

        getProjectDetails();
    }, [id]);

    return (
        <div>
            <div className="mx-auto ajust container  py-10">
                {project ? (
                    <div>
                        <div className="container mx-auto">
                            <div className="mx-auto container">
                                <Title>{project.title}</Title>
                            </div>
                            <img
                                src={project.src}
                                alt="Image Description"
                                className="w-15 h-27 object-cover rounded shadow"
                            />
                            <div className="container">
                                <Column>
                                    {breakStr(project.description)?.map((cont, index) => (
                                        <React.Fragment key={index}>
                                            <p className='paragraph'>{cont}</p>
                                        </React.Fragment>
                                    ))}
                                </Column>
                                {project?.link &&(

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mx-3 inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        View Website
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

                                )}
                                {project?.linkRepo &&(
                                    <a
                                        href={project.linkRepo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mx-auto inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        View Repo
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
                                )}
                            </div>

                        </div>

                    </div>
                ) : (
                    <p>Loading project details...</p>
                )}
            </div>
        </div>
    );
};

export default ProjectDetail;
