/* eslint-disable no-script-url */
import React from "react";
import MuiTable from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import RcTable from 'rc-table';
import Paper from "@material-ui/core/Paper";

const components = {
  table: MuiTable,
  header: {
    wrapper: TableHead,
    row: TableRow,
    cell: TableCell,
  },
  body: {
    wrapper: TableBody,
    row: TableRow,
    cell: TableCell,
  },
}

function Table(props) {
  return  <Paper>
    <RcTable components={components} {...props} />
  </Paper>
}

export default Table;
