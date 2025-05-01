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
              using X Efficiency.
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
            What happens if I buy Empire or Overlord?
          </div>
          <div class="collapse-content">
            <p>
              We get started within a few hours. We'll be in contact via message
              to get all the information we need. No call needed, but we can hop
              on a call if you want. Contact us via telegram or whatsapp if you
              have any questions.
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
          href="https://wa.me/+1234567890"
          target="_blank"
          class="flex flex-col items-center hover:text-primary transition-colors"
        >
          <svg
            version="1.1"
            id="Icons"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32 32"
            xml:space="preserve"
            width="64px"
            height="64px"
            fill="#000000"
            ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g><g id="SVGRepo_iconCarrier">
              <style type="text/css">
                .st0 {
                  fill: #ffffff;
                }
                .st1 {
                  fill: #3a559f;
                }
                .st2 {
                  fill: #f4f4f4;
                }
                .st3 {
                  fill: #ff0084;
                }
                .st4 {
                  fill: #0063db;
                }
                .st5 {
                  fill: #00aced;
                }
                .st6 {
                  fill: #ffec06;
                }
                .st7 {
                  fill: #ff0000;
                }
                .st8 {
                  fill: #25d366;
                }
                .st9 {
                  fill: #0088ff;
                }
                .st10 {
                  fill: #314358;
                }
                .st11 {
                  fill: #ee6996;
                }
                .st12 {
                  fill: #01aef3;
                }
                .st13 {
                  fill: #fffeff;
                }
                .st14 {
                  fill: #f06a35;
                }
                .st15 {
                  fill: #00adef;
                }
                .st16 {
                  fill: #1769ff;
                }
                .st17 {
                  fill: #1ab7ea;
                }
                .st18 {
                  fill: #6001d1;
                }
                .st19 {
                  fill: #e41214;
                }
                .st20 {
                  fill: #05ce78;
                }
                .st21 {
                  fill: #7b519c;
                }
                .st22 {
                  fill: #ff4500;
                }
                .st23 {
                  fill: #00f076;
                }
                .st24 {
                  fill: #ffc900;
                }
                .st25 {
                  fill: #00d6ff;
                }
                .st26 {
                  fill: #ff3a44;
                }
                .st27 {
                  fill: #ff6a36;
                }
                .st28 {
                  fill: #0061fe;
                }
                .st29 {
                  fill: #f7981c;
                }
                .st30 {
                  fill: #ee1b22;
                }
                .st31 {
                  fill: #ef3561;
                }
                .st32 {
                  fill: none;
                  stroke: #ffffff;
                  stroke-width: 2;
                  stroke-miterlimit: 10;
                }
                .st33 {
                  fill: #0097d3;
                }
                .st34 {
                  fill: #01308a;
                }
                .st35 {
                  fill: #019cde;
                }
                .st36 {
                  fill: #ffd049;
                }
                .st37 {
                  fill: #16a05d;
                }
                .st38 {
                  fill: #4486f4;
                }
                .st39 {
                  fill: none;
                }
                .st40 {
                  fill: #34a853;
                }
                .st41 {
                  fill: #4285f4;
                }
                .st42 {
                  fill: #fbbc05;
                }
                .st43 {
                  fill: #ea4335;
                }
              </style>
              <path
                class="st8"
                d="M17,0C8.7,0,2,6.7,2,15c0,3.4,1.1,6.6,3.2,9.2l-2.1,6.4c-0.1,0.4,0,0.8,0.3,1.1C3.5,31.9,3.8,32,4,32 c0.1,0,0.3,0,0.4-0.1l6.9-3.1C13.1,29.6,15,30,17,30c8.3,0,15-6.7,15-15S25.3,0,17,0z"
              ></path>
              <path
                class="st0"
                d="M25.7,20.5c-0.4,1.2-1.9,2.2-3.2,2.4C22.2,23,21.9,23,21.5,23c-0.8,0-2-0.2-4.1-1.1c-2.4-1-4.8-3.1-6.7-5.8 L10.7,16C10.1,15.1,9,13.4,9,11.6c0-2.2,1.1-3.3,1.5-3.8c0.5-0.5,1.2-0.8,2-0.8c0.2,0,0.3,0,0.5,0c0.7,0,1.2,0.2,1.7,1.2l0.4,0.8 c0.3,0.8,0.7,1.7,0.8,1.8c0.3,0.6,0.3,1.1,0,1.6c-0.1,0.3-0.3,0.5-0.5,0.7c-0.1,0.2-0.2,0.3-0.3,0.3c-0.1,0.1-0.1,0.1-0.2,0.2 c0.3,0.5,0.9,1.4,1.7,2.1c1.2,1.1,2.1,1.4,2.6,1.6l0,0c0.2-0.2,0.4-0.6,0.7-0.9l0.1-0.2c0.5-0.7,1.3-0.9,2.1-0.6 c0.4,0.2,2.6,1.2,2.6,1.2l0.2,0.1c0.3,0.2,0.7,0.3,0.9,0.7C26.2,18.5,25.9,19.8,25.7,20.5z"
              ></path>
            </g></svg
          >
          <span class="text-sm mt-2">WhatsApp</span>
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
