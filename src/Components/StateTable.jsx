import React from "react";
import {
  CircularProgress,
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Card, Typography } from "@material-ui/core";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const useStyles = makeStyles((theme) => ({
  arrow: {
    fontSize: "13px",
    [theme.breakpoints.up("md")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "16px",
    },
  },
  table_heading: {
    fontSize: "14px",
    fontWeight: "bold",
    [theme.breakpoints.up("md")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "14px",
    },
  },
  card: {
    width: "80%",
    textAlign: "center",
    border: "2px solid #35BDD0",
    margin: "5px 0px 5px 0px",
    [theme.breakpoints.up("md")]: {
      width: "70%",
      margin: "20px 0px 60px 0px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "70%",
      margin: "20px 0px 60px 0px",
    },
  },
  total_data: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  total: {
    fontSize: "13px",
    backgroundColor: "#35BDD0",
    color: "white",
    [theme.breakpoints.up("md")]: {
      fontSize: "22px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "22px",
    },
  },
  cases: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "13px",
    fontWeight: "bold",
  },
  total_cases: {
    fontSize: "13px",
    fontWeight: "bold",
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "20px",
    },
  },
  data: {
    padding: "5px",
  },
}));

export default function StateTable({ data, total }) {
  const classes = useStyles();
  const tableHeading = [
    "State",
    "Confirmed",
    "Active",
    "Recovered",
    "Deaths",
    "Last Updated",
  ];
  return (
    <Grid container item>
      <Grid item lg={4} md={4} xs={12} className={classes.total_data}>
        <Card className={classes.card}>
          <Typography className={classes.total}>Total Confirmed</Typography>
          <div className={classes.data}>
            <div className={classes.cases} style={{ color: "#004A92" }}>
              <ArrowUpwardIcon className={classes.arrow} />
              {total.deltaconfirmed}
            </div>
            <div className={classes.total_cases}>{total.confirmed}</div>
          </div>
        </Card>
      </Grid>
      <Grid item lg={4} md={4} xs={12} className={classes.total_data}>
        <Card className={classes.card}>
          <Typography className={classes.total}>Total Recovered</Typography>
          <div className={classes.data}>
            <div className={classes.cases} style={{ color: "#4CAF50" }}>
              <ArrowUpwardIcon className={classes.arrow} />
              {total.deltarecovered}
            </div>
            <div className={classes.total_cases}>{total.recovered}</div>
          </div>
        </Card>
      </Grid>
      <Grid item lg={4} md={4} xs={12} className={classes.total_data}>
        <Card className={classes.card}>
          <Typography className={classes.total}>Total Deaths</Typography>
          <div className={classes.data}>
            <div className={classes.cases} style={{ color: "#F44336" }}>
              <ArrowUpwardIcon className={classes.arrow} />
              {total.deltadeaths}
            </div>
            <div className={classes.total_cases}>{total.deaths}</div>
          </div>
        </Card>
      </Grid>
      <Grid item lg={1} md={1}></Grid>
      <Grid item lg={10} md={10} xs={12}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {tableHeading.map((item, index) => (
                  <TableCell className={classes.table_heading} key={index}>
                    {" "}
                    {item}{" "}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data ? (
                data.slice(1).map((item, index) => (
                  <TableRow key={index}>
                    <TableCell> {item.state} </TableCell>
                    <TableCell>
                      {item.deltaconfirmed > 0 ? (
                        <div
                          className={classes.cases}
                          style={{ color: "#004A92" }}
                        >
                          <ArrowUpwardIcon className={classes.arrow} />
                          {item.deltaconfirmed}
                        </div>
                      ) : null}
                      {item.confirmed}{" "}
                    </TableCell>
                    <TableCell>{item.active} </TableCell>
                    <TableCell>
                      {item.deltarecovered > 0 ? (
                        <div
                          className={classes.cases}
                          style={{ color: "#4CAF50" }}
                        >
                          <ArrowUpwardIcon className={classes.arrow} />
                          {item.deltarecovered}
                        </div>
                      ) : null}{" "}
                      {item.recovered}{" "}
                    </TableCell>
                    <TableCell>
                      {item.deltadeaths > 0 ? (
                        <div
                          className={classes.cases}
                          style={{ color: "#F44336" }}
                        >
                          <ArrowUpwardIcon className={classes.arrow} />
                          {item.deltadeaths}
                        </div>
                      ) : null}
                      {item.deaths}{" "}
                    </TableCell>
                    <TableCell> {item.lastupdatedtime} </TableCell>
                  </TableRow>
                ))
              ) : (
                <CircularProgress />
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item lg={1} md={1}></Grid>
    </Grid>
  );
}
