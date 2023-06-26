import React, { useState } from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from '@material-ui/core'

import {
  AccountCircle,
  MenuIcon,
} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  userName: {
    marginLeft: 6,
  },
  divider: {
    margin: '8px 0'
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorUserMenu, setAnchorUserMenu] = useState(false)

  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <>
      <AppBar position="static" elevation={3}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Anunx
            </Typography>
            <Link href="/user/publish">
              <Button variant="outlined" color="inherit">Advertise & sell</Button>
            </Link>
            <IconButton color="secondary" onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
              {
                true === false
                  ? <Avatar src="" />
                  : <AccountCircle />
              }
              <Typography variant="subtitle2" color="secondary" className={classes.userName}>
                Melory Ayala
              </Typography>
            </IconButton>
            <Menu
              open={openUserMenu}
              anchorEl={anchorUserMenu}
              onClose={() => setAnchorUserMenu(null)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Link href="/user/dashboard">
                <MenuItem>My advertisements</MenuItem>
              </Link>
              <Link href="/user/publish">
                <MenuItem>Publish advertisement</MenuItem>
              </Link>
              <Divider className={classes.divider} />
              <MenuItem>Log out</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar >
    </>
  );
}
