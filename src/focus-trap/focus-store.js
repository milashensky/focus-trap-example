import {
    ref,
    computed,
    toValue,
} from 'vue';
import { defineStore } from 'pinia';

export const useFocusStore = defineStore('focus', () => {
    const focusIndexes = ref(new Set())
    const topmostFocusIndex = computed(() => {
        const indexes = toValue(focusIndexes)
        const index = [...indexes].toSorted().pop() || 0
        return index
    })

    const issueFocusIndex = () => {
        const parentFocusIndex = toValue(topmostFocusIndex)
        const focusIndex = parentFocusIndex + 1
        focusIndexes.value.add(focusIndex)
        return focusIndex
    }
    const releaseFocusIndex = (focusIndex) => {
        focusIndexes.value.delete(focusIndex)
    }

    return {
        topmostFocusIndex,
        issueFocusIndex,
        releaseFocusIndex,
    };
});
