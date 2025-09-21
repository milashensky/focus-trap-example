<script setup>
import {
    computed,
    inject,
    toValue,
} from 'vue'

const props = defineProps({
    modelValue: [String, Number],
    disabled: Boolean,
    tabindex: Number,
})
const emit = defineEmits(['update:modelValue'])
const isFocusDisabled = inject('isFocusDisabled', false)
const model = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
})
const tabIndex = computed(() => {
    if (toValue(isFocusDisabled)) {
        return -1
    }
    return props.tabindex
})
</script>

<template>
    <input
        v-model="model"
        :disabled="disabled"
        :tabindex="tabIndex"
    />
</template>
