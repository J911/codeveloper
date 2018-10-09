import RouterAbstract from '../router-abstract'
import AuthRouter from './auth-router'

class Router extends RouterAbstract {
  
  private static instance = new Router();
  
  constructor() {
    if (!!Router.instance) return Router.instance;
    super();
    this.setRoutes();
  }
  
  private setRoutes(): void {
    this.router.use('/auth', AuthRouter.route);
  }
  
}

export default new Router;
