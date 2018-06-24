// Was overcomplicated it.

let buttons = $.map($("#buttons").children(), (element) => {
  element.randNumber = this.randNumber = Math.floor(Math.random() * 12) + 1;
  $(element).on('click', () => {
    console.log(element.randNumber);
  })
})
