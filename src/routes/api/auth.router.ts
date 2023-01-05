import { Router } from "express";

import { login } from "../../modules/auth/auth.controller";

export const routerAuth = Router()


routerAuth.post( "/login", login )

