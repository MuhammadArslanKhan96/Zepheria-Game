import App from './app';
import Game from './game';

import './lib/sentry';
import '../scss/main.scss';

// Import the Leaderboards class from the 'menu' folder
import Leaderboards from './menu/leaderboards';
import Leaderboards2 from './menu/leaderboards-footer';

/**
 * The entry point for the game. Create an instance of the game
 * and pass a new instance of the app onto it.
 */

const app = new App();
const game = new Game(app);

// Initialize the Leaderboards class
const leaderboards = new Leaderboards(app);
const leaderboards2 = new Leaderboards2(app)

// Define the 'leaderboards' property on the global window object
if (typeof window !== 'undefined') {
    (window as any).leaderboards = leaderboards;
    (window as any).leaderboards2 = leaderboards2
}
