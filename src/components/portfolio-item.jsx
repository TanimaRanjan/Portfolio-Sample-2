import React from 'react'

import './portfolio-item.scss'

import ProjectPage from './project-page'

class PortfolioItem extends React.Component  {

    constructor(props) {
        super(props) 

        this.state = {
            quickView:false,
            fullProject:false,
            videoclass:'portfolio__video--over zoomIn',
            projectclass:'project'
        }
    }

    handleQuickView = () => {
        // console.log('open quick view')
        this.setState({
            videoclass:'portfolio__video--over zoomIn',
            quickView:!this.state.quickView
        })
    }

    handleFullProject = () => {
        // console.log('open full Project')
        this.setState({
            projectclass:'project moveIn',
            fullProject:!this.state.fullProject
        })
    }

    toggleVideo = () => {

        this.setState( {
            videoclass:'portfolio__video--over zoomOut'
        })

        setTimeout(() => {
            this.setState({
                quickView:!this.state.quickView
            })  
        }, 500);  
    }

    toggleProject= () => {

        this.setState( {
            projectclass:'project moveOut'
        })

        setTimeout(() => {
            this.setState({
                fullProject:!this.state.fullProject
            })  
        }, 500);


    }
    render() {
    return (
        <>
        <figure className="portfolio__img">
        <img src={this.props.image} alt={this.props.title} />
            <figcaption>{this.props.caption}</figcaption>
            <span 
                className="portfolio__video"
                onClick={this.handleQuickView}
            
            >Quick view</span>
            <span 
                className="portfolio__project"
                onClick={this.handleFullProject}
            >Full Project</span>
        </figure>


        {/**   Quick View - Video overlay */}
        {this.state.quickView && 

            <div className={this.state.videoclass}>
                <div className="lightbox">
                    <span className="cross cross--video " onClick={this.toggleVideo}>
                        <span className="cross--icon" ></span>
                    </span>
                    <div className="lightbox-video ">
                    <iframe width="100%" height="100%"
                        title={this.props.title}
                        src={this.props.src}
                        frameBorder="0" hspace="0" vspace="0" 
                        scrolling="scroll" 
                        allowFullScreen=""></iframe>
                    </div>
                </div>
            </div>

        }



        {this.state.fullProject && 
           <ProjectPage 
            projectclass={this.state.projectclass}
            toggleProject={this.toggleProject}
            title={this.props.title}
            client={this.props.client}
            skills={this.props.skills}
            desc={this.props.desc}
            title1={this.props.title}
            src={this.props.src}
           />
        }
        </>
    )
    }
}

export default PortfolioItem