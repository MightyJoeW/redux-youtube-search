import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import ArticleIcon from 'material-ui-icons/Librarybooks';
import DocsIcon from 'material-ui-icons/Chromereadermode';
import ErrorIcon from 'material-ui-icons/Error';
import HomeIcon from 'material-ui-icons/Home';
import QuestionIcon from 'material-ui-icons/Questionanswer';
import TipsIcon from 'material-ui-icons/Lightbulboutline';
import VideoIcon from 'material-ui-icons/Ondemandvideo';

export const internalListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <VideoIcon />
            </ListItemIcon>
            <ListItemText primary="Videos" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Articles" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <TipsIcon />
            </ListItemIcon>
            <ListItemText primary="Tips" />
        </ListItem>
    </div>
);

export const externalListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <DocsIcon />
            </ListItemIcon>
            <ListItemText primary="Docs" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ErrorIcon />
            </ListItemIcon>
            <ListItemText primary="Issues" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <QuestionIcon />
            </ListItemIcon>
            <ListItemText primary="Questions" />
        </ListItem>
    </div>
)
