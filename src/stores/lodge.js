import { ref } from 'vue'
import { defineStore } from 'pinia'

import LodgeService from '@/services/lodge'
const lodgeService = new LodgeService()

export const useLodgeStore = defineStore('lodge', () => {
  const lodgeInfo = ref();
  const photos = ref();
  const logo = ref();

  const fetchLodge = async () => {
    const data = await lodgeService.fetchLodge();
    lodgeInfo.value = data;
  };

  const fetchImages = async () => {
    const data = await lodgeService.fetchImages();
    photos.value = data.data.photos;
    logo.value = data.data.logo;

  };

  return { fetchImages, fetchLodge, lodgeInfo, photos, logo };
});
