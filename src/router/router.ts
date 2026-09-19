import { createHomePage } from '../pages/home/home';

export const router = (): void => {
  const path = window.location.pathname;
  const app = document.querySelector<HTMLDivElement>('#app');

  if (path === '/' && app) {
    app.innerHTML = '';
    app.append(createHomePage());
  }
};
