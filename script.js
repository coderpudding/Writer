window.onload = function () {
  const data = [
    {
      name: "kafka",
      word: "\u201cI am constantly trying to communicate something incommunicable, to explain something inexplicable, to tell about something I only feel in my bones and which can only be experienced in those bones.\u201d \u2014 Franz Kafka, Letters to Milena",
    },
    {
      name: "nietzsche",
      word: "\u201cHe who has a why to live can bear almost any how \u201d \u2014 Friedrich Nietzsche, Twilight of the Idols",
    },
    {
      name: "tolstoy",
      word: "\u201cAll happy families are alike; each unhappy family is unhappy in its in own way \u201d \u2014 Leo Tolstoy, Anna karenina",
    },
    {
      name: "dostoevsky",
      word: "\u201cPeople talk sometimes of bestial cruelty, but that\u2019s a great injustice and insult to the beasts; a beast can never be so cruel as a man, so artistically cruel \u201d \u2014 Fyodor Dostoevsky, The Brothers Karamazov",
    },
  ];
  const blocks = document.getElementsByClassName("block");
  const pop_mask = document.getElementsByClassName("pop_mask")[0];
  const pop_img = document.getElementsByClassName("pop_img")[0];
  const pop_content = document.getElementsByClassName("pop_content")[0];

  Array.from(blocks).forEach((block, i) => {
    block.onclick = function () {
      pop_mask_function(data[i].name, i);
    };
  });

  pop_mask.onclick = function () {
    pop_mask.className = "pop_mask";
    pop_mask.style.opacity = 0;
    pop_mask.style.zIndex = -1;
    setTimeout(function () {
      pop_img.className = "pop_img";
    }, 300);
  };

  function pop_mask_function(name, number) {
    pop_mask.style.opacity = 1;
    pop_mask.style.zIndex = 3;
    pop_mask.className += " pop_mask_animation";
    pop_img.className = "pop_img " + name + "_photo";
    pop_content.innerHTML = data[number].word;
  }
};
