import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Model, Property } from "../../types";
import styles from "./Table.module.scss";

interface Props {
  name: string;
  model: Model;
}

export default function Table(props: Props): JSX.Element {
  return (
    <Grid container className={styles.root}>
      <Box style={{ margin: 20, padding: 10, backgroundColor: "#36393E"}}>
        <Box style={{backgroundColor: "#222323"}}>
      <Typography variant="h5" style={{color: "#ffffff"}}>{props.name}</Typography>

        </Box>


      {Object.entries(props.model.properties!).map(([key, value]: [string, Property]) => {
        return (

          <Box key={key} style={{display: "flex", flexDirection: "row"}}>

            <Typography style={{color: "#C8C8CB"}}>{`${key}: `}</Typography>
            <Typography style={{color: "#8B8B8C"}}>{value.type}</Typography>
          </Box>
        )
      })}
      </Box>
    </Grid>
  );
}
