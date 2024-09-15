<template>
    <div class="marquee-container" ref="container">
        <div class="marquee-content" ref="content">
            <slot></slot>
        </div>
        <div class="gradient-overlay"></div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';

const container = ref<HTMLElement | null>(null);
const content = ref<HTMLElement | null>(null);

const props = defineProps<{
    speed: number,
    direction: string,
}>();

const startMarquee = () => {
    if (container.value && content.value) {
        const containerWidth = container.value.offsetWidth;
        const contentWidth = content.value.scrollWidth;
        const totalWidth = containerWidth + contentWidth;

        let position = props.direction === 'left' ? containerWidth : -contentWidth;
        const update = () => {
            position -= props.speed;
            if (props.direction === 'left' && position <= -contentWidth) {
                position = containerWidth;
            } else if (props.direction === 'right' && position >= containerWidth) {
                position = -contentWidth;
            }
            content.value!.style.transform = `translateX(${position}px)`;
            requestAnimationFrame(update);
        };

        update();
    }
};

watch([props.speed, props.direction], () => {
    startMarquee();
}, { immediate: true });

onMounted(() => {
    startMarquee();
});
</script>

<style scoped>
.marquee-container {
    position: relative;
    overflow: hidden;
    width: 100%;
}

.marquee-content {
    @apply flex flex-row;
    transition: transform 0.1s linear;
}

.gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(255, 255, 255, 1), transparent, rgba(255, 255, 255, 1));
    pointer-events: none;
}
</style>