import { app } from './app';

const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
  console.log(
    ' App is running at http://localhost:%d in %s mode',
    port,
    app.get('env'),
  );
  console.log(' Press CTRL-C to stop\n');
});