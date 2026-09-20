import './developer-cta.scss';

export const createDeveloperCta = (): HTMLElement => {
    const section = document.createElement('section');
    section.className = 'developer-cta';

    const image = document.createElement('img');
    image.className = 'developer-cta__image';
    image.src = '/minigames/images/illustration-side.png';
    image.alt = 'Game developer workspace';

    const card = document.createElement('div');
    card.className = 'developer-cta__card';

    const title = document.createElement('h2');
    title.className = 'developer-cta__title';
    title.textContent = 'Are You a Game Developer?';

    const description = document.createElement('p');
    description.className = 'developer-cta__description';
    description.textContent =
        "Want to see your game on MiniGames? We're always looking for fun, engaging mini games to add to our platform. Submit your game and reach thousands of players!";

    const button = document.createElement('button');
    button.className = 'developer-cta__button';
    button.type = 'button';
    button.textContent = '↥ Submit Form';

    const contact = document.createElement('p');
    contact.className = 'developer-cta__contact';
    contact.textContent = 'or contact us at developers@minigames.com';

    card.append(title, description, button, contact);
    section.append(image, card);

    return section;
};