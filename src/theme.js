//needs to be set up properly to access colors globally

// External Dependencies
import { createMuiTheme } from 'material-ui/styles';
import lightblue from 'material-ui/colors/lightblue';
import grey from 'material-ui/colors/grey';

// Local Variables
const lightblue500 = lightblue[500]; // #03A9F4
const grey200 = grey[200]; // #EEEEEE

const theme = createMuiTheme({
    palette: {
        primary: {
            lightblue500,
        },
        secondary: {
            grey200,
        },
    },
});