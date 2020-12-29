import Item from "./Item";

export default class CartBuy{
  private itens: Item[];


  constructor(){
    this.itens = [];
  }

  public getItens(){
    return this.itens;
  }

  public setItem(item: Item): boolean{
    if(item.validateItem()){
      this.itens.push(item);
      return true;
    }
    
    return false;
  }

  public validateCart(){
    return this.itens.length > 0;
  }

}