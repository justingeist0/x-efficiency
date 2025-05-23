<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("home")
</script>

<svelte:head>
  <title>Account</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-1">Dashboard</h1>

<p>Analytics + database coming soon.</p>
<a
  href="https://chromewebstore.google.com/detail/x-efficiency/klgcdbmldddogdpemiedckcmebgmpiml"
  target="_blank"
  class="inline-block mt-6 group"
>
  <button
    class="btn btn-primary btn-lg gap-2 group-hover:btn-primary-focus transition-all duration-200 flex-col p-8 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md rounded-xl"
  >
    <div class="flex items-center gap-2">
      <img src="/images/chromelogo.svg" alt="Chrome Logo" class="w-6 h-6" />
      Download Chrome Extension
    </div>
    <div class="text-sm opacity-80">Refresh x.com after installing</div>
  </button>
</a>

<div class="mt-8">
  <h2 class="text-xl font-bold mb-6">
    Need help or have requests? Let's talk.
  </h2>
  <div class="flex gap-6">
    <a
      href="https://t.me/justingeist"
      target="_blank"
      class="flex flex-col items-center hover:text-primary transition-colors"
    >
      <svg
        width="64px"
        height="64px"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g><g id="SVGRepo_iconCarrier">
          <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7225)"
          ></circle>
          <path
            d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z"
            fill="white"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_87_7225"
              x1="16"
              y1="2"
              x2="16"
              y2="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#37BBFE"></stop>
              <stop offset="1" stop-color="#007DBB"></stop>
            </linearGradient>
          </defs>
        </g></svg
      >
      <span class="text-sm mt-2">Telegram</span>
    </a>
    <a
      href="https://x.com/fantasmadev"
      target="_blank"
      class="flex flex-col items-center hover:text-primary transition-colors"
    >
      <svg class="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        />
      </svg>
      <span class="text-sm mt-2">𝕏</span>
    </a>
    <a
      href="/contact_us"
      class="flex flex-col items-center hover:text-primary transition-colors"
    >
      <svg
        class="w-16 h-16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 4-10 8L2 4" />
      </svg>
      <span class="text-sm mt-2">Email</span>
    </a>
  </div>
</div>
