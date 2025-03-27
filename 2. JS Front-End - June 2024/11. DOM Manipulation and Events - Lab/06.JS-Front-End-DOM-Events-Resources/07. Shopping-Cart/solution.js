function solve() {
  const resultTextAreaElement = document.querySelector('textarea[disabled]');
  const checkoutButtonElement = document.querySelector('button.checkout');

  const productCatalogElement = document.querySelector('.shopping-cart');

  let products = [];

  productCatalogElement.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') {
      //target -> най вътрешния елемент, който е натиснат "event delegation"
      return;
    }

    if (e.target.textContent.trim() !== 'Add') {
      return;
    }

    //  const productElement = e.target.parentElement.parentElement;
    const productElement = e.target.closest('.product'); //closest -> връща първия елемент РОДИТЕЛ нагоре по DOM дървото

    const name = productElement.querySelector('.product-title').textContent;
    const price = Number(
      productElement.querySelector('.product-line-price').textContent
    );

    resultTextAreaElement.value += `Added ${name} for ${price.toFixed(
      2
    )} to the cart.\n`;

    products.push({
      name,
      price,
    });
  });

  checkoutButtonElement.addEventListener('click', (e) => {
    const totalPrice = products.reduce(
      (price, product) => price + product.price,
      0
    );

    const productList = [...new Set(products.map((product) => product.name))];

    resultTextAreaElement.value += `You bought ${productList.join(
      ', '
    )} for ${totalPrice.toFixed(2)}.`;

    document
      .querySelectorAll('button')
      .forEach((ell) => ell.setAttribute('disabled', 'disabled'));
  });
}
