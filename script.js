//JSON notes: Use Isabel's as a template for everything that should be there. If someone doesn't have something, leave it out of the JSON object
// ^ If they're missing the image then put portfolioImg in the JSON object and leave it blank (this most likely won't be an issue I just don't have all the images rn)
// ^ Gotta figure out if it's possible to add html tags in json data :) (look at Sergio's joke)

//Oh my god fix text- make text responsive or the fucking cards need to STACK PLEASE-
// ^ Use @media. Anything smaller than like- 1000px make the cards 100vw

const vue_app_2023 = Vue.createApp({
    created() {
      fetch("JSON/2023.json")
        .then((response) => response.json())
        .then((json) => {
          this.First = json;
        });
    },
    data() {
      return {
        First: [],
        title: "Class of 2023",
      };
    }
  });
  
  vue_app_2023.mount("#vue_app_2023");
  