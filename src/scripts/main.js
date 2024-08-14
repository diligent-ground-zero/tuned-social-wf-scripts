import '../styles/global.css';
import '../styles/home.css';
import '../styles/blog.css';

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
