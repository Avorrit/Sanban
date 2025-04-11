<script>
import TaskComponent from "./TaskComponent.vue";
import {v4 as uuidv4} from "uuid";

export default {
  components: {TaskComponent},

  props: {
    listName: String
  },
  data(){
    return {
      tasks:[],
      showNewTaskInput: false,
      newTaskName: '',
    }
  },

  methods: {
    addTask(){
      const trimmedName = this.newTaskName.trim();
      if (!trimmedName) { // Don't add if empty
        this.showNewTaskInput = false;
        this.newTaskName = '';
        return;
      }
      const newTask = {
        id: uuidv4(),
        name: trimmedName,
        isCompleted: false,
      };

      this.tasks.push(newTask);
      this.newTaskName = '';
      this.showNewTaskInput = false;
    },

    // ---------------------------GEMINI CODE----------------------------
    toggleNewTaskInput() {
      this.showNewTaskInput = !this.showNewTaskInput;
      if (this.showNewTaskInput) {
        this.$nextTick(() => {
          if(this.$refs.newTaskInput) { // Use the ref you'll add to the input
            this.$refs.newTaskInput.focus();
          }
        });
      } else {
        this.newTaskName = ''; // Clear input if cancelling
      }
    },
    //  -----------------------------------------------------------------

    handleBlurEvent(){
      if (!this.newTaskName.trim()) {
        this.newTaskName = '';
        this.showNewTaskInput = false;
      }
    },

    // TODO: complete this later
    // deleteTask(task){
    //   this.tasks = this.tasks.filter(task => task.id !== task.id);
    // },

    updateTaskStatus(taskId){
      const completedTask = this.tasks.find(task => task.id === taskId);
      completedTask.isCompleted = !completedTask.isCompleted;
    },

    // TODO: complete this later
    // deleteList(){
    //   this.$emit('delete-list', this.listName);
    // }
  }


}
</script>

<template>
    <div>
      <div class="mona-sans-semi-bold rounded-md">
        <div class=" text-[#091057]  text-center m-2">{{listName}}
          <task v-for="task in tasks"
                :is-completed="task.isCompleted"
                :task-name="task.name"
                :key="task.id"
                :task-id="task.id"
                @add-task="addTask"
                @toggle-complete="updateTaskStatus"
          ></task>
        </div>
        <div class="flex">
        <input
            v-show="showNewTaskInput" ref="newTaskInput"  v-model="newTaskName"   type="text"
            class="m-2 rounded-md px-3 py-1.5 w-full mb-2 focus:ring-1 focus:ring-[#091057] focus:bg-white focus:border-[#091057] outline-none"
            placeholder="Enter task name..."
            @keyup.enter="addTask" @keyup.esc="toggleNewTaskInput"
        @blur="handleBlurEvent"
        />
        <button class="mona-sans-bold text-[2rem] text-[#091057] px-3" @click="toggleNewTaskInput"> + </button>
      </div>
      </div>
    </div>
</template>

<style scoped>

</style>