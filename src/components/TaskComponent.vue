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
  <label class="block bg-white p-2 m-2 border rounded-md border-gray-400">
    <div class="flex gap-2">
      <input class="ps-2" type="checkbox" v-model="this.task.isCompleted"/>
      <span  class="block break-words text-center w-full" :class="this.task.isCompleted?'line-through italic':''">
            {{taskName}}
          </span>
    </div>
  </label>
</template>

<style scoped>

</style>