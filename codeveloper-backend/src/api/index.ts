import RouterAbstract from '../router-abstract'

class Api extends RouterAbstract {
  
  private static instance = new Api();
  
  constructor() {
    if (!!Api.instance) return Api.instance;
    super();
    this.setRoutes();
  }
  
  private setRoutes(): void {
    // this.router.use('/');
  }
  
}

export default new Api;
