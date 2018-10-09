import {Request, Response} from 'express'
import RouterAbstract from '../router-abstract'
import Passport from '../passport'

class AuthRouter extends RouterAbstract {
  
  private static instance = new AuthRouter();
  
  constructor() {
    if (!!AuthRouter.instance) return AuthRouter.instance;
    super();
    this.setRoutes();
  }
  
  private setRoutes(): void {
    this.router.get('/github', Passport.authenticate('github'));
    this.router.get('/github/callback', Passport.authenticate('github', 
    { failureRedirect: '/login' }), this.redirectIDE);
  }
   
  private redirectIDE(req: Request, res: Response): void {
    return res.redirect('/');
  }

}

export default new AuthRouter;
