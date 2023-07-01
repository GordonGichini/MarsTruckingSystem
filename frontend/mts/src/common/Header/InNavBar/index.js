import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Box, colors } from '@mui/material';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';


export default function InNavBar() {
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
          <Button  >Dashboard</Button>         
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link to="/" style={{textDecoration:"none"}}>
          <Button >Load Planner</Button>         
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link to="/" style={{textDecoration:"none"}}>
          <Button >Trip</Button>         
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link to="/" style={{textDecoration:"none"}}>
          <Button >Loads</Button>         
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link to="/" style={{textDecoration:"none"}}>
          <Button >Invoice</Button>         
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link to="/" style={{textDecoration:"none"}}>
          <Button >Expenses</Button>         
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link to="/" style={{textDecoration:"none"}}>
          <Button >Reports</Button>         
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link to="/" style={{textDecoration:"none"}}>
          <Button >Settings & More</Button>         
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link to="/" style={{textDecoration:"none"}}>
          <Button >Switch ELD</Button>         
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link to="/" style={{textDecoration:"none"}}>
          <Button >Profile</Button>         
          </Link>
          <Divider orientation="vertical" flexItem />
    </ButtonGroup>
    </Box>
    <Box>
<ButtonGroup variant="text" aria-label="medium outlined primary button group" 
      sx={{width:"100%",
      }}
      >
        <Link to="/" style={{textDecoration:"none"}}>
          <Button >Profile</Button>         
          </Link>
          <Divider orientation="vertical" flexItem />
          <Divider orientation="vertical" flexItem />
          <Link to="/" style={{textDecoration:"none"}}>
          <Button >Support</Button>         
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link to="/" style={{textDecoration:"none"}}>
          <Button >Chat</Button>         
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link to="/" style={{textDecoration:"none"}}>
          <Button >Sign Out</Button>         
          </Link>
          <Divider orientation="vertical" flexItem />
</ButtonGroup>
    </Box>

    </Box>
  );
}