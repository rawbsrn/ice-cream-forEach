$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    let inputs = [];
    const classes = ["person1", "person2", "animal", "exclamation","verb","noun" ];

    classes.forEach(function(element) {
      inputs.push($("input#" + element).val());
    });

    // inputs.push($("input#person1").val());
    // inputs.push($("input#person2").val());
    // inputs.push($("input#animal").val());
    // inputs.push($("input#exclamation").val());
    // inputs.push($("input#verb").val());
    // inputs.push($("input#noun").val());

    inputs.forEach(function(input, index) {
      $("." + classes[index]).text(input);
    });
    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);

    $("#story").show();
  });
});


// $(document).ready(function() {

//   const iceCreams = ["Vanilla", "Chocolate", "Strawberry", "Pistachio", "Mint Chocolate Chip", "Rocky Road"]

//   iceCreams.forEach(function(iceCream) {
//     $("#flavors").append("<li>" + iceCream + "</li>");
//   });

// });