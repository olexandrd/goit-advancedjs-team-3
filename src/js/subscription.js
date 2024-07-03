import { servicePostSubscription } from './services';

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
      console.log('Subscription successful:', response);

      alert('Subscription successful!');
    } catch (error) {
      console.error('Subscription failed:', error);

      alert('Subscription failed. Please try again.');
    } finally {
      subscribeBtn.disabled = false;
      subscribeBtn.textContent = 'Send';
    }
  });
});
