const btn = document.getElementById('btn');
const rootElem = document.getElementById('root');

function clickHandler() {
  const messageText = prompt('Enter messsage');

  const textPar = document.createElement('p');
  textPar.innerText = messageText;

  rootElem.append(textPar);

  textPar.addEventListener('click', () => {
    textPar.remove();
  });
}

btn.addEventListener('click', clickHandler);

