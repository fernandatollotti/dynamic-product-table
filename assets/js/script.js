let btn = document.querySelector('.btn_save');
let input = document.getElementsByTagName('input');
let inputName = document.getElementById('name_product');
let inputValue = document.getElementById('value_product');
let product, index;

function cadProduct(name, value) {
  product = document.getElementById('tb_product').getElementsByTagName('tbody')[0];

  let qtyLine = product.rows.length;
  let line = product.insertRow(qtyLine);

  let cellOrder = line.insertCell(0);
  let cellCode = line.insertCell(1);
  let cellName = line.insertCell(2);
  let cellValue = line.insertCell(3);

  const numberRandom = Math.floor(Math.random() * 900000) + 100000;

  cellOrder.innerHTML = qtyLine;
  cellCode.innerHTML = numberRandom;
  cellName.innerHTML = name;
  cellValue.innerHTML = 'R$ ' + value;
}

btn.addEventListener('click', function(e) {
  e.preventDefault();

  if(name_product.value == '' || value_product.value == '') {
    let message = document.querySelector('.message_error');
    message.innerHTML = "Ops! Os dois campos são obrigatórios.";

    setTimeout(() => {
      message.innerHTML = ''
    }, 2000)
  } else {
    cadProduct(name_product.value, value_product.value);

    name_product.value = '';
    value_product.value = '';
  }
})