var buttons = $.map($("#buttons").children(), (x) => {
  $(x).on('click', () => {
    console.log(x.id);
  })
})
