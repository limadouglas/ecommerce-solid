export default class CartBuy{
  private items: any;
  private status;
  private totalValue;


  constructor(){
    this.items = [];
    this.status = 'open';
    this.totalValue = 0;
  }

  public showItens(){
    return this.items;
  }

  public addItem(description: string, value: number){
    if(this.validateItem(description, value)){
      this.items = [...this.items, {description, value}]
      this.totalValue += value;
      return true;
    }

    return false;
  }

  public showTotalValue(){
    return this.totalValue;
  }

  public showStatus(){
    return this.status;
  }

  public confirmOrder(){
    if(this.validateCart()){
      this.status = 'confirmed';
      this.sendEmailConfirmationOrder();
      return true;
    }
    return false;
  }

  public sendEmailConfirmationOrder(){
    return 'Send Email Confirmation Order';
  }

  public validateCart(){
    return this.items.length > 0;
  }

  validateItem(description: string, value:number): boolean{
    if(!description){
      return false
    }

    if(value<=0){
      return false
    }

    return true;
  }

}