
const app = Vue.createApp({
  data() {
    return {
      taskName: "",
    };
  },

  methods: {
    addCard() {
       console.log(this.taskName);

      if (this.taskName.trim() === "") {
        alert("The task name must not be empty!");
      } else {
        const template = document.getElementById("checkbox-template");

        const newCard = template.content.cloneNode(true);
        // TODO: add UUID later

        const taskDescriptionElement =
          newCard.querySelector(".task-description");


        if (this.taskName.toLowerCase().includes("@now")) {
          taskDescriptionElement.textContent = this.taskName
            .replace("@now", "")
            .trim();
          document.getElementById("now-column").appendChild(newCard);
        } else if (this.taskName.toLowerCase().includes("@later")) {
          taskDescriptionElement.textContent = this.taskName
            .replace("@later", "")
            .trim();
          document.getElementById("later-column").appendChild(newCard);
        } else {
          taskDescriptionElement.textContent = this.taskName;
          document.getElementById("unscheduled-column").appendChild(newCard);
        }
      }
      this.taskName = "";
    },

    // deleteCard(cardNode) {

    //TODO: complete this later
    // }
  },
});
app.mount("#app");
