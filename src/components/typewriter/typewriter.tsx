import React, { useState, useEffect, useRef } from 'react';
import './typrwriter.css';

interface TyperProps {
  phrases: string[];
  speed: number;
  deleteSpeed: number;
  displayTime: number;
}

const Typer: React.FC<TyperProps> = ({ phrases, speed, deleteSpeed, displayTime }) => {
  const [text, setText] = useState<string>('');
  const [phraseIndex, setPhraseIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const currentTextLength = useRef<number>(0);

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    let timer: NodeJS.Timeout;

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
