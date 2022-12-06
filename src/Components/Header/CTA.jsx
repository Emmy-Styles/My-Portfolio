import React from 'react'
import Resume from '../../Assets/resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
    <a href={Resume} download className='btn'>Download Resume</a>
    <a href="#contact" className='btn btn-primary'>Connect With Me</a>
    </div>
  )
}

export default CTA