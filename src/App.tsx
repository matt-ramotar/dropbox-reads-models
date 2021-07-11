import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { useRoutes } from "react-router";
import "./App.scss";
import getSchema from "./helpers/getSchema";
import fetchSpec from "./lib/fetchSpec";
import routes from "./routes.js";
import theme from "./theme";
import { Schema } from "./types";

interface Props {
  schema: Schema
}

function App(props: Props): JSX.Element | null {

  const routing = useRoutes(routes(props.schema));

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>{routing}</StylesProvider>
    </ThemeProvider>
  );
}

export default function AppHoc(): JSX.Element | null {
  const [schema, setSchema] = useState<Schema | null>(null)

  useEffect(() => {
    getSchemaAsync()

    async function getSchemaAsync() {
      const spec = await fetchSpec()
      setSchema(getSchema(spec.components))
    }
  }, [setSchema]);

  if (schema === null) return null;

  return <App schema={schema} />;
}
