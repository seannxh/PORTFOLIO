import React, { useState, useEffect, useRef } from 'react';
import './typrwriter.css'
const Typer = ({ phrases, speed, deleteSpeed, displayTime }) => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const containerRef = useRef(null);

  const currentTextLength = useRef(0);

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    let timer;

    if (isTyping) {
      timer = setTimeout(() => {
        const nextText = phrase.slice(0, currentTextLength.current + 1);
        setText(nextText);
        currentTextLength.current++;

        if (containerRef.current) {
          const container = containerRef.current;
          if (container.scrollWidth > container.clientWidth) {
            container.style.fontSize = 'calc(100% - 2px)';
          }
        }

        if (currentTextLength.current === phrase.length) {
          setIsTyping(false);
          setTimeout(() => {
            setIsDeleting(true);
          }, displayTime);
        }
      }, speed);
    } else if (isDeleting) {
      timer = setTimeout(() => {
        const nextText = text.slice(0, text.length - 1);
        setText(nextText);

        if (containerRef.current) {
          containerRef.current.style.fontSize = '';
        }

        if (nextText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          setIsTyping(true);
          currentTextLength.current = 0;
        }
      }, deleteSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isTyping, isDeleting, phraseIndex, phrases, speed, deleteSpeed, displayTime]);

  return (
    <div
      ref={containerRef}
      className="typewriter-container w-full overflow-hidden whitespace-nowrap px-2"
    >
      <span className="typewriter-text">
        {text}
        <span className="cursor">|</span>
      </span>
    </div>
  );
};

export default Typer;
