import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

// Internal Dependencies
import IconSearch from '../Icons/IconSearch';
import Searchbar from '../Searchbar/Searchbar';

const styles = {
    root: {
        flexGrow: 1,
    },
};

const AppBarStyles = {
}

function SimpleAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar style={AppBarStyles} position="fixed" color="primary">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        NBATube
                    </Typography>
                    <Searchbar />
                    <IconSearch />
                </Toolbar>
            </AppBar>
        </div>
    );
}

SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);