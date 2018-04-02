// External Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { internalListItems, externalListItems } from './tileData';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';


// Internal Dependencies
import IconSearch from '../Icons/IconSearch';
import SearchBar from '../SearchBar/SearchBar';

const drawerStyles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

const appbarStyles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class SideNav extends Component {
    state = {
        left: false
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>{internalListItems}</List>
                <Divider />
                <List>{externalListItems}</List>
            </div>
        );

        const fullList = (
            <div className={classes.fullList}>
                <List>{internalListItems}</List>
                <Divider />
                <List>{externalListItems}</List>
            </div>
        );

        return (
            <div>
                <AppBar style={appbarStyles} position="fixed" color="primary">
                    <Toolbar>
                        <IconButton onClick={this.toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit">
                            MuiTube
                    </Typography>
                        <SearchBar />
                        <IconSearch />
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

SideNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(drawerStyles)(SideNav);