<script lang="ts">
  import { invalidate } from "$app/navigation"
  import { onMount } from "svelte"

  let { data, children } = $props()

  let { supabase, session } = $state(data)
  $effect(() => {
    ;({ supabase, session } = data)
  })

  onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate("supabase:auth")
        console.log("Supabase auth stuff", _session?.access_token)
      }
    })
    if (typeof window !== "undefined") {
      supabase.auth.getSession().then(({ data: { session } }) => {
        console.log("Supabase getSessionCall", session?.access_token)
        if (session?.access_token) {
          window.postMessage(
            {
              source: "supabase-session",
              access_token: session.access_token,
            },
            "*",
          )
        }
      })
    }

    return () => data.subscription.unsubscribe()
  })
</script>

{@render children?.()}
