<script lang="ts">
  import { page } from '$app/stores';
</script>

<section
   class="relative z-10 flex min-h-screen items-center justify-center overflow-hidden bg-white py-10"
   >
   <div class="container mx-auto">
      <div class="mx-auto w-full max-w-[570px] text-center">
         <span
            class="text-[100px] font-extrabold text-primary sm:text-[150px]"
            >
            {$page.status}
         </span>
         <h2 class="mb-3 text-2xl font-bold text-black sm:text-4xl">
            {#if $page.status === 404}
              Sayfa bulunamadı
            {:else}
              Bilinmeyen hata
            {/if}
         </h2>
         <p class="mx-auto mb-8 max-w-[490px] text-base text-body-color">
            {#if $page.status === 404}
              Aradığınız sayfa bulunamadı. Lütfen aradığınız sayfayı kontrol edin.
            {:else if $page.status === 500}
              {$page.error?.message}
            {/if}
         </p>
         <a
            href="/"
            class="rounded bg-primary py-3 px-8 text-base font-medium text-white hover:bg-opacity-90"
            >
            Ana Sayfaya Dön
         </a>
      </div>
   </div>
   <div class="absolute left-0 bottom-0 -z-10">
      <svg
         width="406"
         height="286"
         viewBox="0 0 406 286"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         >
         <g opacity="0.5">
            <rect
               opacity="0.5"
               x="56.25"
               y="110.344"
               width="116.719"
               height="116.438"
               stroke="url(#paint0_linear_3089_1382)"
               />
            <rect
               opacity="0.1"
               x="56.25"
               y="110.344"
               width="116.719"
               height="116.438"
               fill="url(#paint1_linear_3089_1382)"
               />
            <path
               opacity="0.5"
               d="M172.688 110.344L229.219 51V167.601L172.688 226.781V110.344Z"
               stroke="url(#paint2_linear_3089_1382)"
               />
            <path
               opacity="0.1"
               d="M172.688 110.344L229.219 51V167.601L172.688 226.781V110.344Z"
               fill="url(#paint3_linear_3089_1382)"
               />
            <path
               opacity="0.5"
               d="M0 169.619L56.25 110.344V226.85L0 286.125V169.619Z"
               stroke="url(#paint4_linear_3089_1382)"
               />
            <path
               opacity="0.1"
               d="M0 169.619L56.25 110.344V226.85L0 286.125V169.619Z"
               fill="url(#paint5_linear_3089_1382)"
               />
            <rect
               opacity="0.5"
               x="228.938"
               y="51.2812"
               width="119.25"
               height="116.438"
               stroke="url(#paint6_linear_3089_1382)"
               />
            <rect
               opacity="0.1"
               x="228.938"
               y="51.2812"
               width="119.25"
               height="116.438"
               fill="url(#paint7_linear_3089_1382)"
               />
            <path
               opacity="0.5"
               d="M347.906 51.2812L405 2V110.113L347.906 167.719V51.2812Z"
               stroke="url(#paint8_linear_3089_1382)"
               />
            <path
               opacity="0.1"
               d="M347.906 51.2812L405 2V110.113L347.906 167.719V51.2812Z"
               fill="url(#paint9_linear_3089_1382)"
               />
         </g>
         <defs>
            <linearGradient
               id="paint0_linear_3089_1382"
               x1="49.0781"
               y1="112.313"
               x2="148.922"
               y2="131.859"
               gradientUnits="userSpaceOnUse"
               >
               <stop stop-color="#4A6CF7" stop-opacity="0" />
               <stop offset="1" stop-color="#4A6CF7" />
            </linearGradient>
            <linearGradient
               id="paint1_linear_3089_1382"
               x1="179.141"
               y1="209.062"
               x2="32.6026"
               y2="145.47"
               gradientUnits="userSpaceOnUse"
               >
               <stop stop-color="#4A6CF7" />
               <stop offset="1" stop-color="#4A6CF7" stop-opacity="0" />
            </linearGradient>
            <linearGradient
               id="paint2_linear_3089_1382"
               x1="170.016"
               y1="125.25"
               x2="217.542"
               y2="125.507"
               gradientUnits="userSpaceOnUse"
               >
               <stop stop-color="#4A6CF7" stop-opacity="0" />
               <stop offset="1" stop-color="#4A6CF7" />
            </linearGradient>
            <linearGradient
               id="paint3_linear_3089_1382"
               x1="233.578"
               y1="113.156"
               x2="146.509"
               y2="143.95"
               gradientUnits="userSpaceOnUse"
               >
               <stop stop-color="#4A6CF7" />
               <stop offset="1" stop-color="#4A6CF7" stop-opacity="0" />
            </linearGradient>
            <linearGradient
               id="paint4_linear_3089_1382"
               x1="-3.45633"
               y1="113.316"
               x2="46.311"
               y2="116.426"
               gradientUnits="userSpaceOnUse"
               >
               <stop stop-color="#4A6CF7" stop-opacity="0" />
               <stop offset="1" stop-color="#4A6CF7" />
            </linearGradient>
            <linearGradient
               id="paint5_linear_3089_1382"
               x1="69.8907"
               y1="189.234"
               x2="84.0124"
               y2="249.947"
               gradientUnits="userSpaceOnUse"
               >
               <stop stop-color="#4A6CF7" />
               <stop offset="1" stop-color="#4A6CF7" stop-opacity="0" />
            </linearGradient>
            <linearGradient
               id="paint6_linear_3089_1382"
               x1="218.953"
               y1="157.453"
               x2="330.261"
               y2="148.369"
               gradientUnits="userSpaceOnUse"
               >
               <stop stop-color="#4A6CF7" stop-opacity="0" />
               <stop offset="1" stop-color="#4A6CF7" />
            </linearGradient>
            <linearGradient
               id="paint7_linear_3089_1382"
               x1="348.187"
               y1="46.6406"
               x2="280.112"
               y2="168.552"
               gradientUnits="userSpaceOnUse"
               >
               <stop stop-color="#4A6CF7" />
               <stop offset="1" stop-color="#4A6CF7" stop-opacity="0" />
            </linearGradient>
            <linearGradient
               id="paint8_linear_3089_1382"
               x1="329"
               y1="190"
               x2="369.525"
               y2="-29.8829"
               gradientUnits="userSpaceOnUse"
               >
               <stop stop-color="#4A6CF7" stop-opacity="0" />
               <stop offset="1" stop-color="#4A6CF7" />
            </linearGradient>
            <linearGradient
               id="paint9_linear_3089_1382"
               x1="409"
               y1="10"
               x2="331.729"
               y2="34.2741"
               gradientUnits="userSpaceOnUse"
               >
               <stop stop-color="#4A6CF7" />
               <stop offset="1" stop-color="#4A6CF7" stop-opacity="0" />
            </linearGradient>
         </defs>
      </svg>
   </div>
   <div class="absolute top-0 right-0 -z-10">
      <svg
         width="406"
         height="286"
         viewBox="0 0 406 286"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         >
         <g opacity="0.5">
            <rect
               opacity="0.5"
               x="57.25"
               y="108.344"
               width="116.719"
               height="116.438"
               stroke="url(#paint0_linear_3089_1393)"
               />
            <rect
               opacity="0.1"
               x="57.25"
               y="108.344"
               width="116.719"
               height="116.438"
               fill="url(#paint1_linear_3089_1393)"
               />
            <path
               opacity="0.5"
               d="M173.688 108.344L230.219 49V165.601L173.688 224.781V108.344Z"
               stroke="url(#paint2_linear_3089_1393)"
               />
            <path
               opacity="0.1"
               d="M173.688 108.344L230.219 49V165.601L173.688 224.781V108.344Z"
               fill="url(#paint3_linear_3089_1393)"
               />
            <path
               opacity="0.5"
               d="M1 167.619L57.25 108.344V224.85L1 284.125V167.619Z"
               stroke="url(#paint4_linear_3089_1393)"
               />
            <path
               opacity="0.1"
               d="M1 167.619L57.25 108.344V224.85L1 284.125V167.619Z"
               fill="url(#paint5_linear_3089_1393)"
               />
            <rect
               opacity="0.5"
               x="229.938"
               y="49.2812"
               width="119.25"
               height="116.438"
               stroke="url(#paint6_linear_3089_1393)"
               />
            <rect
               opacity="0.1"
               x="229.938"
               y="49.2812"
               width="119.25"
               height="116.438"
               fill="url(#paint7_linear_3089_1393)"
               />
            <path
               opacity="0.5"
               d="M348.906 49.2812L406 0V108.113L348.906 165.719V49.2812Z"
               stroke="url(#paint8_linear_3089_1393)"
               />
            <path
               opacity="0.1"
               d="M348.906 49.2812L406 0V108.113L348.906 165.719V49.2812Z"
               fill="url(#paint9_linear_3089_1393)"
               />
         </g>
         <defs>
            <linearGradient
               id="paint0_linear_3089_1393"
               x1="50.0781"
               y1="110.313"
               x2="149.922"
               y2="129.859"
               gradientUnits="userSpaceOnUse"
               >
               <stop stop-color="#3056D3" stop-opacity="0" />
               <stop offset="1" stop-color="#4A6CF7" />
            </linearGradient>
            <linearGradient
               id="paint1_linear_3089_1393"
               x1="180.141"
               y1="207.062"
               x2="33.6026"
               y2="143.47"
               gradientUnits="userSpaceOnUse"
               >
               <stop stop-color="#3056D3" />
               <stop offset="1" stop-color="#4A6CF7" stop-opacity="0" />
            </linearGradient>
            <linearGradient
               id="paint2_linear_3089_1393"
               x1="171.016"
               y1="123.25"
               x2="218.542"
               y2="123.507"
               gradientUnits="userSpaceOnUse"
               >
               <stop stop-color="#3056D3" stop-opacity="0" />
               <stop offset="1" stop-color="#4A6CF7" />
            </linearGradient>
            <linearGradient
               id="paint3_linear_3089_1393"
               x1="234.578"
               y1="111.156"
               x2="147.509"
               y2="141.95"
               gradientUnits="userSpaceOnUse"
               >
               <stop stop-color="#3056D3" />
               <stop offset="1" stop-color="#4A6CF7" stop-opacity="0" />
            </linearGradient>
            <linearGradient
               id="paint4_linear_3089_1393"
               x1="85.5"
               y1="71.5"
               x2="100.174"
               y2="270.716"
               gradientUnits="userSpaceOnUse"
               >
               <stop stop-color="#3056D3" stop-opacity="0" />
               <stop offset="1" stop-color="#3056D3" />
            </linearGradient>
            <linearGradient
               id="paint5_linear_3089_1393"
               x1="70.8907"
               y1="187.234"
               x2="85.0124"
               y2="247.947"
               gradientUnits="userSpaceOnUse"
               >
               <stop stop-color="#3056D3" />
               <stop offset="1" stop-color="#4A6CF7" stop-opacity="0" />
            </linearGradient>
            <linearGradient
               id="paint6_linear_3089_1393"
               x1="219.953"
               y1="155.453"
               x2="331.261"
               y2="146.369"
               gradientUnits="userSpaceOnUse"
               >
               <stop stop-color="#3056D3" stop-opacity="0" />
               <stop offset="1" stop-color="#4A6CF7" />
            </linearGradient>
            <linearGradient
               id="paint7_linear_3089_1393"
               x1="349.187"
               y1="44.6406"
               x2="281.112"
               y2="166.552"
               gradientUnits="userSpaceOnUse"
               >
               <stop stop-color="#3056D3" />
               <stop offset="1" stop-color="#4A6CF7" stop-opacity="0" />
            </linearGradient>
            <linearGradient
               id="paint8_linear_3089_1393"
               x1="394.75"
               y1="64.3284"
               x2="409.531"
               y2="110.901"
               gradientUnits="userSpaceOnUse"
               >
               <stop stop-color="#3056D3" stop-opacity="0" />
               <stop offset="1" stop-color="#4A6CF7" />
            </linearGradient>
            <linearGradient
               id="paint9_linear_3089_1393"
               x1="410"
               y1="8.00001"
               x2="332.729"
               y2="32.2741"
               gradientUnits="userSpaceOnUse"
               >
               <stop stop-color="#3056D3" />
               <stop offset="1" stop-color="#4A6CF7" stop-opacity="0" />
            </linearGradient>
         </defs>
      </svg>
   </div>
</section>
