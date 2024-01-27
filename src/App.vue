<script setup lang="ts"></script>

<template>
  <div>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/protected">Go to Protected</router-link>

    <router-view></router-view>
  </div>
</template>
