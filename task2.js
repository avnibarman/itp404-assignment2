function Book(title, quantity, price){
  this.title = title;
  this.quantity = quantity;    
  this.price = price;
}

Book.prototype.getSubtotal = function(){
  return this.price * this.quantity;
}

var oojsBook = new Book({ title: 'Object Oriented JavaScript', quantity: 2, price: 10 });
console.log(oojsBook.title); // Object Oriented JavaScript
console.log(oojsBook.quantity); // 2
console.log(oojsBook.price); // 10
console.log(oojsBook.getSubtotal()); // 20

function ShoppingCart(cart){
  this.cart = cart;
}

ShoppingCart.prototype.add = function(book){
  this.cart.push(book);
}


var book1 = new Book('Object Oriented JavaScript', 1, 10);
var book2 = new Book('JavaScript Web Applications', 2, 15);
var book3 = new Book('PHP Object Oriented Solutions', 1, 20);
var book4 = new Book('Head First Java', 5, 20);

var cart = new ShoppingCart([book1, book2]);
cart.add(book3);
cart.add(book4);
console.log(cart);

ShoppingCart.prototype.getTotal = function(){
  
  var total = this.cart.reduce(function(sum, item){
      sum = sum + item.getSubtotal();
    return sum;},0);
  
  return total;
}

var subtotal = cart.getTotal();
console.log(subtotal);