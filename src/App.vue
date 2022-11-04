<template>
  <router-view v-slot="{Component}">
    <Component :is="Component"></Component>
  </router-view>
</template>


