import loadable from "@loadable/component";
import { Box, Grid } from "@material-ui/core";
import { Model } from "../../types";
import styles from "./Model.module.scss";

interface Props {
  model: Model;
  pageName: string;
}

export default function ModelPage(props: Props): JSX.Element {
  const Page = loadable(() => import(`../../pages/${props.pageName}`));

  return (
    <Grid className={styles.root}>

      <Box className={styles.container}>

        <Box className={styles.main}>
          <Page model={props.model} />
        </Box>
      </Box>
    </Grid>
  );
}
