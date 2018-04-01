import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { internalListItems, externalListItems } from './tileData';

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
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
                <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
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

export default withStyles(styles)(SideNav);