// External Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ArticleIcon from 'material-ui-icons/Librarybooks';
import DocsIcon from 'material-ui-icons/Chromereadermode';
import ErrorIcon from 'material-ui-icons/Error';
import HomeIcon from 'material-ui-icons/Home';
import QuestionIcon from 'material-ui-icons/Questionanswer';
import TipsIcon from 'material-ui-icons/Lightbulboutline';
import VideoIcon from 'material-ui-icons/Ondemandvideo';

const listStyles = {
    textDecoration: 'none'
}

const anchorStyles = {
    textDecoration: 'none'
}

export const internalListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <Link style={listStyles} to='/'>
                <ListItemText primary="Home" />
            </Link>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <VideoIcon />
            </ListItemIcon>
            <Link style={listStyles} to='/videos'>
                <ListItemText primary="Videos" />
            </Link>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ArticleIcon />
            </ListItemIcon>
            <Link style={listStyles} to='/articles'>
                <ListItemText primary="Articles" />
            </Link>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <TipsIcon />
            </ListItemIcon>
            <Link style={listStyles} to='/tips'>
                <ListItemText primary="Tips" />
            </Link>
        </ListItem>
    </div>
);

export const externalListItems = (
    <div>
        <ListItem button href="https://material-ui-next.com/">
            <ListItemIcon>
                <DocsIcon />
            </ListItemIcon>
            <a style={anchorStyles} className="anchorStyles" href="https://material-ui-next.com/" target="_blank">Docs</a>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ErrorIcon />
            </ListItemIcon>
            <a style={anchorStyles} className="anchorStyles" href="https://github.com/mui-org/material-ui/issues" target="_blank">Issues</a>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <QuestionIcon />
            </ListItemIcon>
            <a style={anchorStyles} className="anchorStyles" href="https://stackoverflow.com/questions/tagged/material-ui" target="_blank">Questions</a>
        </ListItem>
    </div>
)
