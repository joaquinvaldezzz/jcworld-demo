<template>
  <main>
    <section class="py-8 sm:py-12 md:py-16 lg:py-20">
      <div class="container">
        <div class="xl:mx-auto xl:max-w-5xl" role="grid">
          <div class="grid gap-8 md:grid-cols-2 md:items-center xl:gap-16" role="row">
            <div role="gridcell">
              <h3 class="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">Send us a message</h3>
              <p class="mt-2 text-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis mollitia aperiam accusamus ad beatae aliquam.</p>
              <div class="mt-4 inline-grid gap-4 sm:grid-cols-3 md:grid-cols-1">
                <a class="inline-flex items-center" href="#">
                  <div class="h-6 w-6">
                    <i class="fab fa-facebook fa-xl text-maya-blue">
                      <span class="sr-only">Facebook</span>
                    </i>
                  </div>

                  <div class="ml-4">
                    <h4 class="text-lg font-bold md:text-xl">Facebook</h4>
                    <div class="text-sm text-grey">Description</div>
                  </div>
                </a>

                <a class="inline-flex items-center" href="#">
                  <div class="h-6 w-6">
                    <i class="fab fa-instagram fa-xl text-maya-blue">
                      <span class="sr-only">Instagram</span>
                    </i>
                  </div>

                  <div class="ml-4">
                    <h4 class="text-lg font-bold md:text-xl">Instagram</h4>
                    <div class="text-sm text-grey">Description</div>
                  </div>
                </a>

                <a class="inline-flex items-center" href="#">
                  <div class="h-6 w-6">
                    <i class="fab fa-twitter fa-xl text-maya-blue">
                      <span class="sr-only">Twitter</span>
                    </i>
                  </div>

                  <div class="ml-4">
                    <h4 class="text-lg font-bold md:text-xl">Twitter</h4>
                    <div class="text-sm text-grey">Description</div>
                  </div>
                </a>

                <a class="inline-flex items-center" href="#">
                  <div class="h-6 w-6">
                    <i class="fas fa-envelope fa-xl text-maya-blue">
                      <span class="sr-only">Email us</span>
                    </i>
                  </div>

                  <div class="ml-4">
                    <h4 class="text-lg font-bold md:text-xl">Email us</h4>
                    <div class="text-sm text-grey">jcworld@email.com</div>
                  </div>
                </a>

                <a class="inline-flex items-center" href="#">
                  <div class="h-6 w-6">
                    <i class="fas fa-phone fa-xl text-maya-blue">
                      <span class="sr-only">Phone Number</span>
                    </i>
                  </div>

                  <div class="ml-4">
                    <h4 class="text-lg font-bold md:text-xl">Phone number</h4>
                    <div class="text-sm text-grey">+123 456 789</div>
                  </div>
                </a>
              </div>
            </div>

            <div role="gridcell">
              <form class="grid gap-4" role="grid">
                <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2" role="row">
                  <div role="gridcell">
                    <label class="block text-sm font-medium" for="full-name">Full name</label>
                    <input class="mt-2 block w-full rounded-full border border-grey/50 px-4 py-2 text-sm focus:border-alice-blue focus:outline-none focus:ring-2 focus:ring-maya-blue focus:ring-offset-2" id="full-name" type="text" placeholder="e.g., John Smith" />
                  </div>

                  <div role="gridcell">
                    <label class="block text-sm font-medium" for="email">Email</label>
                    <input class="mt-2 block w-full rounded-full border border-grey/50 px-4 py-2 text-sm focus:border-alice-blue focus:outline-none focus:ring-2 focus:ring-maya-blue focus:ring-offset-2" id="email" type="email" placeholder="e.g., johnsmith@email.com" />
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium" for="phone-number">Phone Number</label>
                  <input class="mt-2 block w-full rounded-full border border-grey/50 px-4 py-2 text-sm focus:border-alice-blue focus:outline-none focus:ring-2 focus:ring-maya-blue focus:ring-offset-2" id="phone-number" type="text" placeholder="e.g., (406) 555-0120" />
                </div>

                <div>
                  <label class="block text-sm font-medium" for="message">Message</label>
                  <textarea class="mt-2 block h-48 w-full rounded-xl border border-grey/50 p-3 text-sm focus:border-alice-blue focus:outline-none focus:ring-2 focus:ring-maya-blue focus:ring-offset-2" id="message" placeholder="Type your message..."></textarea>
                </div>

                <div>
                  <button class="block w-full rounded-full bg-maya-blue p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-maya-blue/50 focus:ring-offset-2">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  mounted: () => {
    document.title = 'Contact Us'
  },
}
</script>
