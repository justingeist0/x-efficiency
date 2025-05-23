<script lang="ts">
  import PricingModule from "./pricing_module.svelte"
  import { WebsiteName } from "./../../../config"

  type PlanFeatureRow = {
    name: string
    freeIncluded?: boolean
    proIncluded?: boolean
    freeString?: string
    proString?: string
    header?: boolean
  }
</script>

<svelte:head>
  <title>Pricing</title>
  <meta name="description" content="Pricing - {WebsiteName}" />
</svelte:head>

<div class="min-h-[70vh] pb-8 pt-[5vh] px-4">
  <h1 class="text-3xl font-bold text-center">Pricing</h1>
  <h2 class="text-xl text-center text-slate-500 mt-1 pb-3">
    a lot less work, more leads, more engagement
  </h2>

  <div class="w-full my-8">
    <PricingModule callToAction="Get Started" highlightedPlanId="pro" />
    <h1 class="text-2xl font-bold text-center mt-24">Pricing FAQ</h1>

    <div class="flex place-content-center">
      <div class="join join-vertical max-w-xl py-6 mx-auto">
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            Is this safe to use?
          </div>
          <div class="collapse-content">
            <p>
              Yup! It is undetectable by 𝕏. No one has ever been banned for
              using DM Dad.
            </p>
          </div>
        </div>
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            What do I need to get started?
          </div>
          <div class="collapse-content">
            <p>
              You need a 𝕏 premium account ($8/month) at least 6 months old to
              send up to 500 DMs every day. <br /><br />If you don't have an
              aged X premium account, you can only send around 20 messages per
              day before X prevents you from sending more messages. <br /><br
              />If you want to buy an aged premium account contact us.
            </p>
          </div>
        </div>
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            What happens if I buy Hands-Free or Full Managed?
          </div>
          <div class="collapse-content">
            <p>
              We get started within a few hours. We'll be in contact via message
              to get all the information we need. No call needed, but we can hop
              on a call if you want. Contact us if you have any questions.
            </p>
          </div>
        </div>
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            Can I get a refund?
          </div>
          <div class="collapse-content">
            <p>
              Yes, we have a 7 day no questions asked refund policy. Just get in
              contact with us, provide your email, and we'll refund you. Zero
              risk to move forward right now.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mt-8">
      <h2 class="text-xl font-bold mb-6">Got questions? Let's talk.</h2>
      <div class="flex gap-6 justify-center">
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
  </div>
</div>
