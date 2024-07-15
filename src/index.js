const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');

const startServer = () => {
      const app = express();
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: false }));

      const AppRouter = require('./routes/index');
      app.use('/api', AppRouter);

      app.listen(PORT, async () => {
            console.log(`App has Started on Port no ${PORT}`)
      })

}

startServer()
