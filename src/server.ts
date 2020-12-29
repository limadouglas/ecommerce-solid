import express from 'express';
import NoSRPCartBuy from './NoSRP/CartBuy';
import EmailService from './WithSRP/EmailService';
import Item from './WithSRP/Item';
import Order from './WithSRP/Order';

const app = express();

app.use(express.json());

app.get('/noSRP', (resquest, response) => {

  const cartBuy = new NoSRPCartBuy();

  console.log('No SRP');

  console.log('items: ', cartBuy.showItens());
  console.log('total value: ', cartBuy.showTotalValue());

  // cartBuy.addItem('item 1', 10)
  // cartBuy.addItem('item 2', 20)
  
  console.log('items: ', cartBuy.showItens());
  console.log('total value recalculate: ', cartBuy.showTotalValue());

  console.log('status: ', cartBuy.showStatus());

  if(cartBuy.confirmOrder()){
    console.log('confirmed with success');
  } else{
    console.log('error confirmation: cart empty');
  }

  console.log('status: ', cartBuy.showStatus());

  response.json({message: 'noSRP'});
})



app.get('/withSRP', (resquest, response) => {

  console.log('WITH SRP');

  const order = new Order();

  //------
  const item1 = new Item();
  const item2 = new Item();
  item1.setDescription('Porta Copo');
  item1.setValue(4.55);
  item2.setDescription('Lampada');
  item2.setValue(8.32);
  //-------

  console.log('Pedido Iniciado');
  console.log('Pre');
  console.log(order);

  //-------
  order.getCartBuy().setItem(item1);
  order.getCartBuy().setItem(item2);
  //-------

  //-------
  console.log('Pedido com Itens');
  console.log(order);
  console.log('Itens do carrinho');
  console.log(order.getCartBuy().getItens());
  //-------

  console.log('Valor do pedido')
  const totalOrder = order.getCartBuy().getItens().reduce((total, item) => total += item.getValue(), 0)
  console.log(totalOrder)

    //-------
    console.log('O carrinho está valido?')
    console.log(order.getCartBuy().validateCart())
    //-------
    console.log('Status do pedido');
    console.log(order.getStatus());

    console.log('Confirmar Pedido');
    console.log(order.confirm());

    console.log('Status do pedido');
    console.log(order.getStatus());

    console.log('E-mail');
    order.getStatus() === 'confirmed'
    ? console.log(EmailService.sendMail())
    : console.log('não enviado!');


  response.json({message: 'withSRP'});
})

app.listen(3333, () => {
  console.log('server started on port 3333')
})