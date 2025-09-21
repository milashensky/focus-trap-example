<script setup>
import { ref } from 'vue'
import UiButton from '@/ui-kit/UiButton.vue'
import UiInput from '@/ui-kit/UiInput.vue'
import FocusContext from '../FocusContext.vue'

const model1 = ref('')
const model2 = ref('')
const model3 = ref('')

defineProps({
    isRenderForm2: Boolean,
    isRenderForm3: Boolean,
})
</script>

<template>
    <FocusContext>
        <UiInput
            v-model="model1"
            data-test-id="input1"
        />
        <UiButton
            data-test-id="button1"
        >
            Submit form 1
        </UiButton>
        <FocusContext
            v-if="isRenderForm2"
        >
            <UiInput
                v-model="model2"
                data-test-id="input2"
            />
            <UiButton
                data-test-id="button2"
            >
                Submit form 2
            </UiButton>
            <FocusContext
                v-if="isRenderForm3"
            >
                <UiInput
                    v-model="model3"
                    data-test-id="input3"
                />
                <UiButton
                    data-test-id="button3"
                >
                    Submit form 3
                </UiButton>
            </FocusContext>
        </FocusContext>
    </FocusContext>
</template>
