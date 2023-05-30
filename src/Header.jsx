import React from 'react'
import RuleIcon from '@mui/icons-material/Rule';
const Header = () => {
  return (
    <header className="App-header navbar navbar-expand-lg bg-body-tertiary ">
        <ul>
            <li><a href="/"><RuleIcon/></a></li>
            <li><a href='/home'>Menu</a></li>
        </ul>
      </header>
  )
}

export default Header