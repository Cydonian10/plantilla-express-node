import { Server, Socket } from "socket.io";

export class Sockets {

  constructor( private io: Server ) {
    this.socketEvents()
  }

  socketEvents() {

    this.io.on( "connection", async ( socket: Socket ) => {

      socket.on( "message-to-server", ( data ) => {
        console.log( data );
        this.io.emit( "message-from-server", data )
      } )

    } )

  }

}