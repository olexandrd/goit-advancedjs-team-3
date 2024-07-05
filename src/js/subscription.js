import { servicePostSubscription } from './services';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const subscribeForm = document.getElementById('subscribeForm');
  const subscribeBtn = document.getElementById('subscribeBtn');

  subscribeForm.addEventListener('submit', async event => {
    event.preventDefault();

    const email = subscribeForm.elements['email'].value;

    try {
      subscribeBtn.disabled = true;
      subscribeBtn.textContent = 'Subscribing...';

      const response = await servicePostSubscription(email);

      iziToast.success({
        title: 'Success',
        message: response.message,
      });
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: error.message,
      });
    } finally {
      subscribeBtn.disabled = false;
      subscribeBtn.textContent = 'Send';
      subscribeForm.reset();
    }
  });
});
