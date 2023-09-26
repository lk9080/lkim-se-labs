import React, { useState } from 'react';

function EmojiComponent() {
    const [isHappy, setIsHappy] = useState(true);
  
    const changeToSadMood = () => {
      setIsHappy(false);
    };
  
    const changeToHappyMood = () => {
      setIsHappy(true);
    };
  
    return (
      <>
        <div style={{ fontSize: '100px' }}>
          {isHappy ? '😄' : '😢'}
        </div>
        <div>
          <button onClick={changeToSadMood}>
            Saaad
          </button>
          <button onClick={changeToHappyMood}>
            Sooo Happy!
          </button>
        </div>
      </>
    );
  }
  
  export default EmojiComponent;