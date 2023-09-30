import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';


import appData from '../data/appData.json';

function AppList({  }) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {appData.apps.map(app => (
                <Card key={app.uid} style={{ width: 250 }}>
                    <CardActionArea component={Link} to={`/app/${app.uid}`}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                {app.appName}
                            </Typography>
                            <img src={app.iconLink} alt={`${app.appName} Icon`} style={{ width: '100%', height: 'auto' }} />
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </div>
    );
}

export default AppList;