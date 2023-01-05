import { Application } from 'express';
import { routerAuth } from './api/auth.router';

export function routerApi( app: Application ) {

  app.use( "/api", routerAuth )

}

// export function routerWeb( app: Application ) {

//   app.use( "/" )

// }