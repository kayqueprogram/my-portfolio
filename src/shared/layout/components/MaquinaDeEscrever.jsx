import React, { useState, useEffect } from 'react';

function MaquinaDeEscrever(props) {
  const [text, setText] = useState('');
  const [viewCursor, setViewCursor] = useState(false);

  useEffect(() => {
    let i = 0;
    setViewCursor(true);

    const interval = setInterval(() => {
      if (i < props.text.length) {
        setText((prevText) => prevText + props.text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
        if (props.hideCursor) {
          setViewCursor(false);
        }
      }
    }, props.delay || 100);

    return () => {
      clearInterval(interval);
    };
  }, [props.text, props.delay, props.hideCursor]);

  return (
    <>
      {text}
      {viewCursor && (
        <span className="animate-animar-cursor text-xl md:text-2xl ml-1 font-medium">|</span>
      )}
    </>
  );
}

export default MaquinaDeEscrever;
