import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GrGithub} from 'react-icons/gr'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/mwlite/in/emmanuel-ulelu-124219221" target="_blank" title='Linkedin'><BsLinkedin/></a>
        <a href="https://github.com/Emmy" target="_blank" title='Github'><GrGithub/></a>
        <a href="https://twitter.com/code_scribe" target="_blank" title='Twitter'><BsTwitter/></a>

    </div>
  )
}

export default HeaderSocials