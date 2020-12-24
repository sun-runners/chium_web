// Third Party
import * as Sentry from '@sentry/browser'
import { Integrations } from '@sentry/tracing'

// Vue
import Vue from 'vue'

// Main Section

// Sentry
Sentry.init({
  Vue,
  dsn: 'https://86ff41d674814cce912f9e981f31bd87@o494366.ingest.sentry.io/5565367',
  autoSessionTracking: true,
  integrations: [
    new Integrations.BrowserTracing()
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0
})
