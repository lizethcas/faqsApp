<template>
    <div class="my-5">
        <div class="flex justify-between">
            <p class="z-40 border-b-rose-600 font-semibold text-[#2f1533] hover:text-[#883cb2] cursor-pointer">
                {{ props.title }}
            </p>
            <button v-if="!show" @click="toggle()">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31">
                    <path fill="#AD28EB"
                        d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z" />
                </svg>
            </button>
            <button v-else="show" @click="toggle()">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31">
                    <path fill="#301534"
                        d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z" />
                </svg>
            </button>
        </div>

        <p v-if="show" class="py-2 font-medium text-[#8c6991] text-[12px] text-start lg:text-[14px] xl:text-[14px]">{{
            props.description }}</p>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
    title: String,
    description: String,
})


const show = ref(false);

const toggle = () => {
    console.log('aqui');
    show.value = !show.value;
}
</script>
