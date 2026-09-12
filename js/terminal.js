(function () {
  const terminalBody = document.getElementById('terminal_body');
  if (!terminalBody) return;

  const sequence = [
    { type: 'command', text: 'whoami' },
    { type: 'output', text: 'karen_vargas_medrano' },
    { type: 'command', text: 'cat perfil.txt' },
    { type: 'output', text: 'Estudiante de Ingenieria de Sistemas, UCB San Pablo. Interes en desarrollo de software, desarrollo web y bases de datos.' },
    { type: 'command', text: 'ls habilidades/' },
    { type: 'output', text: 'java  python  javascript  html5  css3  flutter  postgresql  git' },
    { type: 'command', text: './run proyectos.sh' },
    { type: 'output', text: '6 proyectos academicos cargados correctamente.' }
  ];

  let lineIndex = 0;
  let charIndex = 0;

  function typeNextChar() {
    if (lineIndex >= sequence.length) {
      const cursor = document.createElement('span');
      cursor.className = 'terminal_cursor';
      terminalBody.appendChild(cursor);
      return;
    }

    const current = sequence[lineIndex];
    let activeLine = terminalBody.querySelector('.terminal_line.is_typing');

    if (!activeLine) {
      activeLine = document.createElement('span');
      activeLine.className = 'terminal_line is_typing';

      if (current.type === 'command') {
        const prompt = document.createElement('span');
        prompt.className = 'terminal_prompt';
        prompt.textContent = 'karen@cv:~$';
        activeLine.appendChild(prompt);
        activeLine.appendChild(document.createTextNode(' '));
      } else {
        activeLine.classList.add('terminal_output');
      }

      terminalBody.appendChild(activeLine);
    }

    if (charIndex < current.text.length) {
      activeLine.appendChild(document.createTextNode(current.text.charAt(charIndex)));
      charIndex += 1;
      window.setTimeout(typeNextChar, current.type === 'command' ? 45 : 12);
    } else {
      activeLine.classList.remove('is_typing');
      lineIndex += 1;
      charIndex = 0;
      window.setTimeout(typeNextChar, current.type === 'command' ? 280 : 480);
    }
  }

  window.setTimeout(typeNextChar, 500);
})();
