import { onMounted, ref } from 'vue'
import { GITHUB_REPO } from '@/data/site'

/**
 * Best-effort GitHub star count. Uses the public, unauthenticated REST API
 * (no key, no backend). On any failure it stays null and the UI shows a tasteful
 * placeholder instead — the site never depends on this request.
 */
export function useGitHubStars() {
  const stars = ref<number | null>(null)
  const loading = ref(true)

  onMounted(async () => {
    try {
      const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}`, {
        headers: { Accept: 'application/vnd.github+json' },
      })
      if (!res.ok) throw new Error(String(res.status))
      const data = await res.json()
      if (typeof data.stargazers_count === 'number') stars.value = data.stargazers_count
    } catch {
      stars.value = null
    } finally {
      loading.value = false
    }
  })

  return { stars, loading }
}
