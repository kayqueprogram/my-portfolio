import React, { useState, useEffect } from 'react';
import projectsApi from '../../services/projects';
import CardProject from '../../shared/layout/CardProject';

const Index = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await projectsApi.getProjectPosts();
                setProjects(data);
            } catch (err) {
                console.log('Error fetching projects: ', err);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-4xl font-semibold mb-6">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {projects.map(project => (
                    <CardProject
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        src={project.src}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Index;
