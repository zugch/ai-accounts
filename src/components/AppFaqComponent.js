import React from 'react';
import {Link, useParams,} from 'react-router-dom';
import {Typography, List, ListItem, ListItemText, Avatar, Button} from '@mui/material';

import appData from '../data/appData.json';

function AppFaqComponent({  }) {
    const { uid } = useParams();
    const selectedApp = appData.apps.find(app => app.uid === uid);

    if (!selectedApp) {
        return <div>App nicht gefunden.</div>;
    }

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                {selectedApp.appName}
            </Typography>
            <Avatar alt={`${selectedApp.appName} Icon`} src={selectedApp.iconLink} sx={{ width: 100, height: 100, marginBottom: 2 }} />

            <List>
                {selectedApp.faqs.map((faq, index) => (
                    <ListItem key={index}>
                        <ListItemText
                            primary={<Typography variant="h6">{faq.question}</Typography>}
                            secondary={faq.answer}
                        />
                    </ListItem>
                ))}
            </List>

            <Button variant="outlined" component={Link} to="/" style={{ marginTop: 20 }}>
                Zurück zur App-Liste
            </Button>
        </div>
    );
}

export default AppFaqComponent;