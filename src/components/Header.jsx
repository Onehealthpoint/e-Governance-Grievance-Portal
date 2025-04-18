import React from 'react'
import Accessibility from './Accessibility'

const Header = () => {
  return (
    <div>
      <Accessibility />
      <div className="h-full flex items-center justify-center">
            <img src="/images/gov_logo.png" alt="Nepal Government Logo" className="h-20 mx-auto mt-4" />
            <header className="w-10/12">
                <p className="text-center font-bold text-nepRed">Government of Nepal</p>
                <p className="text-center font-bold text-nepRed">Department of E-Governance and Citizen Services</p>
                <h1 className="text-center text-3xl font-bold text-nepRed">Public Grievance Portal</h1>
                <p className="text-center font-bold text-nepRed">Gwarko, Lalitpur</p>
            </header>
            <img src="/images/Nepali_Flag.gif" alt="Nepali National Flag" className="h-20 mx-auto my-4" />
        </div>
    </div>
  )
}

export default Header
