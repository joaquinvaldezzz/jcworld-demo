<template>
  <header class="relative shadow-xl">
    <div class="hidden sm:block sm:bg-jungle-green sm:text-sm sm:text-white">
      <div class="sm:container sm:flex sm:items-center sm:justify-between sm:py-4">
        <div class="flex items-center space-x-4 md:space-x-6">
          <div class="flex items-center">
            <span class="sr-only">Address</span>
            <svg class="h-6 w-6 stroke-current text-sunglow" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657 13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            </svg>
            <address class="ml-2 not-italic">Address</address>
          </div>

          <div class="flex items-center">
            <span class="sr-only">Email</span>
            <svg class="h-6 w-6 stroke-current text-sunglow" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="m3 8 7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
            </svg>
            <div class="ml-2">Email Address</div>
          </div>

          <div class="flex items-center">
            <span class="sr-only">Contact</span>
            <svg class="h-6 w-6 stroke-current text-sunglow" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div class="ml-2">(403) 460-3554</div>
          </div>
        </div>

        <div class="flex items-center space-x-4">
          <a class="fab fa-facebook-f fa-lg text-sunglow" href="#">
            <span class="sr-only">Facebook</span>
          </a>

          <a class="fab fa-instagram fa-lg text-sunglow" href="#">
            <span class="sr-only">Instagram</span>
          </a>

          <a class="fab fa-twitter fa-lg text-sunglow" href="#">
            <span class="sr-only">Twitter</span>
          </a>
        </div>
      </div>
    </div>

    <div class="container flex items-center">
      <button class="lg:hidden" id="mobile-nav-button">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 18h16M4 6h16H4Zm0 6h16H4Z" />
        </svg>
      </button>

      <a class="ml-4 py-4 md:py-2 lg:py-0" href="#">
        <span class="sr-only">JC World</span>
        <img class="h-16 w-16 md:h-20 md:w-20" src="/images/jcworld-logotype.png" alt="JC World" />
      </a>

      <nav class="ml-auto flex lg:items-center lg:space-x-4" role="menu" aria-label="Main Menu">
        <div class="hidden lg:flex lg:items-center lg:space-x-6 lg:font-bold">
          <a class="lg:block lg:py-10" href="/">Home</a>
          <a class="lg:block lg:py-10" href="#">Get Started</a>
          <a class="lg:block lg:py-10" href="#">Shop</a>
          <a class="lg:block lg:py-10" href="#">About Us</a>
          <a class="lg:block lg:py-10" href="/faq">FAQ</a>
          <a class="lg:block lg:py-10" href="#">Contact Us</a>
          <a class="lg:block lg:py-10" href="/blog">Blog</a>
        </div>
        <div class="hidden lg:block lg:select-none">&verbar;</div>
        <div class="flex items-center space-x-2 font-bold lg:space-x-4">
          <svg class="h-5 w-5 fill-current text-jungle-green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M3 1a1 1 0 0 0 0 2h1.22l.305 1.222a.997.997 0 0 0 .01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 0 0 0-2H6.414l1-1H14a1 1 0 0 0 .894-.553l3-6A1 1 0 0 0 17 3H6.28l-.31-1.243A1 1 0 0 0 5 1H3zm13 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM6.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
          </svg>
          <div>Cart</div>
          <div>(0)</div>
          <div>$0.00</div>
        </div>
      </nav>
    </div>

    <div class="fixed inset-x-2 top-2 z-20 hidden rounded-xl bg-white p-6 shadow-lg lg:hidden" id="mobile-navigation">
      <div class="flex items-center justify-between">
        <a href="#">
          <span class="sr-only">JC World</span>
          <img class="h-12 w-12" src="/images/jcworld-logotype.png" alt="JC World" />
        </a>

        <button id="mobile-close-button">
          <svg class="h-6 w-6" viewBox="0 0 24 24">
            <path stroke="#9ca3af" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 6 12 12M6 18 18 6 6 18Z" />
          </svg>
        </button>
      </div>

      <nav class="mt-6 space-y-1" aria-label="Mobile navigaion">
        <a class="-mx-3 block rounded-lg bg-slate-100 px-3 py-2" href="/">Home</a>
        <a class="-mx-3 block rounded-lg px-3 py-2 hover:bg-slate-50" href="#">Get Started</a>
        <a class="-mx-3 block rounded-lg px-3 py-2 hover:bg-slate-50" href="#">Shop</a>
        <a class="-mx-3 block rounded-lg px-3 py-2 hover:bg-slate-50" href="#">About Us</a>
        <a class="-mx-3 block rounded-lg px-3 py-2 hover:bg-slate-50" href="/faq">FAQ</a>
        <a class="-mx-3 block rounded-lg px-3 py-2 hover:bg-slate-50" href="#">Contact Us</a>
        <a class="-mx-3 block rounded-lg px-3 py-2 hover:bg-slate-50" href="/blog">Blog</a>
      </nav>
    </div>

    <div class="fixed inset-0 z-10 hidden h-screen w-screen bg-black/50 lg:hidden" id="mobile-nav-overlay" aria-label="Mobile navigation overlay"></div>
  </header>
</template>

<script>
function mobileNav() {
  const mobileNavButton = document.getElementById('mobile-nav-button')
  const mobileNavMenu = document.getElementById('mobile-navigation')
  const mobileCloseButton = document.getElementById('mobile-close-button')
  const mobileNavOverlay = document.getElementById('mobile-nav-overlay')

  mobileNavButton.addEventListener('click', () => {
    mobileNavMenu.classList.remove('hidden')
    mobileNavOverlay.classList.remove('hidden')
  })

  mobileCloseButton.addEventListener('click', () => {
    mobileNavMenu.classList.add('hidden')
    mobileNavOverlay.classList.add('hidden')
  })
}

export default {
  mounted: () => {
    mobileNav()
  },
}
</script>
