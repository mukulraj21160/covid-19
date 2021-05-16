import React, { useEffect, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import StateTable from "./StateTable";
// import Card from "./Card";

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
    fontSize: "23px",
    fontWeight: "bold",
    margin: "20px 20px",
    [theme.breakpoints.up("md")]: {
      fontSize: "42px",
      marginTop: "20px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "42px",
      marginTop: "20px",
    },
  },
}));

const Covid19Tracker = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise);
      setData(actualData.statewise);
      setTotal(actualData.statewise[0]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.heading}>COVID-19:INDIA</Typography>
      {/* <Card total={total} /> */}
      <StateTable data={data} total={total} />
    </div>
  );
};

export default Covid19Tracker;
