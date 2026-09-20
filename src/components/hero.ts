import './hero.scss';

export const createHero = (): HTMLElement => {
    const hero = document.createElement('section');
    hero.className = 'hero';

    const content = document.createElement('div');
    content.className = 'hero__content';

    const title = document.createElement('h1');
    title.className = 'hero__title';
    title.textContent = 'Take a Short Break & Have Fun';

    const description = document.createElement('p');
    description.className = 'hero__description';
    description.textContent =
        'Discover hundreds of curated casual mini-games. Play instantly in your browser — puzzle, match 3, farm, and board classics.';

    const button = document.createElement('button');
    button.className = 'hero__button';
    button.type = 'button';
    button.textContent = 'Browse Library';

    content.append(title, description, button);
    hero.append(content);

    return hero;
};