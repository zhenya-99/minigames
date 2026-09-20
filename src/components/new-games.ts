import './new-games.scss';

interface Game {
    title: string;
    rating: string;
    likes: string;
    image: string;
    size: 'peek' | 'small' | 'large';
}

const games: Game[] = [
    {
        title: 'Shelve the Potions',
        rating: '',
        likes: '',
        image: '/images/games/shelve-the-potions-card.jpg',
        size: 'peek',
    },
    {
        title: 'ISLANDERS: New Shores',
        rating: '4.9',
        likes: '54.2K',
        image: '/images/games/islanders-new-shores-card.jpg',
        size: 'small',
    },
    {
        title: 'Vacation Cafe Simulator',
        rating: '4.8',
        likes: '28.7K',
        image: '/images/games/vacation-cafe-simulator.jpg',
        size: 'large',
    },
    {
        title: 'Winter Burrow',
        rating: '4.9',
        likes: '32.4K',
        image: '/images/games/winter-burrow-card.jpg',
        size: 'small',
    },
    {
        title: 'Tailside: Cozy Cafe Sim',
        rating: '',
        likes: '',
        image: '/images/games/tailside-cozy-cafe-sim-card.jpg',
        size: 'peek',
    },
];

const createGameCard = (game: Game): HTMLElement => {
    const card = document.createElement('article');
    card.className = `game-card game-card--${game.size}`;
    card.style.backgroundImage = `url('${game.image}')`;

    const overlay = document.createElement('div');
    overlay.className = 'game-card__overlay';

    const title = document.createElement('h3');
    title.className = 'game-card__title';
    title.textContent = game.title;

    const meta = document.createElement('div');
    meta.className = 'game-card__meta';

    if (game.rating) {
        const rating = document.createElement('span');
        rating.className = 'game-card__rating';
        rating.textContent = `★ ${game.rating}`;
        meta.append(rating);
    }

    if (game.likes) {
        const likes = document.createElement('span');
        likes.className = 'game-card__likes';
        likes.textContent = `♡ ${game.likes}`;
        meta.append(likes);
    }

    overlay.append(title, meta);
    card.append(overlay);

    return card;
};

export const createNewGames = (): HTMLElement => {
    const section = document.createElement('section');
    section.className = 'new-games';

    const header = document.createElement('div');
    header.className = 'new-games__header';

    const heading = document.createElement('div');
    heading.className = 'new-games__heading';

    const accent = document.createElement('span');
    accent.className = 'new-games__accent';

    const title = document.createElement('h2');
    title.className = 'new-games__title';
    title.textContent = 'New Games';

    heading.append(accent, title);

    const controls = document.createElement('div');
    controls.className = 'new-games__controls';

    const previousButton = document.createElement('button');
    previousButton.className = 'new-games__control';
    previousButton.type = 'button';
    previousButton.setAttribute('aria-label', 'Previous games');
    previousButton.textContent = '←';

    const nextButton = document.createElement('button');
    nextButton.className = 'new-games__control new-games__control--next';
    nextButton.type = 'button';
    nextButton.setAttribute('aria-label', 'Next games');
    nextButton.textContent = '→';

    controls.append(previousButton, nextButton);
    header.append(heading, controls);

    const track = document.createElement('div');
    track.className = 'new-games__track';

    games.forEach((game) => {
        track.append(createGameCard(game));
    });

    section.append(header, track);

    return section;
};

