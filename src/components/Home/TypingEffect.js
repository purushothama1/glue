import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const TypingEffect = () => (
  <>
    <ReactTypingEffect
      text={['Boredom', 'Hierarchy', 'Stress']}
    />

    <br />

    <ReactTypingEffect
      text={['Playfulness', 'Creativity', 'Equality']}
      cursorRenderer={(cursor) => <h1>{cursor}</h1>}
      displayTextRenderer={(text, i) => (
        <h1>
          {text.split('').map((char, i) => {
            const key = `${i}`;
            return (
              <span
                key={key}
                style={i % 2 === 0 ? { color: 'magenta' } : {}}
              >
                {char}
              </span>
            );
          })}
        </h1>
      )}
    />
  </>
);

export default TypingEffect;
