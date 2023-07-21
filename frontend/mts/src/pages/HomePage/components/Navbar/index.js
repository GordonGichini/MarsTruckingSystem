import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { Box, colors } from '@mui/material';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';


export default function Navbar() {
  return (
    <Box sx={{display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    width:"100%"
    }} >
      <Box >
      <ButtonGroup variant="text" aria-label="medium outlined primary button group" 
      sx={{width:"100%",
    }}
      >
          <Link to="/" style={{textDecoration:"none",

          }}>
          <Button  >Home</Button>         
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link to="/" style={{textDecoration:"none"}}>
          <Button >MTS</Button>         
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link to="/" style={{textDecoration:"none"}}>
          <Button >ELD</Button>         
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link to="/" style={{textDecoration:"none"}}>
          <Button >Our Story</Button>         
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link to="/" style={{textDecoration:"none"}}>
          <Button >Blog</Button>         
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link to="/" style={{textDecoration:"none"}}>
          <Button >Help</Button>         
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link to="/" style={{textDecoration:"none"}}>
          <Button >Login</Button>         
          </Link>
    </ButtonGroup>
    </Box>
    <Box>
<ButtonGroup variant="text" aria-label="medium outlined primary button group" 
      sx={{width:"100%",
      }}
      >
    
</ButtonGroup>
    </Box>

    </Box>
  );
}