<template>
  <div class="max-w-3xl mx-auto my-10 p-5 text-center">
    <h1 class="text-4xl font-bold mb-6 text-teal-300">Quiz de Fluência Ágil</h1>

    <div class="text-left my-8 leading-relaxed bg-gray-800 p-6 rounded-lg">
      <p class="mb-4">
        O Modelo de Fluência Ágil, criado por Diana Larsen e James Shore, é um guia para ajudar equipes a entender e navegar sua jornada com o Ágil. Ele descreve a evolução de uma equipe através de quatro zonas distintas, cada uma com seus próprios benefícios, proficiências e desafios.
      </p>
      <p class="mb-4">
        Este quiz é baseado nesse modelo e irá ajudá-lo a identificar em qual zona de fluência sua equipe se encontra atualmente e o que é necessário para evoluir para o próximo nível.
      </p>
      <p>
        Para saber mais sobre o modelo original, visite o site oficial:
        <a href="https://www.agilefluency.org/" target="_blank" rel="noopener" class="text-teal-400 hover:text-teal-200 transition-colors">Agile Fluency Project</a>.
      </p>
    </div>

    <router-link to="/quiz" class="inline-block py-3 px-8 text-lg bg-teal-500 text-white no-underline rounded-md transition-colors duration-300 hover:bg-teal-600">Iniciar o Quiz</router-link>
  </div>
</template>

<script setup lang="ts">
</script>
