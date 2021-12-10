let quantity = Array.from(document.getElementsByClassName("quantity"));
let price = Array.from(document.getElementsByClassName("price"));
let newPrice = Array.from(document.getElementsByClassName("newPrice"));
let shop = Array.from(document.getElementsByClassName("shop"));

///button
let incBtn = Array.from(document.getElementsByClassName("increment"));
let decBtn = Array.from(document.getElementsByClassName("decrement"));

/////shop items price
for (let i = 0; i < quantity.length; i++) {
  incBtn[i].addEventListener("click", function () {
    quantity[i].innerHTML++;
    newPrice[i].innerHTML = quantity[i].innerHTML * price[i].innerHTML;
    updateTotal();

  });
}
for (let i = 0; i < quantity.length; i++) {
  decBtn[i].addEventListener("click", function () {
    if (quantity[i].innerHTML > 0) {
      quantity[i].innerHTML--;
      newPrice[i].innerHTML = quantity[i].innerHTML * price[i].innerHTML;
      updateTotal();

    }
  });
}
////////////Remove Section

let removeAll = document.getElementById("removeAll");

removeAll.addEventListener("click", function () {
  
let all = document.getElementById("shoprows")
   all.remove()
   updateTotal();
    })

    let removeItem = Array.from(document.getElementsByClassName("remove"));
for (let i = 0; i < removeItem.length; i++) {
    removeItem[i].addEventListener("click", () => {
        // var buttonClicked = event.target
        // buttonClicked.parentElement.remove();
        shop[i].remove();
        updateTotal();

      });
  }

////////////Remove Section
  function updateTotal() {
    let price = Array.from(document.getElementsByClassName("price"));
    let quantity = Array.from(document.getElementsByClassName("quantity"));
  let total=0;
 
    for (let i = 0; i < quantity.length; i++) {
      total +=   Number(quantity[i].innerText) * Number(price[i].innerText) ;
    }
  document.getElementById("total").innerHTML = ` ${total} DT`;
  }

  function heart(x) {
    if(x.style.color === 'black') {
        x.style.color = 'white';
      } else {
        x.style.color = 'black'
      }
  }
  /////add to cart

  let addTocartButtons = document.getElementsByClassName('heart');

  for(let i=0;i<addTocartButtons.length;i++){
      addTocartButtons[i].addEventListener("click",()=>{
   
        let cartRow = document.createElement('div')
        let gallery = document.getElementById("gallery")
        let image = document.getElementsByClassName("image")[i].src
        let name = document.getElementsByClassName("type")[i]
        let description = document.getElementsByClassName("description")[i]
        // let cartRowContents = image
        // cartRow.setAttribute("src","/public/mouse.jpg")

          

        cartRow.innerHTML = `<div class="extra">
        <div>
            <div><img src=${image} />  </div>
            <h4>${name.innerHTML}</h4>
            <p>${description.innerHTML}</p>
        </div>
    <button type="button" class="remove1 remove-extra">x</button>
 </div>`
 gallery.append(cartRow); 

    let removeItem = Array.from(document.getElementsByClassName("remove1"));
for (let i = 0; i < removeItem.length; i++) {
    removeItem[i].addEventListener("click", function (event) {
      var buttonClicked = event.target
      buttonClicked.parentElement.remove();

 
    });
  }
      
  
      })
  }

  


  
