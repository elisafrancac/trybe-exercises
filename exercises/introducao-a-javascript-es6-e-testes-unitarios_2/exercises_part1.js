const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const orderPerson = `${order.name}, Telefone: ${order.phoneNumber}`;
    const orderAdress = `R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;
    const phrase = `Olá ${deliveryPerson}, entrega para: ${orderPerson}, ${orderAdress}. `;
    return phrase;
  }
  
  console.log(customerInfo(order));
  
  const orderModifier = (order) => {
      order.name = 'Luiz Silva';
      order.payment.total = 50;
      const orderName = order.name;
      const coke = order.order.drinks.coke.type;
      const total = Object.values(order.payment);

      return `Olá ${orderName}, o total do seu pedido de ${Object.keys(order.order.pizza)}, e ${coke} é ${total},00.`;
        
}
  console.log(orderModifier(order));
  