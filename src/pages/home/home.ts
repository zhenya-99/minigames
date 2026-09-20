import { createHeader } from '../../components/header';
import { createHero } from '../../components/hero';
import { createNewGames } from '../../components/new-games';
import { createTopPlayers } from '../../components/top-players';
import { createDeveloperCta } from '../../components/developer-cta';
import { createFooter } from '../../components/footer';

export const createHomePage = (): HTMLElement => {
    const page = document.createElement('div');
    page.className = 'home-page';

    const header = createHeader();

    const main = document.createElement('main');
    main.className = 'home-page__main';

    main.append(
        createHero(),
        createNewGames(),
        createTopPlayers(),
        createDeveloperCta(),
    );

    page.append(header, main);
    page.append(header, main, createFooter());

    return page;

    return page;
};