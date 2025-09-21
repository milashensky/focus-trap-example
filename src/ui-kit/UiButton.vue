<script setup>
import {
    computed,
    inject,
    toValue,
} from 'vue'

const props = defineProps({
    disabled: Boolean,
    tabindex: Number,
})
const emit = defineEmits(['click'])
const isFocusDisabled = inject('isFocusDisabled', false)
const tabIndex = computed(() => {
    if (toValue(isFocusDisabled)) {
        return -1
    }
    return props.tabindex
})
</script>

<template>
    <button
        :disabled="disabled"
        :tabindex="tabIndex"
        @click="emit('click')"
    >
        <slot />
    </button>
</template>
