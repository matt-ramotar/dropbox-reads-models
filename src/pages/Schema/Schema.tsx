import { Box, Grid } from "@material-ui/core";
import Table from "../../components/Table";
import logo from "../../images/logo.png";
import { Model, Schema } from "../../types";
import styles from "./schema.module.scss";

interface Props {
  schema: Schema
}

export default function SchemaPage(props: Props): JSX.Element {
  const models = Object.entries(props.schema).filter(([key, value]: [string, any]) => {
    return !(key.includes("Input") || key.includes("Ref"))
  })

  return (
    <Grid className={styles.root}>
      <img src={logo} alt="Dropbox Reads logo" className={styles.logo} />

      <Box style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
        {models.sort().map(([key, value]: [string, Model]) => (
          <Box key={key}>
            <Table name={key} model={value} />
          </Box>
        ))}
      </Box>
    </Grid>
  );
}
