<script>
import TaskComponent from "./TaskComponent.vue";

export default {
  components: {TaskComponent},

  props: {
    listName: String
  },
  data(){
    return {
      tasks:[]
    }
  },

  methods: {
    addTask(task){{
    this.tasks.push(task);}
    },

    deleteTask(task){
      this.tasks.filter(task => task.id !== task.id);
    },

    deleteList(){
      this.$emit('delete-list', this.listName);
    }
  }
}
</script>

<template>
    <div>
      <div class="border rounded-md border-gray-400">
        <div class="text-center m-2">{{listName}}</div>
      </div>
      <task v-for="task in tasks"
          :task-name="task.name"
            :key="task.id"
            :class="task.taskIsCompleted ? 'grayscale' : '' "
            @add-task="addTask"
      ></task>
    </div>
</template>

<style scoped>

</style>