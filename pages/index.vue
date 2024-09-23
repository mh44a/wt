<script setup lang="ts">
import 'animate.css';
import { ref, computed } from 'vue';

const pageData = reactive({
    selectedSSS: -1 as number,
})

const sss = {
    1: {
        title: "Mısra Bayındır (MISRAPOWER) kimdir?",
        desc: "2021 Şubat ayında yaşadığım ileri seviye tiroit kanseri sonrasında hayatımı adamak istediğim şeylerden biri olan spor, şu anki hayatımın olmazsa olmaz aktivitelerinden biri. Kilo almak için başladığım bu yol, bir süre sonra okulumu, bölümümü ve eğitimlerimi antrenörlük yapmak istediğim bölüm olan Fitness, Vücut Geliştirme ve Wellness alanında seçerek birçok sertifika ve belge ile altını desteklediğim birebir online koçluk ve kişiye özel antrenman programları hazırlamaya kadar ilerledi. Kişisel ilgi alanım olan beslenme ve sağlık hakkında katılım sağladığım/sağlamakta olduğum eğitimler bir yana, Avrupa Mesleki Yeterlilik Kurumu (EQF) tarafından sertifikasını aldığım 4. Seviye Bireysel Antrenör Sertifikası ve hâlihazırda İstanbul Rumeli Üniversitesi’nde okumakta olduğum Antrenörlük Bölümü: Fitness ve Vücut Geliştirme eğitimim ile devam etmektedir. Kendimi daima geliştirmeye açık olmam ve hayat boyu kalıcı disiplin öğretisi vizyonuyla yapmakta olduğum bu iş şu ana kadar yüzlerce insanı hedefindeki vücuda, en önemlisi disiplin mentalitesine ulaştırdı. Hedefi harekete dönüştürmeye şimdi benimle birlikte başla!",
    },
    2: {
        title: "Online Koçluk sadece antrenman programından mı ibaret oluyor?",
        desc: "Hayır, Online Koçluk 7/24 benimle bireysel WhatsApp iletişimi dahilinde ödeme sonrası doldurulan form ile tamamiyle kişiye özel olan; antrenman programı, beslenme programı, ölçüm takibi, supplement (takviye) planlaması, kardiyo planlaması, mobilite planlaması, sabah rutini&bel inceltme rehberi, fit tarifler ve recovery (kas iyileşmesi) rehberi ile birlikte her hafta gidişata güncellenen Google Tablolar’dan oluşuyor."
    },
    3: {
        title: "Program kaç gün içinde bana ulaşıyor?",
        desc: "Kişiye Özel Antrenman Programı aldığınız durumda tarafınıza aynı haftanın pazar günü belirttiğiniz Gmail hesabınıza gönderilecektir. Online Koçluk aldığınız durumda ise aynı haftanın pazar günü WhatsApp’tan ulaşılacak ve program iletilecektir. Hazır programlar satın alım sonrasında hemen Gmail hesabınıza ileteilecektir."
    },
    4: {
        title: "Birebir Online Koçluk hizmetinde Mısra Bayındır ile mi görüşüyoruz, yoksa asistan mı yardımcı oluyor?",
        desc: "Tüm süreç boyunca yalnızca Mısra Bayındır ile görüşme halinde oluyorsunuz."
    }
}

const selectSSS = (index: number) => {
    if (index == pageData.selectedSSS) {
        pageData.selectedSSS = -1;
        return;
    }

    pageData.selectedSSS = index;
}

const selectedOption = ref<'4week' | '12week' | '24week'>('4week');
const prices = {
    '4week': 50,
    '12week': 130,
    '24week': 240,
};

const currentPrice = computed(() => prices[selectedOption.value]);

function setOption(option: '4week' | '12week' | '24week') {
    selectedOption.value = option;
}
</script>

<template>
    <div class="flex flex-col justify-center items-center gap-12">
        <div class="flex flex-row justify-center items-center gap-12 w-full p-24 animate__animated animate__fadeInDown">
            <div class="flex justify-center items-center relative">
                <img src="../assets/img/misra.jpg" alt="" class="w-64 rounded-full float">
            </div>
            <div class="flex flex-col justify-start items-start gap-4">
                <span
                    class="bg-sky-300 bg-opacity-15 rounded-full border border-sky-400 border-opacity-50 text-sky-900 px-4 py-1 text-sm flex flex-row justify-center items-center gap-1">🥳
                    İndirim Kodu: <span class="font-bold">MISRA10</span></span>
                <div class="flex flex-col justify-start items-start gap-1">
                    <h2 class="text-5xl font-bold">Yeni bir sen için hazır mısın?</h2>
                    <span class="text-xl font-normal text-zinc-500">Daha iyi bir vücut isteme, onun için çalış.</span>
                </div>
                <div class="flex flex-row justify-start items-center gap-4">
                    <button class="bg-gradient-to-r from-[#FF2F8B] to-[#980144] py-2 px-6 text-white rounded-md">Online
                        Koçluk</button>
                    <button class="bg-zinc-800 py-2 px-6 text-white rounded-md">Programlar</button>
                </div>
            </div>
        </div>

        <div class="flex flex-col justify-center items-center gap-6 animate__animated animate__zoomIn w-full">
            <div class="flex flex-wrap justify-center items-center gap-4">
                <video src="/videos/1.mp4" controls class="rounded-lg shadow-lg w-72" />
                <video src="/videos/1.mp4" controls class="rounded-lg shadow-lg w-72" />
                <video src="/videos/1.mp4" controls class="rounded-lg shadow-lg w-72" />
            </div>
        </div>

        <div class="flex flex-col justify-center items-center gap-12 p-12 animate__animated animate__zoomIn w-full">
            <div class="flex flex-col justify-center items-center gap-1">
                <h2
                    class="text-4xl font-bold bg-gradient-to-r from-[#FF2F8B] to-[#980144] text-transparent bg-clip-text">
                    Ürün ve Hizmetler</h2>
                <span class="text-lg font-normal text-zinc-600">Sana en uygun egzersiz planını zaman kaybetmeden
                    uygulamaya başla!</span>
            </div>
            <div
                class="relative overflow-hidden flex flex-row justify-center items-center gap-2 bg-zinc-100 rounded-full px-2 py-1.5">

                <div class="relative inline-flex items-center rounded-full w-72">
                    <div :class="{
                        'left-0': selectedOption === '4week',
                        'left-1/3': selectedOption === '12week',
                        'left-2/3': selectedOption === '24week'
                    }"
                        class="absolute left-0 w-1/3 h-full bg-gradient-to-r from-[#FF2F8B] to-[#980144] rounded-full transition-all duration-300 ease-in-out">
                    </div>

                    <div @click="setOption('4week')"
                        class="relative z-10 w-24 text-center py-1 font-semibold focus:outline-none cursor-pointer"
                        :class="selectedOption === '4week' ? 'text-white' : 'text-zinc-400'">
                        4 Hafta
                    </div>

                    <div @click="setOption('12week')"
                        class="relative z-10 w-24 text-center py-1 font-semibold focus:outline-none cursor-pointer"
                        :class="selectedOption === '12week' ? 'text-white' : 'text-zinc-400'">
                        12 Hafta
                    </div>

                    <div @click="setOption('24week')"
                        class="relative z-10 w-24 text-center py-1 font-semibold focus:outline-none cursor-pointer"
                        :class="selectedOption === '24week' ? 'text-white' : 'text-zinc-400'">
                        24 Hafta
                    </div>
                </div>
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
                            <div class="flex flex-row justify-center items-center gap-2">
                                <span
                                    class="text-xl font-bold bg-gradient-to-r from-[#FF2F8B] to-[#980144] text-transparent bg-clip-text">100₺</span>
                                <span class="text-sm font-medium text-zinc-400 line-through bg-clip-text">100₺</span>
                            </div>
                            <div class="flex flex-row justify-center items-center gap-2">
                                <button
                                    class="bg-gradient-to-r from-[#FF2F8B] to-[#980144] py-2 px-6 text-white rounded-md">Satın
                                    Al</button>
                                <button
                                    class="border border-zinc-900 hover:bg-zinc-800 text-zinc-900 hover:text-white py-2 px-6 rounded-md">Detaylar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="flex flex-col justify-center items-center gap-12 p-12 border-t animate__animated animate__zoomIn w-full">
            <div class="flex flex-col justify-center items-center gap-1 mt-12">
                <img src="../assets/img/sponsor/proteinocean.svg" alt="" class="w-32 mb-4">
                <h2 class="text-4xl font-semibold text-zinc-900">
                    <span
                        class="bg-gradient-to-r from-[#FF2F8B] to-[#980144] text-transparent bg-clip-text !font-extrabold">“MISRA10”</span>
                    kodunu kullanarak <span
                        class="bg-gradient-to-r from-[#FF2F8B] to-[#980144] text-transparent bg-clip-text !font-extrabold">%10
                        İndirim</span> kazanabilirsiniz.
                </h2>
                <a href="https://proteinocean.com/?ref=misrapower">Alışveriş yapmak için tıkla.</a>
            </div>
        </div>

        <div
            class="flex flex-col justify-center items-center gap-4 p-12 border-t animate__animated animate__zoomIn w-full">
            <div class="flex flex-col justify-center items-center gap-1">
                <h2
                    class="text-4xl font-bold bg-gradient-to-r from-[#FF2F8B] to-[#980144] text-transparent bg-clip-text">
                    Sıkça Sorulan Sorular</h2>
            </div>

            <div class="flex flex-col justify-center items-center gap-2 w-full">
                <div v-for="(sss, index) in sss" :key="index" @click="selectSSS(index)" class="flex flex-col justify-center items-center gap-2 w-full cursor-pointer">
                    <div
                        class="flex flex-row justify-between items-center bg-zinc-50 border border-zinc-200 p-2 rounded w-full">
                        <span class="text-zinc-900 font-bold">{{ sss.title }}</span>
                        <Icon :name="pageData.selectedSSS == index ? 'mdi:chevron-down' : 'mdi:chevron-up'" />
                    </div>
                    <div class="bg-white border border-zinc-100 p-2 rounded w-full" v-if="pageData.selectedSSS == index">
                        <span class="text-base">{{ sss.desc }}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col justify-center items-center gap-12 p-12 border-t animate__animated animate__zoomIn">
            <div class="flex flex-col justify-center items-center gap-1">
                <h2
                    class="text-4xl font-bold bg-gradient-to-r from-[#FF2F8B] to-[#980144] text-transparent bg-clip-text">
                    Müşteri Yorumları</h2>
                <span class="text-lg font-normal text-zinc-600">Bizi tercih eden müşterilerin yapmış olduğu
                    yorumlar.</span>
            </div>
            <div class="flex flex-wrap justify-center items-center w-full gap-4">
                <div v-for="i in 5" :key="i"
                    class="w-[350px] p-4 bg-white rounded border border-zinc-200 masonry-item overflow-hidden flex flex-col gap-5">
                    <div class="flex flex-row justify-between items-center gap-2">
                        <div class="flex flex-row justify-start items-center gap-2">
                            <img src="../assets/img/test.jpg" alt="" class="w-8 rounded-full" />
                            <div class="flex flex-col justify-start items-start -space-y-2">
                                <span class="font-bold text-lg">poyraz</span>
                                <span class="font-normal text-sm text-zinc-500">ürün..</span>
                            </div>
                        </div>
                        <div class="flex flex-row justify-end items-end gap-1">
                            <Icon v-for="i in 5" name="material-symbols:kid-star" style="color: orange;" />
                        </div>
                    </div>
                    <div class="flex flex-row">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.week-option {
    position: relative;
    z-index: 10;
}

.masonry-item {
    flex: 1 1 calc(33.333% - 1rem);
}
</style>