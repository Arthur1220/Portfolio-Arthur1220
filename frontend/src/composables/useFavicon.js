import { watch } from 'vue'
import { useThemeStore } from '@/stores/theme'

export function useFavicon() {
  const themeStore = useThemeStore()

  const updateFavicon = (themeStr) => {
    const isDark = themeStr === 'dark'
    const favicon = document.getElementById('favicon')
    if (favicon) {
      favicon.href = isDark ? '/favicon-dark.svg' : '/favicon-light.svg'
    }
  }

  watch(
    () => themeStore.theme,
    (newTheme) => updateFavicon(newTheme),
    { immediate: true }
  )
}
