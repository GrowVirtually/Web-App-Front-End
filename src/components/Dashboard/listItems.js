import React from 'react';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import WarningIcon from '@material-ui/icons/Warning';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded';
import { makeStyles } from '@material-ui/core';

export const mainListItems = (
  <div>
    <Link href="/dashboard" style={{color:'#E8E8E8', textDecoration:'none'}} >
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon  style={{fill:'#E8E8E8'}}/>
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    </Link>

    <Link href="/orders" style={{color:'#E8E8E8', textDecoration:'none'}}>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon style={{fill:'#E8E8E8'}} />
      </ListItemIcon>
      <ListItemText primary="View Orders" />
    </ListItem>
    </Link>

    <Link href="/add" style={{color:'#E8E8E8', textDecoration:'none'}}>
    <ListItem button>
      <ListItemIcon>
        <PersonAddRoundedIcon style={{fill:'#E8E8E8'}}/>
      </ListItemIcon>
      <ListItemText primary="Add Admin" />
    </ListItem>
    </Link>

    <Link href="/reports" style={{color:'#E8E8E8', textDecoration:'none'}}>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon style={{fill:'#E8E8E8'}}/>
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    </Link>

    <Link href="/complains" style={{color:'#E8E8E8', textDecoration:'none'}}>
    <ListItem button>
      <ListItemIcon>
        <WarningIcon style={{fill:'#E8E8E8'}}/>
      </ListItemIcon>
      <ListItemText primary="Complains" />
    </ListItem>
    </Link>

    <Link href="/profile" style={{color:'#E8E8E8', textDecoration:'none'}}>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon style={{fill:'#E8E8E8'}}/>
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <PowerSettingsNewRoundedIcon style={{fill:'#E8E8E8'}}/>
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
    {/* <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem> */}
  </div>
);