<script setup>
import { ref } from 'vue'
import UiButton from '@/ui-kit/UiButton.vue'
import UiInput from '@/ui-kit/UiInput.vue'
import FocusContext from '@/focus-trap/FocusContext.vue'

const model1 = ref('')
const model2 = ref('')
const model3 = ref('')

const isRenderForm2 = ref(false)
const isRenderForm3 = ref(false)
</script>

<template>
    <FocusContext>
        <div>
            <UiInput
                v-model="model1"
                data-test-id="input1"
            />
            <UiButton
                data-test-id="button1"
                @click="isRenderForm2 = true"
            >
                show form 2
            </UiButton>
        </div>
        <FocusContext
            v-if="isRenderForm2"
        >
            <div>
                <UiInput
                    v-model="model2"
                    data-test-id="input2"
                />
                <UiButton
                    data-test-id="button2"
                    @click="isRenderForm3 = true"
                >
                    show form 3
                </UiButton>
                <UiButton
                    data-test-id="button2"
                    @click="isRenderForm2 = false"
                >
                    hide
                </UiButton>
            </div>
            <FocusContext
                v-if="isRenderForm3"
            >
                <div>
                    <UiInput
                        v-model="model3"
                        data-test-id="input3"
                    />
                    <UiButton
                        data-test-id="button2"
                        @click="isRenderForm3 = false"
                    >
                        hide
                    </UiButton>
                </div>
            </FocusContext>
        </FocusContext>
    </FocusContext>
</template>
