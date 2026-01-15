import Express = require("express");
import router from "./routes";
const app = Express();

app.use(Express.json());
app.use(router);

app.listen(3333, () => {
  console.log("Server is running on port 3333");
});