<script setup>
import {
    computed,
    onBeforeMount,
    ref,
    onBeforeUnmount,
    provide,
    toValue,
} from 'vue'
import { storeToRefs } from 'pinia'
import { useFocusStore } from './focus-store'

const store = useFocusStore()
const { topmostFocusIndex } = storeToRefs(store)

const focusIndex = ref(0)

const isDisabled = computed(() => {
    const topIndex = toValue(topmostFocusIndex)
    return topIndex !== toValue(focusIndex)
})

onBeforeMount(() => {
    focusIndex.value = store.issueFocusIndex()
})
onBeforeUnmount(() => {
    store.releaseFocusIndex(focusIndex.value)
})
provide('isFocusDisabled', isDisabled)
provide('focusIndex', focusIndex)
</script>

<template>
    <slot
        :disabled="isDisabled"
    />
</template>
