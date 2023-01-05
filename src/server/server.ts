import express, { Application } from "express";
import http from 'http'
import { Server } from 'socket.io'
import path from 'path'
import { Sockets } from "../socket/sockets";
import { routerApi } from '../routes/index';

export class AppServer {

  private app: Application
  private port: string
  private httpServer: http.Server
  private io: Server
  private sockets: Sockets


  constructor() {
    this.app = express()
    this.port = '8080'

    this.httpServer = http.createServer( this.app )

    this.io = new Server( this.httpServer )

    this.sockets = new Sockets( this.io )
  }


  private middlewares() {

    /**
     * Guardar archivos estaticos
     */
    this.app.use( "/app", express.static( path.join( __dirname, "../public" ) ) )


    /**
     * Rutas de mi apliacacion
     */
    routerApi( this.app )

  }


  /**
   * Ejecutar el servidor
   */
  public execute() {

    this.middlewares()

    this.httpServer.listen( this.port, () => {
      console.log( "Server corriendo en puerto : 8080" );
    } )
  }

}