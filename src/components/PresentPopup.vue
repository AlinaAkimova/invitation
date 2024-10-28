<template>
    <Teleport to="main">
        <div v-if="isVisible" class="present-popup">
            <p>Хочу деньги</p>
        </div>
    </Teleport>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({isVisible: Boolean})
</script>

<style lang="scss">
.present-popup {
    background-color: white;
    position: absolute;
    z-index: 2;
    width: 200px;
    top: 30%;
    left: 30%;
}
</style>
