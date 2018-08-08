import app from './app';
import { configs } from './configs';

const port = configs.port;

app.listen(port, () => {
  console.log(`Express started on http://localhost: ${port}`);
});
