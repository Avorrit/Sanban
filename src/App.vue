<script>
export default {
  data() {
    return {
      taskLists:[
        {
          listName: "inbox",
          tasks: []
        },
        {
          listName: "now",
          tasks: []
        },
        {
          listName: "later",
          tasks: []
        },
      ],

      showListInput: false,
      newListName: '',
    };
  },

  methods: {


    // TODO: complete this later
    // deleteList(listName){
    //   this.taskLists.filter( list => list.listName !== listName );
    // },


    //     ------------------GEMINI CODE-------------------------

    toggleShowListInput (){
      this.showListInput = !this.showListInput;
      if (this.showListInput) {
        // Use $nextTick to wait for the input to be visible in the DOM
        this.$nextTick(() => {
          // Focus the input using the ref added in step 1
          if(this.$refs.newListNameInput) { // Check if ref exists
            this.$refs.newListNameInput.focus();
          }
        });
      } else {
        this.newListName = ''; // Clear input if cancelling
      }
    },

    //    -------------------------------------------------------


    //when user type nothing in the input or just whitespace and clicks outside
    handleBlurEvent(){
      if (!this.newListName.trim()) {
        this.newListName = '';
        this.showListInput = false;
      }
    },


    addList(){
      this.showListInput = true;
      const newList = {
        listName: this.newListName,
        tasks: [],
      }
      this.newListName = '';
      this.showListInput = false;
      this.taskLists.push(newList)
    },

  },
}
</script>

<template>
  <nav class="bg-[#091057] text-white px-8 py-3">
    <div class="flex items-center justify-between">
      <p class="font-semibold text-xl mona-sans-semi-bold">
        My Tasks
      </p>
    </div>
  </nav>
  <div
      class="container w-full m-auto mt-12"
  >
    <div class="container rounded-2xl">
      <div class="h-[400px] overflow-y-auto overflow-x-auto py-2 max-h-full">
      <div
          class="flex gap-4 w-max px-2 [&>div]:w-[280px] [&>div>div]:py-1 [&>div>div]:rounded-lg [&>div>div]:bg-[#EC8305]"
      >
        <template v-for="list in taskLists"
                  :key="list.listName">
          <task-list :list-name="list.listName"/>
        </template>
        <div class="flex flex-col gap-2">
          <button class="mona-sans-semi-bold rounded-md border-2 border-[#091057] text-[#091057] px-3 py-1 min-w-[280px]"
          @click="toggleShowListInput"
          >
            Add new list
          </button>

          <input
              v-show="showListInput"
              v-model="newListName"
              type="text"
              class="border border-[#091057] rounded-md px-2 py-1"
              placeholder="Enter list name"
              @keyup.enter="addList"
              @keyup.esc="toggleShowListInput"
              @blur="handleBlurEvent"
              ref="newListNameInput"
          />
      </div>
      </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>