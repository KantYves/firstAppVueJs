
<script setup>
  import { onMounted, ref } from 'vue'

      const name = ref('Jhonatan')
      const status = ref('active')
      const tasks = ref(['Task 1', 'Task 2', 'Task 3'])
      const newTask = ref('')

      const toogleStatus = () => {
        if(status.value === 'active') {
          status.value = 'pending'
        } else if(status.value === 'pending') {
          status.value = 'inactive'
        }else {
          status.value = 'active'
        }
      }

      const addTask = () => {
        if(newTask.value.trim() !== ''){
          tasks.value.push(newTask.value)
          newTask.value = ''
        }
      }

      const deleteTask = (index) => {
        tasks.value.splice(index, 1)
      }

      onMounted((async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/todos')
          const data = await response.json()
          tasks.value = data.map(task => task.title)
        } catch (error) {
          console.log(error)
        }
      }))
</script>


<template>

  <h1>Cours Crash 2025</h1>
  <h2>{{ name }}</h2>
  <p>{{ status }}</p>
  <br>
  <button @click="toogleStatus">Toogle Status</button>
  <br><br>

  <form @submit.prevent="addTask" action="">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask">
    <button type="submit">Add</button>
  </form>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(index)">x</button>
    </li>
  </ul>

</template>

