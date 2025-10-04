<template>
  <div class="p-5 max-w-4xl mx-auto my-10">
    <div class="bg-gray-800 p-6 rounded-lg">
      <div v-if="currentZone">
        <h1 class="text-3xl font-bold mb-2 text-teal-300">Sua Zona de Fluência: {{ currentZone.name }}</h1>
        <p class="text-lg">{{ currentZone.summary }}</p>
      </div>
      <div v-else>
        <h1 class="text-3xl font-bold mb-2 text-amber-300">Próximo Passo: Focar</h1>
        <p class="text-lg">Sua equipe está no estágio inicial. O primeiro passo na jornada de fluência é a zona Focar.</p>
      </div>
    </div>

    <div v-if="nextZone" class="mt-10 border-t border-gray-700 pt-8">
      <h2 class="text-2xl font-bold mb-4">Próximo Nível: <span class="text-teal-300">{{ nextZone.name }}</span></h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-xl font-semibold mb-3">Benefícios ao alcançar esta zona:</h3>
          <ul class="list-disc list-inside mb-6 space-y-2">
            <li v-for="(benefit, index) in nextZone.benefits" :key="index">{{ benefit }}</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-3">Investimentos necessários:</h3>
          <ul class="list-disc list-inside space-y-2">
            <li v-for="(investment, index) in nextZone.investments" :key="index">{{ investment }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div v-if="isMaxLevel" class="mt-10 text-center">
        <h2 class="text-2xl font-bold text-green-400">Parabéns!</h2>
        <p class="text-lg">Sua equipe alcançou a fluência máxima no modelo. O desafio agora é manter e disseminar essa cultura!</p>
    </div>

    <div class="text-center mt-12">
        <router-link to="/" class="text-teal-400 hover:text-teal-200 transition-colors">Voltar ao Início</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { fluencyData, type FluencyZone } from '../data/fluency-data';

const route = useRoute();
const userZoneId = computed(() => route.query.zone as string);

const currentZone = computed<FluencyZone | undefined>(
  () => fluencyData.find(zone => zone.id === userZoneId.value)
);

const nextZone = computed<FluencyZone | undefined>(() => {
  if (userZoneId.value === 'pre-agil') {
    return fluencyData[0];
  }
  const currentZoneIndex = fluencyData.findIndex(zone => zone.id === userZoneId.value);
  if (currentZoneIndex > -1 && currentZoneIndex < fluencyData.length - 1) {
    return fluencyData[currentZoneIndex + 1];
  }
  return undefined;
});

const isMaxLevel = computed(() => {
    return userZoneId.value === fluencyData[fluencyData.length - 1].id;
});

</script>
