<script>
import CreateTaskComponent from "./components/CreateTaskComponent.vue";
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

    };
  },

  methods: {
    deleteList(listName){
      this.taskLists.filter( list => list.listName !== listName );
    },

    addList(name){
      const newList = {
        name: name,
        tasks: [],
      }
      this.taskLists.push(newList)
    },
    addTaskToTheList(task, listName){
      const list = this.taskLists.find(t=>t.listName === listName);
      list.tasks.push(task);
    }
  },
}
</script>

<template>
  <div
      class="container mx-auto p-4 mt-12 w-full bg-[rgb(248,249,250)] rounded-lg"
  >
    <div class="container mx-1 rounded-lg p-12 pb-10 bg-blue-200/65">
      <h1 class="text-center mb-12 bebas-neue">My Todolist</h1>
      <hr class="border border-gray-400/20 my-4" />

      <create-task @create-task="addTaskToTheList"></create-task>


      <div class="overflow-x-auto border-gray-400">
      <div
          class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 [&>div>div]:border [&>div>div]:rounded-md [&>div>div]:border-gray-400"
      >
        <template v-for="list in taskLists"
                  :key="list.listName">
          <task-list :list-name="list.listName"/>
        </template>
        <div class="flex justify-center items-center">
          <button class="rounded-md bg-blue-500 text-white px-3 py-1">
            Add new list
          </button>
        </div>
      </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>