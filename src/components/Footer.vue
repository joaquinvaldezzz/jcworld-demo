<template>
  <footer class="bg-maya-blue py-8 text-white sm:py-12 md:py-16">
    <div class="container">
      <div class="md:flex md:justify-between">
        <div>
          <img class="h-2w-24 w-24" src="/images/jcworld-logotype.png" alt="JC World" />
          <p class="mt-2 text-xl">Subscribe and stay in the loop!</p>
          <form class="mt-2 flex flex-col sm:flex-row" action="/">
            <input class="inline-block bg-white/50 px-3 py-2 text-black shadow-sm focus:outline-none" type="email" />
            <button class="inline-block bg-sunglow px-3 py-2 uppercase shadow-sm" type="submit">Subscribe</button>
          </form>
        </div>

        <div class="mt-6 md:mt-0" role="grid">
          <div class="grid gap-4 md:grid-cols-2 md:gap-6" role="row">
            <div role="gridcell">
              <h2 class="text-xl font-bold uppercase tracking-wide">Navigation</h2>
              <nav class="mt-2 inline-flex flex-col space-y-1" role="menu" aria-label="Navigation Menu">
                <a href="#" role="menuitem">Get Started</a>
                <a href="#" role="menuitem">What's Inside</a>
                <a href="#" role="menuitem">Shop</a>
                <a href="#" role="menuitem">About Us</a>
                <a href="#" role="menuitem">Blog</a>
              </nav>
            </div>

            <div role="gridcell">
              <h2 class="text-xl font-bold uppercase tracking-wide">Information</h2>
              <nav class="mt-2 inline-flex flex-col space-y-1" role="menu" aria-label="Information Menu">
                <a href="#" role="menuitem">Contact Us</a>
                <a href="#" role="menuitem">FAQ</a>
                <a href="#" role="menuitem">Terms &amp; Conditions</a>
                <a href="#" role="menuitem">Privacy Policy</a>
                <a href="#" role="menuitem">Disclaimer</a>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <p class="mt-8 text-center text-sm md:mt-16 lg:mt-20">Copyright 2022, JC World &verbar; Designed by Stephanie Aurelio</p>
    </div>
  </footer>
</template>
