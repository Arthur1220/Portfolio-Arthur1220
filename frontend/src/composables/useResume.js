import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export const RESUME_PT = '/Curriculo_Arthur_Azevedo_PT.pdf'
export const RESUME_EN = '/Curriculo_Arthur_Azevedo_EN.pdf'

export function useResume() {
  const { locale } = useI18n()

  const resumeUrl = computed(() => (locale.value === 'pt' ? RESUME_PT : RESUME_EN))

  return { resumeUrl }
}
