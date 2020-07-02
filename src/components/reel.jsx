import React from 'react'

const Reel = () => {

    return ( 
      <> 
      <div className='reel__main'>
        <section className="reel" id="reel">
        <div className="reel__container">
          <iframe className="reel__video" 
            title='Reel Video'
              src="//player.vimeo.com/video/425582388?title=0&byline=0&portrait=0&color=008efe&amp\';controls=1&fullscreen=1&buttons.share=false&embed.buttons.like=false;autoplay=1&loop=0"
              frameBorder="0" hspace="0" 
              vspace="0" scrolling="scroll" 
              allowFullScreen=""></iframe>

          </div>
        </section>
      </div>
      </>
    )
}

export default Reel

