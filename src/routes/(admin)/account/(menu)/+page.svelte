<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"
  let { data } = $props()

  console.log(data)

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("home")
</script>

<svelte:head>
  <title>Account</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-1">Dashboard</h1>

<!-- <div class="relative w-full max-w-2xl aspect-video mt-4">
  <iframe
    class="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube.com/embed/XNOO9azmApw?si=GwTHKeKkhwHGCmMv"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div> -->

{#if !data.isActiveCustomer}
  <div class="alert alert-error max-w-lg mt-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      /></svg
    >
    <div>
      <div class="font-bold">You currently have no plan</div>
      <div class="my-2">
        You have not purchased a plan. X Efficiency is a premium software.
      </div>
      <div class="my-2">
        Please visit <a href="/account/billing" class="link">billing</a> and select
        plan to download X Efficiency.
      </div>
    </div>
  </div>
{/if}

{#if data.isActiveCustomer}
  <div class="alert alert-info max-w-lg mt-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <div>
      <div class="font-bold">Download & Installation Instructions</div>
      <div class="my-2">
        1. Download the X Efficiency extension by clicking the link below<br />
        2. Unzip the downloaded file<br />
        3. Open Chrome and go to chrome://extensions/<br />
        4. Enable "Developer mode" in the top right<br />
        5. Click "Load unpacked" and select the unzipped folder
      </div>
      <div class="my-2">
        <a
          href="https://www.dropbox.com/scl/fi/myeyg7vxusotx42jvzm6g/xefficiency.zip?rlkey=ahq2p5titj37w03nzrdoihiqe&st=ixrsrlj5&dl=0"
          target="_blank"
          class="link font-semibold">Download "X Efficiency" Web Extension</a
        >
      </div>
    </div>
  </div>
{/if}

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
