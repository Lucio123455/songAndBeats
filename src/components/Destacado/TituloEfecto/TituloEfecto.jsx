import React, { useEffect } from 'react';
import styles from './TituloEfecto.module.css';

const TituloEfecto = () => {
  useEffect(() => {
    consoleText(['BEAT DESTACADO DE LA SEMANA', '20% OFF', 'BEATS AND SONGS'], 'text', ['tomato', 'rebeccapurple', 'lightblue']);
  }, []);

  const consoleText = (words, id, colors) => {
    if (colors === undefined) colors = ['#fff'];
    let visible = true;
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    const target = document.getElementById(id);
    target.setAttribute('style', `color: ${colors[0]}`);

    setInterval(() => {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount);
        setTimeout(() => {
          const usedColor = colors.shift();
          colors.push(usedColor);
          const usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute('style', `color: ${colors[0]}`);
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        setTimeout(() => {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 120);

    setInterval(() => {
      if (visible === true) {
        target.className = `${styles['console-underscore']} ${styles.hidden}`;
        visible = false;
      } else {
        target.className = styles['console-underscore'];
        visible = true;
      }
    }, 400);
  };

  return (
    <div className={styles['console-container']}>
      <span id="text"></span>
      <div className={styles['console-underscore']} id="console">&#95;</div>
    </div>
  );
};

export default TituloEfecto;
