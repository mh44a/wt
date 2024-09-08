<script setup lang="ts">
import { ref } from 'vue';

interface GridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  squares?: Array<[x: number, y: number]>;
  strokeDasharray?: string | number;
  className?: string;
  [key: string]: any;
}

// Fonksiyonun Props'larını tanımlıyoruz
const props = withDefaults(defineProps<GridPatternProps>(), {
  width: 40,
  height: 40,
  x: -1,
  y: -1,
  strokeDasharray: 0,
  squares: null,
  className: '',
});

// Benzersiz ID oluşturmak için ref kullanımı
const id = ref(`pattern-${Math.random().toString(36).substr(2, 9)}`);
</script>

<template>
  <svg
    aria-hidden="true"
    :class="['pointer-events-none absolute inset-0 z-10 h-full w-full fill-zinc-400/30 stroke-zinc-400/30 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]']"
    v-bind="props"
  >
    <defs>
      <pattern
        :id="id"
        :width="props.width"
        :height="props.height"
        patternUnits="userSpaceOnUse"
        :x="props.x"
        :y="props.y"
      >
        <path
          :d="`M.5 ${props.height}V.5H${props.width}`"
          fill="none"
          :stroke-dasharray="props.strokeDasharray"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" stroke-width="0" :fill="`url(#${id.value})`" />
    <svg v-if="props.squares" :x="props.x" :y="props.y" class="overflow-visible">
      <rect
        v-for="[x, y] in props.squares"
        :key="`${x}-${y}`"
        :width="props.width - 1"
        :height="props.height - 1"
        :x="x * props.width + 1"
        :y="y * props.height + 1"
        stroke-width="0"
      />
    </svg>
  </svg>
</template>

<style scoped>
/* Ekstra stiller buraya eklenebilir */
</style>
