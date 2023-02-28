import { createRouter, createWebHistory } from 'vue-router'
import Todo from '../components/Todo.vue';
import TodoView from '../components/TodoView.vue';

const routes = [
  {
    path: '/',
    component: Todo
  },
  {
    path: '/view/:todo',
    component: TodoView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
