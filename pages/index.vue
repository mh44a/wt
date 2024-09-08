<script setup lang="ts">
import 'animate.css';
</script>

<template>
    <div class="flex flex-col justify-center items-center gap-12">
        <div class="flex flex-row justify-between items-center w-full p-24">
            <div class="flex flex-col justify-start items-start gap-4">
                <span class="bg-green-300 bg-opacity-25 rounded-full border border-green-400 border-opacity-50 text-green-900 px-4 py-1 text-sm flex flex-row justify-center items-center gap-1">🥳 İndirim Kodu: <span class="font-bold">MISRA10</span></span>
                <div class="flex flex-col justify-start items-start gap-1">
                    <h2 class="text-5xl font-bold">Yeni bir sen için hazır mısın?</h2>
                    <span class="text-xl font-normal text-zinc-500">Daha iyi bir vücut isteme, onun için çalış.</span>
                </div>
                <div class="flex flex-row justify-start items-start gap-4">
                    <button class="bg-gradient-to-r from-[#FF2F8B] to-[#980144] py-2 px-6 text-white rounded-md">Online
                        Koçluk</button>
                    <button class="bg-zinc-900 hover:bg-zinc-800 py-2 px-6 text-white rounded-md">Programlar</button>
                </div>
            </div>
            <div class="flex justify-center items-center relative">
                <span class="absolute top-0 left-0 text-7xl float-2">🏋️‍♂️</span>
                <span class="absolute -bottom-6 -right-6 text-9xl float">🏋️‍♀️</span>
                <img src="../assets/img/misra.jpg" alt="" class="w-64 rounded-full">
            </div>
        </div>

        <div class="flex flex-col justify-center items-center gap-6 p-12 border-b">
            <h4 class="text-zinc-900 text-base font-bold">SPONSORLAR</h4>
            <div class="flex flex-wrap justify-center items-center gap-12 w-3/4">
                <img v-for="i in 7" src="../assets/img/sponsor/proteinocean.svg" alt=""
                    class="w-32 grayscale hover:grayscale-0 transition-all">
            </div>
        </div>

        <div class="flex flex-col justify-center items-center gap-12 p-12">
            <div class="flex flex-col justify-center items-center gap-1">
                <h2 class="text-4xl font-bold text-zinc-900">Ürün ve Hizmetler</h2>
                <span class="text-lg font-normal text-zinc-600">Sana en uygun egzersiz planını zaman kaybetmeden
                    uygulamaya başla!</span>
            </div>
            <div class="flex flex-wrap justify-center items-center gap-12">
                <div class="max-w-[100vh] bg-white rounded border p-6 flex flex-row justify-between items-center gap-12">
                    <div class="flex flex-col justify-start items-start gap-2">
                        <h2 class="text-3xl font-bold">Birebir İletişimli Koçluk</h2>
                        <div class="flex flex-col justify-start items-start">
                            <span>Hedefe uygun antrenman programı (isteğe göre ev veya spor salonu programı ile)</span>
                            <span>Hangi hareketin nereyi çalıştırdığı, hareketlerin detaylı videoları.</span>
                        </div>
                    </div>
                    <img src="../assets/img/birebir.jpg" alt="" class="object-cover w-64 h-64 rounded">
                </div>
                <div class="max-w-[100vh] bg-white rounded border p-6 flex flex-row justify-between items-center gap-12">
                    <div class="flex flex-col justify-start items-start gap-2">
                        <h2 class="text-3xl font-bold">Kişiye Özel Antrenman Programı</h2>
                        <div class="flex flex-col justify-start items-start">
                            <span>Hedefe uygun antrenman programı (isteğe göre ev veya spor salonu programı ile)</span>
                            <span>Hareketlerin detaylı videoları, hangi hareketin nereyi çalıştırdığı ve egzersizle ilgili tüm terimlerin detayları</span>
                        </div>
                    </div>
                    <img src="../assets/img/kisiyeozel.jpg" alt="" class="object-cover w-64 h-64 rounded">
                </div>
                <div class="max-w-[100vh] bg-white rounded border p-6 flex flex-row justify-between items-center gap-12">
                    <div class="flex flex-col justify-start items-start gap-2">
                        <h2 class="text-3xl font-bold">21 Günde Karın Kası Programı</h2>
                        <div class="flex flex-col justify-start items-start">
                            <span>Bel inceltme ve karın kası inşaa etmekle ilgili püf noktalar</span>
                            <span>Detaylarıyla karın kası antrenmanı</span>
                        </div>
                    </div>
                    <img src="../assets/img/karin.jpg" alt="" class="object-cover w-64 h-64 rounded">
                </div>
            </div>
        </div>
    </div>
</template>