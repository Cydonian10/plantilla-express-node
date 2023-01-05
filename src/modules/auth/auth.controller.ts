import { Request, Response } from "express";

export function login( req: Request, res: Response ) {

  res.status( 200 ).json( {
    message: "login app"
  } )
}

export function register( req: Request, res: Response ) {

  res.status( 200 ).json( {
    message: "register app"
  } )
}

