import React, { useState } from 'react';
import Slider from 'react-input-slider';
import { useTheme } from '../../hooks/ThemeContext';

interface SliderComponentsProps {
    handleSliderChange: (num: number) => void;
}

const SliderComponents: React.FC<SliderComponentsProps> = ({ handleSliderChange }) => {
  const [state, setState] = useState(100);
  const { mode } = useTheme();
  
  const handleSlider = ({ x }: { x: number }) => {
    setState(x);
    handleSliderChange(x);
  };

  return (
    <div className='h-10'>
      <Slider
        //axis="x"
        x={state}
        xmin={0}
        onChange={handleSlider}
        styles={{
          track: {
            backgroundColor: !mode?'#282929':'#B7BCBE',
            height: '20px',
            width:'100%'
          },
          active: {
            backgroundColor: !mode?'#ff7ac6':'#057aff',
            height: '20px',
          },
          thumb: {
            backgroundColor: 'black',
            border: !mode?'solid 3px #ff7ac6':'solid 3px #057aff',
            height: '20px',
            width: '20px',
          },
          disabled: {
            opacity: 0.5,
          }
        }}
      />
    </div>
  );
}

export default SliderComponents;
