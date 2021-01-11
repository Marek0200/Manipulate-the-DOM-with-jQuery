let names = ["Marta", "Beata", "Veronika", "Marek"];

names.forEach(element => {$("ul").append(element + " ")
    
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

  $("ul").after("<p>This block was added using JavaScript's jQuery library. How awesome!</p>")

  $("ul").after("<h2>Added with javascript</h2>")

