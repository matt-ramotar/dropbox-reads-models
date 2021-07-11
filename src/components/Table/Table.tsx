import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Model, Property } from "../../types";
import styles from "./Table.module.scss";

interface Props {
  name: string;
  model: Model;
}

export default function Table(props: Props): JSX.Element {

  const isEnum = Boolean(props.model.enum)
  const isGodObject = props.name.includes("God")

  if (isEnum) {
    return (
      <Grid container className={styles.enum}>
        <Box style={{ margin: 20, backgroundColor: "#36393E", width: "100%" }}>
          <Box style={{ backgroundColor: "#6E7888", width: "100%" }}>
            <Typography variant="h5" style={{ color: "#ffffff", fontWeight: "bold", textAlign: "center" }}>{props.name}</Typography>
          </Box>

          <Box style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: 5 }}>
            {props.model.enum!.map((type: string) => (<Box key={type}><Typography variant="caption" style={{ fontWeight: "bold", color: "#C8C8CB" }}>{type}</Typography></Box>))}
          </Box>
        </Box>
      </Grid>
    )
  }

  if (isGodObject) {
    return (
      <Grid container className={styles.root}>
        <Box style={{ margin: 20, backgroundColor: "#36393E", width: "100%" }}>
          <Box style={{ backgroundColor: "#805F68", width: "100%" }}>
            <Typography variant="h5" style={{ color: "#ffffff", fontWeight: "bold", textAlign: "center" }}>{props.name}</Typography>
          </Box>
          <Box style={{ padding: 5 }}>

            {Object.entries(props.model.properties!).map(([key, value]: [string, Property]) => {
              return (

                <Box key={key} style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>

                  <Typography style={{ color: "#C8C8CB", fontWeight: "bold", marginRight: 5 }}>{`${key}: `}</Typography>
                  <Typography style={{ color: "#8B8B8C" }} variant="caption">{value.type}</Typography>
                </Box>
              )
            })}
          </Box>
        </Box>
      </Grid>
    );
  }

  return (
    <Grid container className={styles.root}>
      <Box style={{ margin: 20, backgroundColor: "#36393E", width: "100%" }}>
        <Box style={{ backgroundColor: "#222323", width: "100%" }}>
          <Typography variant="h5" style={{ color: "#ffffff", fontWeight: "bold", textAlign: "center" }}>{props.name}</Typography>
        </Box>

        <Box style={{ padding: 5 }}>

          {Object.entries(props.model.properties!).map(([key, value]: [string, Property]) => {
            return (

              <Box key={key} style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>

                <Typography style={{ color: "#C8C8CB", fontWeight: "bold", marginRight: 5 }}>{`${key}: `}</Typography>
                <Typography style={{ color: "#8B8B8C" }} variant="caption">{value.type}</Typography>
              </Box>
            )
          })}
        </Box>
      </Box>
    </Grid>
  );
}
