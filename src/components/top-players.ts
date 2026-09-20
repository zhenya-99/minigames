import './top-players.scss';

interface Player {
    rank: number;
    initials: string;
    name: string;
    gamesPlayed: number;
    totalScore: string;
    streak: string;
    favoriteGame: string;
}

const players: Player[] = [
    {
        rank: 1,
        initials: 'AP',
        name: 'Alex_Pro99',
        gamesPlayed: 142,
        totalScore: '94,250',
        streak: '🔥 12 days',
        favoriteGame: 'Heartopia',
    },
    {
        rank: 2,
        initials: 'CG',
        name: 'CozyGamer_x',
        gamesPlayed: 118,
        totalScore: '81,400',
        streak: '🔥 8 days',
        favoriteGame: 'Cat Roll Go',
    },
    {
        rank: 3,
        initials: 'MM',
        name: 'MatchMaster',
        gamesPlayed: 98,
        totalScore: '72,110',
        streak: '🔥 5 days',
        favoriteGame: 'Tiny Glade',
    },
    {
        rank: 4,
        initials: 'BP',
        name: 'BubblePop',
        gamesPlayed: 87,
        totalScore: '65,900',
        streak: '🔥 3 days',
        favoriteGame: 'Whisper of the House',
    },
    {
        rank: 5,
        initials: 'SG',
        name: 'SudokuGod',
        gamesPlayed: 74,
        totalScore: '59,320',
        streak: '🔥 2 days',
        favoriteGame: 'Cat Chess',
    },
];

const createPlayerRow = (player: Player): HTMLElement => {
    const row = document.createElement('div');
    row.className = 'top-players__row';

    row.innerHTML = `
    <span class="top-players__rank">#${player.rank}</span>

    <div class="top-players__player">
      <span class="top-players__avatar">${player.initials}</span>
      <span>${player.name}</span>
    </div>

    <span>${player.gamesPlayed}</span>
    <span>${player.totalScore}</span>
    <span>${player.streak}</span>
    <span class="top-players__game">${player.favoriteGame}</span>
  `;

    return row;
};

export const createTopPlayers = (): HTMLElement => {
    const section = document.createElement('section');
    section.className = 'top-players';

    const heading = document.createElement('div');
    heading.className = 'top-players__heading';

    heading.innerHTML = `
    <span class="top-players__accent"></span>
    <h2 class="top-players__title">Top Players This Week</h2>
  `;

    const table = document.createElement('div');
    table.className = 'top-players__table';

    const tableHeader = document.createElement('div');
    tableHeader.className = 'top-players__table-header';

    tableHeader.innerHTML = `
    <span>RANK</span>
    <span>PLAYER</span>
    <span>GAMES PLAYED</span>
    <span>TOTAL SCORE</span>
    <span>STREAK</span>
    <span>FAVORITE GAME</span>
  `;

    table.append(tableHeader);

    players.forEach((player) => {
        table.append(createPlayerRow(player));
    });

    section.append(heading, table);

    return section;
};