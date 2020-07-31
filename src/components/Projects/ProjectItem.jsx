import React from 'react'

function ProjectItem({ item }) {
    return (
        <div className="project-item">
            <a href="#">
                <img src={item.img} alt="item.title" />
                <div className="project-item-info">
                    <h3>{item.title}</h3>
                    <span>{item.description}</span>
                </div>
            </a>
        </div>
    )
}

export default React.memo(ProjectItem);
