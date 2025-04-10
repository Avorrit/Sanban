<script>
export default {
  props: {
    taskName: String,

    taskIsCompleted: {
      type: Boolean,
      default: false,
    },
    taskId: {
      type: String,
      validator(value) {
        const uuidRegex =
            /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        return uuidRegex.test(value);
      }
    }
  },

  data(){
    return {
      task: {
        name:'',
        id:'',
        isCompleted: false,
      }
    }
  }
}
</script>

<template>
  <div class="block bg-white p-3 m-2 border rounded-md">
    <div class="flex gap-x-2 items-start pe-2">
      <input class="ps-2 h-5 w-5 flex-shrink-0" type="checkbox" v-model="this.task.isCompleted"/>
      <p  class=" break-words flex-grow" :class="this.task.isCompleted?'disabled line-through italic text-gray-500':'text-black'">
            {{taskName}}
          </p>
    </div>
  </div>
</template>

<style scoped>

</style>