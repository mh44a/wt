<script setup lang="ts">
import 'animate.css';
</script>

<template>
    <div class="flex flex-col justify-center items-center gap-12">
        <div class="flex flex-row justify-between items-center w-full p-24 animate__animated animate__fadeInDown">
            <div class="flex flex-col justify-start items-start gap-4">
                <span
                    class="bg-sky-300 bg-opacity-25 rounded-full border border-sky-400 border-opacity-50 text-sky-900 px-4 py-1 text-sm flex flex-row justify-center items-center gap-1">🥳
                    İndirim Kodu: <span class="font-bold">MISRA10</span></span>
                <div class="flex flex-col justify-start items-start gap-1">
                    <h2 class="text-5xl font-bold">Yeni bir sen için hazır mısın?</h2>
                    <span class="text-xl font-normal text-zinc-500">Daha iyi bir vücut isteme, onun için çalış.</span>
                </div>
                <div class="flex flex-row justify-start items-start gap-4">
                    <button class="bg-gradient-to-r from-[#FF2F8B] to-[#980144] py-2 px-6 text-white rounded-md">Online
                        Koçluk</button>
                    <button class="border border-zinc-900 hover:bg-zinc-800 py-2 px-6 text-zinc-900 hover:text-white rounded-md">Programlar</button>
                </div>
            </div>
            <div class="flex justify-center items-center relative">
                <img src="../assets/img/misra.jpg" alt="" class="w-64 rounded-full float">
            </div>
        </div>

        <div class="flex flex-col justify-center items-center gap-6 p-12 border-b animate__animated animate__zoomIn w-full">
            <div class="flex flex-wrap justify-center items-center gap-12">
                <img src="../assets/img/sponsor/proteinocean.svg" alt="" class="w-24 grayscale opacity-50">
                <img src="../assets/img/sponsor/macfit_black.png" alt="" class="w-24 grayscale opacity-50">
                <img src="../assets/img/sponsor/bahs.avif" alt="" class="w-24 grayscale opacity-50">
            </div>
        </div>

        <div class="flex flex-col justify-center items-center gap-12 p-12 animate__animated animate__zoomIn w-full">
            <div class="flex flex-col justify-center items-center gap-1">
                <h2 class="text-4xl font-bold bg-gradient-to-r from-[#FF2F8B] to-[#980144] text-transparent bg-clip-text">Ürün ve Hizmetler</h2>
                <span class="text-lg font-normal text-zinc-600">Sana en uygun egzersiz planını zaman kaybetmeden
                    uygulamaya başla!</span>
            </div>
            <div class="flex flex-col justify-center items-center gap-12">
                <div class="max-w-1/2 p-6 flex flex-row justify-between items-center gap-12">
                    <img src="../assets/img/birebir.jpg" alt="" class="object-cover w-64 h-64 rounded">

                    <div class="flex flex-col justify-start items-start gap-2">
                        <h2 class="text-3xl font-bold">Birebir İletişimli Koçluk</h2>
                        <div class="flex flex-col justify-start items-start text-zinc-500">
                            <span>Hedefe uygun antrenman programı (isteğe göre ev veya spor salonu programı ile)</span>
                            <span>Hangi hareketin nereyi çalıştırdığı, hareketlerin detaylı videoları.</span>
                        </div>
                        <div class="flex flex-row justify-between items-center gap-2 mt-4 w-full">
                            <span class="text-xl font-bold bg-gradient-to-r from-[#FF2F8B] to-[#980144] text-transparent bg-clip-text">100₺</span>
                            <div class="flex flex-row justify-center items-center gap-2">
                                <button class="bg-gradient-to-r from-[#FF2F8B] to-[#980144] py-2 px-6 text-white rounded-md">Satın Al</button>
                                <button class="border border-zinc-900 hover:bg-zinc-800 text-zinc-900 hover:text-white py-2 px-6 text-white rounded-md">Detaylar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col justify-center items-center gap-12 p-12 border-t animate__animated animate__zoomIn w-full">
            <div class="flex flex-col justify-center items-center gap-1 mt-12">
                <img src="../assets/img/sponsor/proteinocean.svg" alt="" class="w-32 mb-4">
                <h2 class="text-4xl font-semibold text-zinc-900">
                    <span class="bg-gradient-to-r from-[#FF2F8B] to-[#980144] text-transparent bg-clip-text !font-extrabold">“MISRA10”</span> 
                    kodunu kullanarak <span class="bg-gradient-to-r from-[#FF2F8B] to-[#980144] text-transparent bg-clip-text !font-extrabold">%10 İndirim</span> kazanabilirsiniz.</h2>
                <span class="text-zinc-500">Alışveriş yapmak için tıkla.</span>
            </div>
        </div>

        <div class="flex flex-col justify-center items-center gap-12 p-12 border-t animate__animated animate__zoomIn">
            <div class="flex flex-col justify-center items-center gap-1">
                <h2 class="text-4xl font-bold bg-gradient-to-r from-[#FF2F8B] to-[#980144] text-transparent bg-clip-text">Müşteri Yorumları</h2>
                <span class="text-lg font-normal text-zinc-600">Bizi tercih eden müşterilerin yapmış olduğu
                    yorumlar.</span>
            </div>
            <div class="flex flex-wrap justify-center items-center gap-6">
                <div v-for="i in 5" class="w-[350px] p-4 bg-white rounded border border-zinc-200 relative flex flex-col gap-5">
                    <div class="flex flex-row justify-between items-center gap-2">
                        <div class="flex flex-row justify-start items-center gap-2">
                            <img src="../assets/img/test.jpg" alt="" class="w-8 rounded-full">
                            <div class="flex flex-col justify-start items-start -space-y-2">
                                <span class="font-bold text-lg">poyraz</span>
                                <span class="font-normal text-sm text-zinc-500">ürün..</span>
                            </div>
                        </div>
                        <div class="flex flex-row justify-end items-end gap-1">
                            <Icon v-for="i in 5" name="material-symbols:kid-star" style="color: orange;" />
                        </div>
                    </div>
                    <div class="flex flex-row">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id lorem vel arcu dictum dignissim nec non libero.</div>
                </div>
            </div>
        </div>
    </div>
</template>