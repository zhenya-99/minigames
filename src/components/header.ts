import './header.scss';

export const createHeader = (): HTMLElement => {
    const header = document.createElement('header');
    header.className = 'header';

    const logo = document.createElement('a');
    logo.className = 'header__logo';
    logo.href = '/';

    const logoImage = document.createElement('img');
    logoImage.src = '/images/logo.svg';
    logoImage.alt = 'MiniGames';

    const logoText = document.createElement('span');
    logoText.textContent = 'MiniGames';

    logo.append(logoImage, logoText);

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
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.innerHTML = '☰';

    actions.append(loginButton, signUpButton, menuButton);
    header.append(logo, nav, actions);

    // Mobile / tablet sidebar
    const sidebar = document.createElement('aside');
    sidebar.className = 'mobile-menu';
    sidebar.setAttribute('aria-hidden', 'true');

    const sidebarHeader = document.createElement('div');
    sidebarHeader.className = 'mobile-menu__header';

    const sidebarLogo = logo.cloneNode(true) as HTMLAnchorElement;
    sidebarLogo.className = 'mobile-menu__logo';

    const closeButton = document.createElement('button');
    closeButton.className = 'mobile-menu__close';
    closeButton.type = 'button';
    closeButton.setAttribute('aria-label', 'Close menu');
    closeButton.textContent = '×';

    sidebarHeader.append(sidebarLogo, closeButton);

    const sidebarNav = document.createElement('nav');
    sidebarNav.className = 'mobile-menu__nav';
    sidebarNav.setAttribute('aria-label', 'Mobile navigation');

    links.forEach((item) => {
        const link = document.createElement('a');
        link.className = 'mobile-menu__link';

        if (item === 'Home') {
            link.classList.add('mobile-menu__link--active');
        }

        link.href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
        link.textContent = item;

        sidebarNav.append(link);
    });

    const sidebarActions = document.createElement('div');
    sidebarActions.className = 'mobile-menu__actions';

    const sidebarLogin = document.createElement('button');
    sidebarLogin.className = 'mobile-menu__login';
    sidebarLogin.type = 'button';
    sidebarLogin.textContent = 'Log In';

    const sidebarSignUp = document.createElement('button');
    sidebarSignUp.className = 'mobile-menu__signup';
    sidebarSignUp.type = 'button';
    sidebarSignUp.textContent = 'Sign Up';

    sidebarActions.append(sidebarLogin, sidebarSignUp);

    sidebar.append(sidebarHeader, sidebarNav, sidebarActions);

    const openMenu = (): void => {
        sidebar.classList.add('mobile-menu--open');
        sidebar.setAttribute('aria-hidden', 'false');
        menuButton.setAttribute('aria-expanded', 'true');
    };

    const closeMenu = (): void => {
        sidebar.classList.remove('mobile-menu--open');
        sidebar.setAttribute('aria-hidden', 'true');
        menuButton.setAttribute('aria-expanded', 'false');
    };

    menuButton.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);

    const wrapper = document.createElement('div');
    wrapper.className = 'header-wrapper';
    wrapper.append(header, sidebar);

    return wrapper;
};