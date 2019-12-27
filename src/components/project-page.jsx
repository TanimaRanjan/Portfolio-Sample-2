import React from 'react'

import './project-page.scss'


const ProjectPage = (
    {
    projectclass,
    toggleProject,
    title,
    client,
    skills,
    desc,
    title1,
    src

}
) => {

   // console.log('project page  ',props)
    return (
        
        <>
     
      
    <div className={projectclass}>
    <header>
    <nav className='nav' id='navbar'>
        <span id='logo' 
        className='nav__logo' 
        onClick={toggleProject}
        ><h1>Marcus Romero Productions</h1>
        </span>
    </nav>
    </header>
    <div className="project--wrapper">
        <span className="cross cross--project " onClick={toggleProject}>
            <span className="cross--icon" ></span>
        </span> 
        <div className="project--inner">
            <iframe className="project--content__video" 
            title={title1}
            src={src}
            frameBorder="0" hspace="0" vspace="0" scrolling="scroll"
             webkitallowfullscreen="" mozallowfullscreen="" 
            allowFullScreen="" width="100%" height="100%"></iframe>
            <div className="project--title">
            <h1>{title}</h1>
            </div>
            <hr className="project--section-break"></hr>
            <div className="project--content">
                <div className="project--content__heading">
                <h3>Client: {client}</h3>
                </div>
                <div className="project--content__sub">
                Skills: {skills}
                </div>
                <div className="project--content__rte">
                <p className="project--content__para">
                    {desc}
                
                </p>
                </div>
               
                
            </div>
        </div>
    </div>
       
</div>
</>
    )
}

export default ProjectPage