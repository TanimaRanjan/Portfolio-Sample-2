import React from 'react'

import './contact.scss'

const Contact = ({toggleContact}) => {

    return (
        <>


        <div id='contact' className='contact'>
        <header>
        <nav className='nav' id='navbar'>
            <span id='logo' 
            className='nav__logo' 
            onClick={toggleContact}
            ><h1>Marcus Romero Productions</h1>
            </span>
        </nav>
        </header>
           <span className="cross cross--project " onClick={toggleContact}>
            <span className="cross--icon" ></span>
        </span> 
        
        <div className='contact--right'>
            {/* <p className='title'> ABOUT</p> */}
            <p>I am an experienced Motion Graphics Artist and Video Editor. 
            I specialize in working with arts and educational organizations and I have a passion for crafting impactful videos 
            and animations that share inspiring stories and important missions.</p>
            
            {/* <p className='title'>CONTACT</p>*/}
            <p>For all inquiries, please send me an email: marcusromeroproductions [at] gmail.com or call me at: (410) 967-8133</p>
            <p>I am an experienced Motion Graphics Artist and Video Editor. 
            I specialize in working with arts and educational organizations and I have a passion for crafting impactful videos 
            and animations that share inspiring stories and important missions.</p>
            
            {/* <p className='title'>CONTACT</p>*/}
            <p>For all inquiries, please send me an email: marcusromeroproductions [at] gmail.com or call me at: (410) 967-8133</p>
            <p>I am an experienced Motion Graphics Artist and Video Editor. 
            I specialize in working with arts and educational organizations and I have a passion for crafting impactful videos 
            and animations that share inspiring stories and important missions.</p>
            
            {/* <p className='title'>CONTACT</p>*/}
            <p>For all inquiries, please send me an email: marcusromeroproductions [at] gmail.com or call me at: (410) 967-8133</p>
            <p>I am an experienced Motion Graphics Artist and Video Editor. 
            I specialize in working with arts and educational organizations and I have a passion for crafting impactful videos 
            and animations that share inspiring stories and important missions.</p>
            
            {/* <p className='title'>CONTACT</p>*/}
            <p>For all inquiries, please send me an email: marcusromeroproductions [at] gmail.com or call me at: (410) 967-8133</p>
            <p>I am an experienced Motion Graphics Artist and Video Editor. 
            I specialize in working with arts and educational organizations and I have a passion for crafting impactful videos 
            and animations that share inspiring stories and important missions.</p>
            
            {/* <p className='title'>CONTACT</p>*/}
            <p>For all inquiries, please send me an email: marcusromeroproductions [at] gmail.com or call me at: (410) 967-8133</p>
            <p>I am an experienced Motion Graphics Artist and Video Editor. 
            I specialize in working with arts and educational organizations and I have a passion for crafting impactful videos 
            and animations that share inspiring stories and important missions.</p>
            
            {/* <p className='title'>CONTACT</p>*/}
            <p>For all inquiries, please send me an email: marcusromeroproductions [at] gmail.com or call me at: (410) 967-8133</p>
        </div>
        
    </div>
        </>

    )

}

export default Contact