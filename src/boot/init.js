if (process.env.DEV) { console.log('[DEV] Code runs in development mode') }
if (process.env.PROD) { console.log('[PROD] Code runs in development mode') }
if (process.env.CLIENT) { console.log('[CLIENT] Code runs on client (not on server)') }
if (process.env.SERVER) { console.log('[SERVER] Code runs on client (not on server)') }
if (process.env.MODE) { console.log('[MODE] Code runs on server (not on client)') }
