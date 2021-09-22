import React from 'react'
import { Paper, Card, Typography, makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#388e3c',
        borderRadius:'10px',
    },
    pageHeader:{
        padding:theme.spacing(2),
        display:'flex',
        marginBottom:theme.spacing(2)
    },
    pageIcon:{
        display:'inline-block',
        padding:theme.spacing(2),
        color:'#388e3c'
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity:'0.8'
        },
        color:'#E8E8E8',
        // fontFamily: 'Nunito',
        // fontWeight:'400',
    }
}))

export default function PageHeader(props) {

    const classes = useStyles();
    const {title, subTitle, icon } = props;
    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {icon}
                </Card>
                <div className={classes.pageTitle}>
                    <Typography
                        variant="h6"
                        component="div">
                        {title}</Typography>
                    <Typography
                        variant="subtitle2"
                        component="div">
                        {subTitle}</Typography>
                </div>
            </div>
        </Paper>
    )
}
