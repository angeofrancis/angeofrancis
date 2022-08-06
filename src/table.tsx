import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  Saturday: string,
  Monday: string,
  Tuesday: string,
  Wednesday: string,
  Thurusday: string,
) {
  return { name, Saturday, Monday, Tuesday, Wednesday, Thurusday };
}

const rows = [
  createData('7:00-9:00 AM', '', '', '', '', ''),
  createData('9:30-11:30 AM', '', '', '', '', ''),
  createData('12:00-2:00 PM', '', '', '', '', ''),
  createData('2:00-400 PM', '', '', '', '', ''),
  createData('4:00-6:00 PM', '', '', '', '', ''),
  createData('6:00-7:30 PM', '', '', '', '', ''),
];

export default function BasicTable(): JSX.Element {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell align="right">Saturday</TableCell>
            <TableCell align="right">Monday</TableCell>
            <TableCell align="right">Tuesday</TableCell>
            <TableCell align="right">Wednesday</TableCell>
            <TableCell align="right">Thurusday</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Saturday}</TableCell>
              <TableCell align="right">{row.Monday}</TableCell>
              <TableCell align="right">{row.Tuesday}</TableCell>
              <TableCell align="right">{row.Wednesday}</TableCell>
              <TableCell align="right">{row.Thurusday}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
