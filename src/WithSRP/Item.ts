export default class Item {
  
  private description: string;
  private value: number;

  constructor(){
    this.description = '';
    this.value = 0;
  }

  setDescription(description: string){
    this.description = description;
  }

  setValue(value: number){
    this.value = value;
  }

  getDescription(): string{
    return this.description;
  }

  getValue(): number{
    return this.value;
  }

  validateItem(): boolean{
    if(!this.description){
      return false
    }

    if(this.value<=0){
      return false
    }

    return true;
  }
} 