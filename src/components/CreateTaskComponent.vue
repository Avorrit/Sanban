<script>
import {v4 as uuidv4 } from 'uuid';

export default {
  emits: ['createTask'],
  data(){
    return {
      task: {
        name: '',
        id: '',
        isCompleted: false,
      }
    }
  },

  methods: {
    addTask(listName){
      this.task.id = uuidv4();
      this.$emit('add-task', this.task, listName);
    }
  }
}
</script>

<template>
  <form class="flex mb-4" v-on:submit.prevent="addTask">
    <label for="text-input">
    </label>
    <input
        type="text"
        v-model="task.name"
        class="w-full bg-white rounded-s-md border border-e-0 border-gray-400 px-3 py-2 rounded-start border-dark-subtle"
        placeholder="Write down your mind..."
        id="text-input"
        required
    />
    <button
        class="rounded-e-md bg-blue-500 text-white px-3"
        type="submit"
        id="addGoal"
    >
      Add
    </button>
  </form>
</template>

<style scoped>

</style>