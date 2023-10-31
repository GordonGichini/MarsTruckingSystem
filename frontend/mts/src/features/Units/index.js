import React, { useEffect } from 'react';
import InNavBar from '../../common/Header/InNavBar';
import Footer from '../../pages/HomePage/components/Footer';
import UnitDetails from './UnitDetails';
import { Typography, makeStyles, ButtonGroup, Button, TextField, Table, Paper, TableHead, TableBody, TableCell, TableRow, TableContainer, Box } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { saveUnitDataAsync, selectUnit, fetchUnitsAsync } from '../../redux/slices/unitSlice';

export { UnitDetails }

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#212121',
    marginBottom: theme.spacing(2),
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(6),
  },
  title: {
    flexGrow: 1,
  },
  buttonGroupContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  searchInput: {
    width: '400px',
  },
  unitsVideoContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
}));

export default function Units() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { unit, loading, error, hasInteracted, units } = useSelector(selectUnit);

  // Fetch units from the database
  useEffect(() => {
    dispatch(fetchUnitsAsync());
  }, [dispatch]);

  // Simulate user interaction and dispatch the saveUnitDataAsync action
  const simulateUserInteraction = () => {
    const unitData = {
      // Provide data to save
    };
    dispatch(saveUnitDataAsync(unitData));
  };

  useEffect(() => {
    // Simulate user interaction when the component mounts
    simulateUserInteraction();
  }, []);

  return (
    <div>
      <InNavBar />
          <Typography variant="h6" className={classes.title}>
            Units
          </Typography>
          <Box className={classes.topBar}>
      <Box>
        <ButtonGroup variant="contained" aria-label="unit selection buttons">
          <Button className={classes.button}>Add unit</Button>
          <Button className={classes.button}>All</Button>
          <Button className={classes.button}>Active</Button>
          <Button className={classes.button}>Inactive</Button>
        </ButtonGroup>
      </Box>

      <Box>
        <TextField
          className={classes.searchInput}
          variant="outlined"
          placeholder="Search..."
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
      </Box>

      <Box className={classes.unitsVideoContainer}>
        {hasInteracted ? (
          // Render data table or content
          <div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Unit Number</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Make/Model</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>License Plate</TableCell>
                  <TableCell>Inspection Exp</TableCell>
                  <TableCell>Insurance Exp</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.isArray(units) && units.map((unit) => (
                  <TableRow key={unit.id}>
                    <TableCell component="th" scope="row">{unit.number}</TableCell>
                    <TableCell>{unit.unitType}</TableCell>
                    <TableCell>{unit.make}</TableCell>
                    <TableCell>{unit.status}</TableCell>
                    <TableCell>{unit.licensePlateNumber}</TableCell>
                    <TableCell>{unit.inspectionStickerExpiration}</TableCell>
                    <TableCell>{unit.insuranceExpiration}</TableCell>
                    <TableCell>{unit.actions}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
            {units && units.length > 0 ? (
              // Render the fetched units in the table
              <div>
                {units.map((unit) => (
                  // Render each unit in the data table
                  <div key={unit.id}>{unit.name}</div>
            ))}
          </div>
        ) : (
          // If no units
          <div> No units available</div>
        )}
        </div>
        ) : (
          // Render video
        <div>Unit Video </div>
        )}
      </Box>
    </div>
  );
}
