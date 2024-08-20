import '../styles/global.css';
import '../styles/home.css';
import '../styles/blog.css';
import '../styles/cookie.css';
import './cookies/cookieconsent-config.js';

const init = () => {
  import('./global/index.js').then((module) => {
    module.initSwipers();
  });

  if (window.location.pathname.includes('linkedin-ads-lab')) {
    import('./blog/blog.js').then((module) => {
      module.initBlog();
    });
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
