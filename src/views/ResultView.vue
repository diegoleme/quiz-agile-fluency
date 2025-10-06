<template>
  <div class="p-5 max-w-4xl mx-auto my-10">
    <div class="bg-gray-800 p-6 rounded-lg">
      <div v-if="currentZone">
        <h1 class="text-3xl font-bold mb-2 text-teal-300">
          Sua Zona de Fluência: {{ currentZone.name }}
        </h1>
        <p class="text-lg">{{ currentZone.summary }}</p>
      </div>
      <div v-else>
        <h1 class="text-3xl font-bold mb-2 text-amber-300">Estágio pré-ágil</h1>
        <p class="text-lg">
          Sua equipe está no estágio inicial. O primeiro passo na jornada de fluência é a zona
          Focar.
        </p>
      </div>
    </div>

    <div v-if="nextZone" class="mt-10 border-t border-gray-700 pt-8">
      <h2 class="text-2xl font-bold mb-4">
        Próximo Nível: <span class="text-teal-300">{{ nextZone.name }}</span>
      </h2>
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
            <li v-for="(investment, index) in nextZone.investments" :key="index">
              {{ investment }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div v-if="isMaxLevel" class="mt-10 text-center">
      <h2 class="text-2xl font-bold text-green-400">Parabéns!</h2>
      <p class="text-lg">
        Sua equipe alcançou a fluência máxima no modelo. O desafio agora é manter e disseminar essa
        cultura!
      </p>
    </div>

    <div class="text-center mt-12">
      <router-link to="/" class="text-teal-400 hover:text-teal-200 transition-colors"
        >Voltar ao Início</router-link
      >
    </div>

    <div class="mt-8 bg-gray-800 p-6 rounded-lg text-center">
      <p class="text-lg text-gray-300 mb-4">Gostou do quiz? Conecte-se para mais conteúdos</p>
      <a
        href="https://www.linkedin.com/in/diegoleme/"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center bg-[#0A66C2] text-white font-bold py-2 px-4 rounded hover:bg-[#005E9E] transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-supported-dps="24x24"
          fill="currentColor"
          class="mr-2"
          width="24"
          height="24"
        >
          <path
            d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
          ></path>
        </svg>
        Seguir no LinkedIn
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { fluencyData, type FluencyZone } from '../data/fluency-data'

const route = useRoute()
const userZoneId = computed(() => route.query.zone as string)

const currentZone = computed<FluencyZone | undefined>(() =>
  fluencyData.find((zone) => zone.id === userZoneId.value),
)

const nextZone = computed<FluencyZone | undefined>(() => {
  if (userZoneId.value === 'pre-agil') {
    return fluencyData[0]
  }
  const currentZoneIndex = fluencyData.findIndex((zone) => zone.id === userZoneId.value)
  if (currentZoneIndex > -1 && currentZoneIndex < fluencyData.length - 1) {
    return fluencyData[currentZoneIndex + 1]
  }
  return undefined
})

const isMaxLevel = computed(() => {
  const lastZone = fluencyData[fluencyData.length - 1]
  return !!userZoneId.value && !!lastZone && userZoneId.value === lastZone.id
})
</script>
