import '../styles/global.css';
import '../styles/home.css';
import '../styles/blog.css';
import '../styles/cookie.css';
import './cookies/cookieconsent-config.js';

const init = () => {
  if (window.location.pathname) {
    import('./home').then((module) => {
      module.initSwipers();
    });
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
