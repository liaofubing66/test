<template>
  <div class="ant-empty ksapc-empty">
    <div class="ant-empty-image">
      <img :alt="description" :src="imageSrc" />
    </div>
    <div class="ant-empty-description">
      {{ description }}
    </div>
    <div class="ant-empty-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  description: {
    type: String,
    default: ""
  },
  imageSrc: {
    type: String,
    default: require("@/assets/search_empty.png")
  }
});
</script>
