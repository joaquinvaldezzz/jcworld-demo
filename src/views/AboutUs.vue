<template>
  <main>
    <section class="py-8 sm:py-12 md:py-16 lg:py-20">
      <div class="container">
        <div class="sm:mx-auto sm:max-w-sm md:max-w-none lg:max-w-2xl xl:max-w-4xl" role="grid">
          <div class="grid gap-8 md:grid-cols-2 md:items-center" role="row">
            <div role="gridcell">
              <div class="aspect-video rounded-2xl bg-slate-400"></div>
              <!-- Replace this `div` with an `img` tag. -->
            </div>

            <div role="gridcell">
              <div class="rounded-2xl bg-alice-blue p-6">
                <h3 class="text-xl font-bold lg:text-2xl">Lorem ipsum dolor sit amet consectetur.</h3>
                <p class="mt-4 text-grey">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quis soluta ipsum accusamus dolores nihil vitae voluptate, nostrum incidunt veniam expedita modi eveniet ex aliquam consequuntur animi laborum magnam consectetur?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-8 sm:py-12 md:py-16 lg:py-20">
      <div class="container">
        <div class="text-center text-sm uppercase tracking-wider">Set consectetur</div>
        <h2 class="text-center font-display text-2xl uppercase md:text-3xl lg:mt-1 lg:text-4xl">Lorem ipsum dolor</h2>
        <p class="mt-2 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, non!</p>

        <div class="mt-8 sm:mx-auto sm:max-w-sm md:mt-16 md:max-w-none lg:max-w-2xl xl:max-w-4xl" role="grid">
          <div class="grid gap-8 md:grid-cols-2 md:items-center" role="row">
            <div role="gridcell">
              <img src="/images/jc-world-package.png" alt="JC World" />
            </div>

            <div role="gridcell">
              <ul class="space-y-4">
                <li class="flex items-center">
                  <svg class="h-6 w-6 flex-shrink-0 stroke-current text-maya-blue" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.886 12.514 3.086 3.086 5.142-6.171" />
                    <path stroke-width="2" d="M12 22.286c5.68 0 10.286-4.605 10.286-10.286C22.286 6.32 17.68 1.714 12 1.714S1.714 6.32 1.714 12 6.319 22.286 12 22.286Z" />
                  </svg>
                  <span class="ml-4 text-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptates dolores doloremque.</span>
                </li>

                <li class="flex items-center">
                  <svg class="h-6 w-6 flex-shrink-0 stroke-current text-maya-blue" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.886 12.514 3.086 3.086 5.142-6.171" />
                    <path stroke-width="2" d="M12 22.286c5.68 0 10.286-4.605 10.286-10.286C22.286 6.32 17.68 1.714 12 1.714S1.714 6.32 1.714 12 6.319 22.286 12 22.286Z" />
                  </svg>
                  <span class="ml-4 text-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptates dolores doloremque.</span>
                </li>

                <li class="flex items-center">
                  <svg class="h-6 w-6 flex-shrink-0 stroke-current text-maya-blue" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.886 12.514 3.086 3.086 5.142-6.171" />
                    <path stroke-width="2" d="M12 22.286c5.68 0 10.286-4.605 10.286-10.286C22.286 6.32 17.68 1.714 12 1.714S1.714 6.32 1.714 12 6.319 22.286 12 22.286Z" />
                  </svg>
                  <span class="ml-4 text-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptates dolores doloremque.</span>
                </li>

                <li class="flex items-center">
                  <svg class="h-6 w-6 flex-shrink-0 stroke-current text-maya-blue" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.886 12.514 3.086 3.086 5.142-6.171" />
                    <path stroke-width="2" d="M12 22.286c5.68 0 10.286-4.605 10.286-10.286C22.286 6.32 17.68 1.714 12 1.714S1.714 6.32 1.714 12 6.319 22.286 12 22.286Z" />
                  </svg>
                  <span class="ml-4 text-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptates dolores doloremque.</span>
                </li>
              </ul>
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
    document.title = 'About Us'
  },
}
</script>
