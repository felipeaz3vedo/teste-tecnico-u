import 'reflect-metadata';
import 'dotenv/config';

import { app } from './app';

app.listen(process.env.PORT, () => {
  console.info(`Server running on port: ${process.env.PORT}`);
});
