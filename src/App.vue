<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from 'vue'

const data = ref([{
  label: 'node-1',
  level: 1,
  open: true,
  children: [
    {
      label: 'node-11',
      level: 2,
      open: true,
      children: [
        { label: 'node-111', level: 3, },
        { label: 'node-112', level: 3, },
      ],
    },
    {
      label: 'node-12',
      level: 2,
      children: [
        { label: 'node-121', level: 3, },
        { label: 'node-122', level: 3, },
        { label: 'node-123', level: 3, },
      ],
    },
  ],
},
{
  label: 'node-2',
  level: 1,
}
])

</script>

<template>
  <Example :data="data" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
