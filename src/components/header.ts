import './header.scss';

export const createHeader = (): HTMLElement => {
    const header = document.createElement('header');
    header.className = 'header';

    const logo = document.createElement('a');
    logo.className = 'header__logo';
    logo.href = '/';

    const logoIcon = document.createElement('img');
    logoIcon.className = 'header__logo-icon';
    logoIcon.src = '/images/logo.svg';
    logoIcon.alt = '';

    const logoText = document.createElement('span');
    logoText.className = 'header__logo-text';
    logoText.textContent = 'MiniGames';

    logo.append(logoIcon, logoText);

    const nav = document.createElement('nav');
    nav.className = 'header__nav';
    nav.setAttribute('aria-label', 'Main navigation');

    const links = ['Home', 'Library', 'Tournaments', 'Community'];

    links.forEach((item) => {
        const link = document.createElement('a');
        link.className = 'header__link';
        link.href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
        link.textContent = item;

        nav.append(link);
    });

    const actions = document.createElement('div');
    actions.className = 'header__actions';

    const loginButton = document.createElement('button');
    loginButton.className = 'header__login';
    loginButton.type = 'button';
    loginButton.textContent = 'Log In';

    const signUpButton = document.createElement('button');
    signUpButton.className = 'header__signup';
    signUpButton.type = 'button';
    signUpButton.textContent = 'Sign Up';

    const menuButton = document.createElement('button');
    menuButton.className = 'header__menu';
    menuButton.type = 'button';
    menuButton.setAttribute('aria-label', 'Open menu');
    menuButton.textContent = '☰';

    actions.append(loginButton, signUpButton, menuButton);
    header.append(logo, nav, actions);

    return header;
};