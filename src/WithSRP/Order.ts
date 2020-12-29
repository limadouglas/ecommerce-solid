import CartBuy from "../WithSRP/CartBuy";

export default class Order {
  private status: string;
  private cartBuy: CartBuy;
  private totalOrder: number;

  constructor(){
    this.status = 'open';
    this.cartBuy = new CartBuy();
    this.totalOrder = 0;
  }

  public getCartBuy(): CartBuy{
    return this.cartBuy;
  }

  public getStatus(){
    return this.status;
  }

  public setStatus(status: string){
    return this.status = status;
  }

  public getTotalOrder(){
    return this.totalOrder;
  }

  public setTotalOrder(value: number){
    return this.totalOrder = value;
  }

  public confirm(){
    if(this.cartBuy.validateCart()){
      this.setStatus('confirmed');
      return true;
    }
    return false;
  }

} 