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

// I hadn't even thought of using Python-like Classes until I read about them on mozilla docs, because I assumed JS couldn't do it.
// This looks very familiar to some of my old Python3 stuff.

// Quoted from caniuse.com -- "ES6 classes are syntactical sugar to provide a much simpler and clearer syntax to create objects and deal with inheritance."


class Button {
  constructor () {
      this.randNumber = Math.floor(Math.random() * 12) + 1;
  }
}

let buttons = $.map($("#buttons").children(), (element) => {
  let button = new Button(element);
  console.log(button)
  $(element).on('click', () => {
    console.log(button.randNumber);
  })
})
