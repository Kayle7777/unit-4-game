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

// I had a fake constructor function() that would run when new Button was done,
// But a friend told me the proper syntax for a REAL constructor.


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
