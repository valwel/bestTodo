<template>
  <div class="todo-input">
    <input
      type="text"
      class="input"
      placeholder="Todo Name"
      autofocus
      v-model="todo.name"
      @keyup.enter="addTodo"
    />
  </div>
</template>

<script>
let uniqId = 0;
export default {
  data() {
    return {
      todo: {
        id: 0,
        name: "",
        checked: false,
      },
    };
  },

  methods: {
    addTodo() {
      uniqId++;
      this.todo.id = uniqId;
      this.$emit("addTodo", { ...this.todo });
      this.todo.name = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  font-size: 24px;
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.03);
  line-height: 1.4em;
  outline: none;
  color: inherit;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
}
</style>