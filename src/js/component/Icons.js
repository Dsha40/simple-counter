import { fontawesome } from "@fortawesome/fontawesome";

/**
 * 2) Then you have to import every icon that you will use
 */
import { faUserClock } from "@fortawesome/fontawesome-free-solid/faUserClock";

/**
 * 3) Tell font-awesome that you want to replace your icons with SVGs (recomended for performance)
 */
fontawesome.config = {
	autoReplaceSvg: "nest"
};

/**
 * 4) Add the icons into the font-awesome library
 */
fontawesome.library.add(faUserClock);
