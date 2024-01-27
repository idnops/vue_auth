<template>
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio optio omnis,
    beatae soluta ab velit nesciunt rerum doloribus molestiae perferendis
    blanditiis illum nam aspernatur fuga dolore dolorem neque ad veniam?
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useApi } from "../../src";

const { login } = useApi();

onMounted(async () => {
  const registeredUser = await login({
    credential: "a@a.ru",
    password: "somepass",
  });
  console.log(registeredUser);
});
</script>
