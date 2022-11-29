import Notiflix from 'notiflix';


const refs = {
  form: document.querySelector('.form'),
}

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  
  let delay = e.currentTarget.delay.valueAsNumber;
  const step = e.currentTarget.step.valueAsNumber;
  const amountOfPromise = e.currentTarget.amount.valueAsNumber;
  

  for (let position = 1; position <= amountOfPromise; position += 1) {
    createPromise(position, delay);
    delay += step;
  };
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  promise.then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }).catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}