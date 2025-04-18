import React from 'react'

const About = () => {
  return (
    <div className='w-[99%] mx-auto my-2' id='about'>
      <div className='w-full flex flex-col md:flex-row gap-4 items-start bg-white'>
        <div className='w-full md:w-3/5 text-justify'>
          <h1 className='px-4 py-1 text-2xl font-bold text-white bg-nepBlue'>About Us</h1>
          <p className='mt-2'>
            The Department of E-Governance and Citizen Services is a central-level government body established
            to regulate, develop, manage, and facilitate digital governance and public service delivery in Nepal. 
            Currently operating under the Ministry of Communication and Information Technology (or relevant ministry), 
            Government of Nepal, this department is dedicated to enhancing transparency, efficiency, and accessibility 
            in government-citizen interactions through technology. 
          </p>
          <p className='mt-2'>
            The Constitution of Nepal 20XX has laid the foundation for a federal governance structure, distributing powers and 
            responsibilities among the Union, Provincial, and Local levels. 
            Under Article [Relevant Article] and Schedule [Relevant Schedule], the Union Government holds authority over national 
            digital policies, cybersecurity, and cross-province e-governance infrastructure, while provinces and local governments 
            manage local e-service delivery and municipal-level digital initiatives.
          </p>
        </div>
        <div className='w-full md:w-2/5 text-justify border-2 border-nepBlue p-2'>
          <h1 className='text-center text-2xl font-bold text-nepBlue'>Our Mission</h1>
          <p className='mt-2'>
            At the Public Grievance Portal, our mission is to empower citizens by providing a transparent, efficient, and responsive 
            platform for voicing concerns and seeking resolutions. We are committed to:
          </p>
          <ul className='list-disc list-inside mt-2 font-bold'>
            <li>Ensuring Accountability</li>
            <li>Promoting Transparency</li>
            <li>Enhancing Public Trust</li>
            <li>Driving Continuous Improvement</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About