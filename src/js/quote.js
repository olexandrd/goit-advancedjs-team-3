import { serviceGetQuote } from './services';

(async () => {
  const quoteElement = document.getElementById('quote');

  if (!quoteElement) {
    return;
  }

  let quoteData;

  const dataFromStorage = localStorage.getItem('quote');
  if (dataFromStorage) {
    quoteData = JSON.parse(dataFromStorage);

    if (Date.now() - quoteData.timestamp > 1000 * 60 * 60 * 24) {
      quoteData = null;
    }
  }

  if (!quoteData) {
    try {
      quoteData = await serviceGetQuote();
      localStorage.setItem(
        'quote',
        JSON.stringify({ ...quoteData, timestamp: Date.now() })
      );
    } catch {
      quoteData = null;
    }
  }

  if (!quoteData) {
    return;
  }

  const quoteDescriptionElement =
    quoteElement.querySelector('.quote-description');
  const quoteAuthorElement = quoteElement.querySelector('.quote-author');

  quoteDescriptionElement.textContent = quoteData.quote;
  quoteAuthorElement.textContent = quoteData.author;

  quoteElement.classList.remove('hidden');
})();

export {};
