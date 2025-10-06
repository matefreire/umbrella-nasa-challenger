<script setup lang="ts">
  import { ref } from 'vue';
  import VueApexCharts from 'vue3-apexcharts';

  // Dados reais da NASA fornecidos
  const months = [
    'Out/24',
    'Nov/24',
    'Dez/24',
    'Jan/25',
    'Fev/25',
    'Mar/25',
    'Abr/25',
    'Mai/25',
    'Jun/25',
    'Jul/25',
    'Ago/25',
    'Set/25',
  ];

  const surfacePrecipitation = [
    0.0538, 0.0655, 0.0772, 0.0573, 0.0451, 0.0592, 0.0406, 0.0095, 0.0015,
    0.0007, 0.0024, 0.0211,
  ];
  const convectivePrecipitation = [
    0.0384, 0.0468, 0.0487, 0.0378, 0.0298, 0.0382, 0.027, 0.0055, 0.0007,
    0.0003, 0.0014, 0.0136,
  ];

  // Séries de dados
  const series = ref([
    {
      name: 'Precipitação Superfície',
      data: surfacePrecipitation,
    },
    {
      name: 'Precipitação Convectiva',
      data: convectivePrecipitation,
    },
  ]);

  // Configurações do gráfico
  const chartOptions = ref({
    chart: {
      type: 'area',
      background: 'transparent',
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
      },
    },
    colors: ['#3AA7FF', '#69F0AE'],
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.5,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
    dataLabels: { enabled: false },
    grid: {
      borderColor: 'rgba(255, 255, 255, 0.1)',
      strokeDashArray: 4,
    },
    legend: {
      position: 'top',
      labels: { colors: '#ffffff' },
    },
    xaxis: {
      categories: months,
      labels: {
        style: {
          colors: '#E0F2F7',
          fontSize: '12px',
        },
      },
      axisBorder: { color: '#ffffff' },
      axisTicks: { color: '#ffffff' },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#E0F2F7',
          fontSize: '12px',
        },
        formatter: (val: number) => val.toFixed(3),
      },
    },
    tooltip: {
      theme: 'dark',
      y: {
        formatter: (val: number) => `${val.toFixed(4)} mm`,
      },
    },
  });
</script>

<template>
  <div class="w-full h-[400px] bg-[#0A1931] rounded-2xl p-4">
    <VueApexCharts
      type="area"
      height="100%"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<style scoped>
  /* Sombra suave para destacar o gráfico */
  div {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
</style>
