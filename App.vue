<script lang="ts" setup>
import MyComponent1 from '@project/test/components/MyComponent1.vue';
import MyComponent2 from '@project/test/dist/components/MyComponent2.vue';
import { MyComponent3 } from '@project/test/components';
</script>

<template>
  <MyComponent1 />
  <MyComponent2/>
  <MyComponent3 />
</template>
