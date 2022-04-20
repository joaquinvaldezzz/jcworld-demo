<template>
  <footer class="bg-maya-blue py-8 text-white">
    <div class="container">
      <div class="md:flex md:justify-between">
        <div>
          <img class="h-2w-24 w-24" src="/images/jcworld-logotype.png" alt="JC World" />
          <p class="mt-2 text-xl">Subscribe and stay in the loop!</p>
          <form class="mt-2 flex" action="/">
            <input class="inline-block bg-white/50 px-3 py-2 text-black focus:outline-none" type="email" />
            <button class="inline-block bg-sunglow px-3 py-2 uppercase" type="submit">Subscribe</button>
          </form>
        </div>

        <div class="mt-6" role="grid">
          <div class="grid gap-4 md:grid-cols-2 md:gap-6" role="row">
            <div role="gridcell">
              <h2 class="text-xl font-bold uppercase tracking-wide">Navigation</h2>
              <nav class="mt-2 flex flex-col space-y-1" role="menu" aria-label="Navigation Menu">
                <a class="" href="#" role="menuitem">Get Started</a>
                <a class="" href="#" role="menuitem">What's Inside</a>
                <a class="" href="#" role="menuitem">Shop</a>
                <a class="" href="#" role="menuitem">About Us</a>
                <a class="" href="#" role="menuitem">Blog</a>
              </nav>
            </div>

            <div role="gridcell">
              <h2 class="text-xl font-bold uppercase tracking-wide">Information</h2>
              <nav class="mt-2 flex flex-col space-y-1" role="menu" aria-label="Information Menu">
                <a class="" href="#" role="menuitem">Contact Us</a>
                <a class="" href="#" role="menuitem">FAQ</a>
                <a class="" href="#" role="menuitem">Terms &amp; Conditions</a>
                <a class="" href="#" role="menuitem">Privacy Policy</a>
                <a class="" href="#" role="menuitem">Disclaimer</a>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <p class="mt-8 text-center text-sm">Copyright 2022, JC World &verbar; Designed by Stephanie Aurelio</p>
    </div>
  </footer>
</template>
