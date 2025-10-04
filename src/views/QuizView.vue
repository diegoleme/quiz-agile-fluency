<template>
  <div class="p-5 max-w-2xl mx-auto text-center mt-10">
    <div v-if="!quizFinished">
      <h2 class="text-3xl font-bold mb-4 text-teal-300">{{ currentZone.name }}</h2>
      <p class="text-xl my-8 min-h-[100px]">{{ currentQuestion.text }}</p>
      <div class="mt-5">
        <button @click="answer(true)" class="mx-2 py-3 px-8 text-lg rounded-lg text-white bg-green-500 hover:bg-green-600 transition-colors">Sim</button>
        <button @click="answer(false)" class="mx-2 py-3 px-8 text-lg rounded-lg text-white bg-red-500 hover:bg-red-600 transition-colors">Não</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { fluencyData, type FluencyZone } from '../data/fluency-data';

const router = useRouter();

const currentZoneIndex = ref(0);
const currentQuestionIndex = ref(0);
const answers = ref<boolean[]>([]);
const quizFinished = ref(false);

const currentZone = computed<FluencyZone>(() => fluencyData[currentZoneIndex.value]);
const currentQuestion = computed(() => {
  return {
    text: currentZone.value.questions[currentQuestionIndex.value],
    index: currentQuestionIndex.value
  };
});

const answer = (value: boolean) => {
  answers.value.push(value);

  if (currentQuestionIndex.value < currentZone.value.questions.length - 1) {
    currentQuestionIndex.value++;
  } else {
    checkZoneFluency();
  }
};

const checkZoneFluency = () => {
  const correctAnswers = answers.value.filter(Boolean).length;
  const totalQuestions = currentZone.value.questions.length;
  const fluencyAchieved = (correctAnswers / totalQuestions) >= 0.8;

  if (fluencyAchieved) {
    if (currentZoneIndex.value < fluencyData.length - 1) {
      currentZoneIndex.value++;
      currentQuestionIndex.value = 0;
      answers.value = [];
    } else {
      quizFinished.value = true;
      router.push({ name: 'resultado', query: { zone: currentZone.value.id } });
    }
  } else {
    quizFinished.value = true;
    const resultZone = currentZoneIndex.value > 0 ? fluencyData[currentZoneIndex.value - 1].id : 'pre-agil';
    router.push({ name: 'resultado', query: { zone: resultZone } });
  }
};
</script>
