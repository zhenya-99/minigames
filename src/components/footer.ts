import './footer.scss';

export const createFooter = (): HTMLElement => {
    const footer = document.createElement('footer');
    footer.className = 'footer';

    const top = document.createElement('div');
    top.className = 'footer__top';

    const info = document.createElement('div');
    info.className = 'footer__info';

    const logo = document.createElement('a');
    logo.className = 'footer__logo';
    logo.href = '/';
    logo.textContent = 'MiniGames';

    const description = document.createElement('p');
    description.className = 'footer__description';
    description.textContent =
        'Take a short break and have fun. Hundreds of curated casual mini-games right in your web browser. No download required.';

    info.append(logo, description);

    const navigation = document.createElement('div');
    navigation.className = 'footer__navigation';

    const explore = createFooterColumn('Explore', [
        'Home',
        'Library',
        'Categories',
        'Tournaments',
    ]);

    const company = createFooterColumn('Company', [
        'About Us',
        'Contact',
        'Privacy Policy',
        'Terms of Service',
    ]);

    const community = createFooterColumn('Community', ['←', '▣', '◉']);

    navigation.append(explore, company, community);
    top.append(info, navigation);

    const bottom = document.createElement('div');
    bottom.className = 'footer__bottom';

    const copyright = document.createElement('span');
    copyright.textContent = '© 2026 MiniGames. All rights reserved.';

    const school = document.createElement('span');
    school.textContent = 'RS School';

    const github = document.createElement('span');
    github.textContent = '@student-nickname';

    const love = document.createElement('span');
    love.textContent = 'Designed with love';

    bottom.append(copyright, school, github, love);

    footer.append(top, bottom);

    return footer;
};

const createFooterColumn = (
    title: string,
    items: string[],
): HTMLElement => {
    const column = document.createElement('div');
    column.className = 'footer__column';

    const heading = document.createElement('h3');
    heading.className = 'footer__column-title';
    heading.textContent = title;

    const list = document.createElement('div');
    list.className = 'footer__column-list';

    items.forEach((item) => {
        const link = document.createElement('a');
        link.className = 'footer__link';
        link.href = '#';
        link.textContent = item;
        list.append(link);
    });

    column.append(heading, list);

    return column;
};