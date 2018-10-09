import App from './app'
import * as env from './environment/environment-handler'

// @ts-ignore
const port = env.server.port;
const app = new App();

app.listen(port);