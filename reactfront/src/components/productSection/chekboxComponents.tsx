import React from 'react'
import './chekboxComponents.css'
import { useTheme } from '../../hooks/ThemeContext';

const ChekboxComponents = () => {
  const { mode } = useTheme();

  return (
    <div>
      <input
          type="checkbox"
          className={`mycheck border-2 ${!mode ? 'light-mode checked:bg-colorPrimario border-colorPrimario' : 'dark-mode checked:bg-colorSecundario border-colorSecundario text-white'}`}
          id="mycheck"
          name="check"
        />
    </div>
  )
}

export default ChekboxComponents
