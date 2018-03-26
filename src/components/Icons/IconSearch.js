import React from 'react';
import PropTypes from 'prop-types';
import IconSearch from 'material-ui-icons/search';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    icon: {
        cursor: 'pointer',
        margin: theme.spacing.unit,
    },
});

function SvgMaterialIcons(props) {
    const { classes } = props;
    return (
        <div>
            <IconSearch className={classes.icon} />
        </div>
    );
}

SvgMaterialIcons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SvgMaterialIcons);