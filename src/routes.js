import MainLayout from './layouts/Main';
import ModelLayout from './layouts/Model';

const routes = (schema) => [

  {
    path: "/:modelName",
    element:  <ModelLayout  />,
  },

  {
    path: "/",
    element: <MainLayout schema={schema} />,
  },
];

export default routes;
