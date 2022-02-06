import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import AppHeader from "../../../../../Layout/AppHeader";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart, Bar, Cell
} from "recharts";



const data = [
  {
    original: "GAS DE COZINHA 13 KG",
    mean: 58.54978723404257,
    max: 85.0,
    min: 6.84,
    count: 94,
  },
  {
    original: "GAS GLP 13 KG",
    mean: 61.76632183908046,
    max: 156.66,
    min: 30.8,
    count: 87,
  },
  {
    original: "GAS GLP, ACONDICIONADO EM BOTIJAO RETORNAVEL DE 13 KG",
    mean: 69.12164705882353,
    max: 190.0,
    min: 33.9,
    count: 85,
  },
  {
    original: "GAS 13 KG",
    mean: 64.45500000000001,
    max: 104.0,
    min: 35.9,
    count: 70,
  },
  {
    original:
      "GAS DE COZINHA A GRANEL RESIDENCIAL  BOTIJAO PESANDO 13 KG  SEM VASILHAME-2409",
    mean: 51.53739130434783,
    max: 73.0,
    min: 35.63,
    count: 69,
  },
  {
    original: "BOTIJAO DE GAS 13 KG P13-4159",
    mean: 53.06666666666668,
    max: 60.0,
    min: 49.5,
    count: 60,
  },
  {
    original: "BOTIJAO DE GAS 13 KG",
    mean: 73.6856862745098,
    max: 218.0,
    min: 29.89,
    count: 51,
  },
  {
    original: "GAS LIQUEFEITO DE PETROLEO",
    mean: 61.56821428571429,
    max: 95.0,
    min: 39.9,
    count: 28,
  },
  {
    original: "GAS ACONDICIONADO EM BOTIJOES P-13",
    mean: 63.849999999999994,
    max: 88.0,
    min: 44.0,
    count: 26,
  },
  {
    original: "RECARGA DE GAS GLP 13 KG",
    mean: 65.49384615384616,
    max: 98.0,
    min: 38.9,
    count: 26,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(12, 4),
  },
  card: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid black",
    borderRadius: "5px",
    textAlign: "center",
  },
  icon: {
    padding: theme.spacing(2, 0),
  },
  title: {
    padding: theme.spacing(2),
  },
  featureList: {
    padding: theme.spacing(2),
  },
}));

const Features = () => {
  const classes = useStyles();

  return (
    <div>
      <AppHeader />
      <Container component="section" maxWidth="lg" className={classes.root}>
        <Grid container spacing={1} alignItems="stretch">
          <Grid item xs={12} sm={6}>
            <div className={classes.card}>
              <EmojiPeopleIcon
                color="primary"
                fontSize="large"
                className={classes.icon}
              />
              <Typography variant="h5" component="h3" className={classes.title}>
                Gas
              </Typography>
              <Typography className={classes.featureList}>
                <LineChart width={550} height={300} data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="original" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="min"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="max" stroke="#82ca9d" />
                </LineChart>{" "}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.card}>
              <FastfoodIcon
                color="primary"
                fontSize="large"
                className={classes.icon}
              />
              <Typography variant="h5" component="h3" className={classes.title}>
                Gas{" "}
              </Typography>
              <Typography className={classes.featureList}>
                <BarChart
                  width={550}
                  height={300}
                  data={data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="original" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="min" fill="#8884d8" />
                  <Bar dataKey="max" fill="#82ca9d" />
                </BarChart>{" "}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.card}>
              <LocationCityIcon
                color="primary"
                fontSize="large"
                className={classes.icon}
              />
              <Typography variant="h5" component="h3" className={classes.title}>
                Gas
              </Typography>
              <Typography className={classes.featureList}>
                <BarChart
                  width={550}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                  barSize={20}
                >
                  <XAxis
                    dataKey="original"
                    scale="point"
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar
                    dataKey="mean"
                    fill="#8884d8"
                    background={{ fill: "#eee" }}
                  />
                </BarChart>
              </Typography>
            </div>
          </Grid>
           <Grid item xs={12} sm={6}>
            <div className={classes.card}>
              <LocationCityIcon
                color="primary"
                fontSize="large"
                className={classes.icon}
              />
              <Typography variant="h5" component="h3" className={classes.title}>
                Gas
              </Typography>
              <Typography className={classes.featureList}>
                <BarChart
                  width={550}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                  barSize={20}
                >
                  <XAxis
                    dataKey="original"
                    scale="point"
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar
                    dataKey="count"
                    fill="#0000cc"
                    background={{ fill: "#eee" }}
                  />
                </BarChart>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Features;
