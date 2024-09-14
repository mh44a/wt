<script setup lang="ts">
const langData = reactive({
    lang: '' as string
})

if (langData.lang == '') {
    langData.lang = localStorage.getItem('locale') as string;
}

const changeLanguage = () => {
    useNuxtApp().$setLanguage(localStorage.getItem('locale') == 'tr' ? 'us' : 'tr')
    langData.lang = localStorage.getItem('locale') as string;
}
</script>

<template>
    <div class="sticky container mx-auto top-7 rounded-full px-6 left-0 bg-white bg-opacity-50 backdrop-blur-sm z-50 text-black w-full border border-gray-200">
        <div class="container p-4 mx-auto flex flex-row justify-between items-center">
            <div class="flex flex-row justify-center items-center gap-6">
                <img src="../assets/img/logo.svg" alt="" class="w-48">
                <ul class="flex flex-row justify-center items-center gap-6 text-zinc-700">
                    <li>Online Koçluk</li>
                    <li>Ürünler</li>
                    <li>İletişim</li>
                </ul>
            </div>

            <div class="flex flex-row justify-center items-center gap-4">
                <i @click="changeLanguage()" :class="`fi fi-${langData.lang == 'us' ? 'tr' : 'us'} cursor-pointer rounded`"></i>

                <button class="flex flex-row justify-center items-center gap-2 bg-zinc-900 rounded-full text-white text-sm px-4 py-1 border border-zinc-700 hover:bg-zinc-800">
                    {{ $t('cart') }} <span class="bg-white rounded-full w-4 h-4 text-xs font-bold text-zinc-900">4</span>
                </button>
            </div>
        </div>
    </div>
</template>