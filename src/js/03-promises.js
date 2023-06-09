function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const delay = parseInt(form.delay.value);
  const step = parseInt(form.step.value);
  const amount = parseInt(form.amount.value);
  let position = 1;

  for (let i = 0; i < amount; i++) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        // Mostrar notificación de promesa cumplida usando Notiflix
        Notiflix.Notify.Success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        // Mostrar notificación de promesa rechazada usando Notiflix
        Notiflix.Notify.Failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });

    delay += step;
    position++;
  }
}
