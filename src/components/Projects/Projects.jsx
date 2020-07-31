import React from 'react';
import './Projects.scss';
import projectsData from './utils';
import ProjectItem from './ProjectItem/ProjectItem';

export default function Projects() {
    return (
        <React.Fragment>
            <div className="projects">
                <div className="projects-wrapper">
                    {projectsData.map(item => <ProjectItem key={item.id} item={item} />)}
                </div>
            </div>
        </React.Fragment>
    )
}
