import React, { useState, useEffect } from 'react';
import projectsApi from '../../services/projects';
import CardProject from '../../shared/layout/CardProject';

const Index = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await projectsApi.getProjectPosts();
                setProjects(data);
                setLoading(false);
            } catch (err) {
                console.log('Error fetching projects: ', err);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-4xl font-semibold mb-6">Projects</h1>
            {loading ? (
                <p>Loading projects...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {projects.map(project => (
                        <CardProject
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            src={project.src}
                            link={`/projects/${project.id}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Index;
