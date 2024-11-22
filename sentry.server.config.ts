// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://838f7ccba7033aadd02d33b578006469@o4508267365400576.ingest.de.sentry.io/4508267370250320",
  tracesSampleRate:1,
  debug: false,
});
