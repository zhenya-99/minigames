import { createHomePage } from '../pages/home/home';

export const router = (): void => {
    const app = document.querySelector<HTMLDivElement>('#app');

    if (app) {
        app.innerHTML = '';
        app.append(createHomePage());
    }
};