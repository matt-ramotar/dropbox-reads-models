import { Box, Grid } from "@material-ui/core";
import SchemaPage from '../../pages/Schema';
import { Schema } from "../../types";
import styles from "./Main.module.scss";

interface Props {
  schema: Schema
}

export default function Main(props: Props): JSX.Element {

  return (
    <Grid className={styles.root}>
      <Box className={styles.container}>
        <Box className={styles.main}>
          <SchemaPage schema={props.schema} />
        </Box>
      </Box>
    </Grid>
  );
}
