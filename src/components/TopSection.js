import { Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

function TopSection(props) {
  const { navbarLinks } = props
  return (
    <>
      <div className="top-bar">
        <div className="subscribe">
          <p>Subscribe</p>
        </div>
        <div className="large">
          <h1>Hindustan Times</h1>
        </div>
        <div className="magnifying-glass-signup">
          <div className="magnifying-glass">
            <SearchIcon />
          </div>
          <div className="signup">
            <Button>signup</Button>
          </div>
        </div>
      </div>

      <nav className="navbar">
        {navbarLinks.map((link, index) => (
          <p key={index}>{link}</p>
        ))}
      </nav>

      <header className="header">
        <div className='headercontent'>
          <h1>The Ayodhya Movement</h1>
          <p>A civilisational reawakening is underway. Young Hindus are hooked to Ayodhya updates. Ramayan’s meta-narrative is being interwoven with stories that matter to different caste and tribal groups. And hopefully, this will start an inter-community civilisational dialogue. </p>
        </div>

      </header>
    </>
  )
}

export default TopSection