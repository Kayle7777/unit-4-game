// var buttons = $.map($("#buttons").children(), (x) => {
//   new Button(x);
//   $(x).on('click', () => {
//     console.log(x.randNumber);
//   })
// })
//
// function Button(btn) {
//   btn.randNumber = Math.floor(Math.random() * 12) + 1;
// }

// Friend told me to search for JS classes / similar to Python ones

// Quoted from caniuse.com -- "ES6 classes are syntactical sugar to provide a much simpler and clearer syntax to create objects and deal with inheritance."


class Button {
  constructor () {
      this.randNumber = Math.floor(Math.random() * 12) + 1;
  }
}

let buttons = $.map($("#buttons").children(), (element) => {
  let eachButton = new Button(element);
  console.log(eachButton);
  $(element).on('click', () => {
    console.log(eachButton.randNumber);
  })
})
