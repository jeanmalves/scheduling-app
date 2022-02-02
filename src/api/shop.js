/**
 * Mocking client-server processing
 */
// eslint-disable-next-line no-underscore-dangle
const _services = [
  {
    id: 1, title: 'Barba', price: 35, cover: 'shave.jpg',
  },
  {
    id: 2, title: 'Corte de cabelo', price: 40, cover: 'hair-cut.jpg',
  },
  {
    id: 3, title: 'Barboterapia', price: 80, cover: 'therapy-shave.jpg',
  },
];

export default {
  getServices(cb) {
    setTimeout(() => cb(_services), 100);
  },

  buyServices(services, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      // eslint-disable-next-line no-unused-expressions
      (Math.random() > 0.5 || navigator.webdriver)
        ? cb()
        : errorCb();
    }, 100);
  },
};
