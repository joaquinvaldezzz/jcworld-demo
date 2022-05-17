<template>
  <main>
    <section class="relative bg-charlotte py-32 sm:py-48 lg:py-60 xl:py-80">
      <img class="absolute inset-x-0 top-0 select-none lg:mx-auto lg:max-w-4xl xl:max-w-6xl" src="/images/clouds-and-stars.png" alt="Clouds and stars" />
      <img class="absolute inset-x-0 bottom-0 select-none" src="/svg/clouds.svg" alt="Clouds" />
      <div class="container relative text-vulcan">
        <div class="text-sm uppercase tracking-wider">Lorem ipsum dolor sit.</div>
        <h1 class="mt-2 text-4xl font-bold uppercase tracking-tight text-vulcan md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">Blog Posts</h1>
      </div>
    </section>

    <section class="py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-24">
      <div class="container">
        <div class="md:mx-auto md:max-w-md lg:max-w-2xl xl:max-w-3xl">
          <h2 class="text-2xl font-bold text-maya-blue lg:text-4xl">Latest Posts</h2>
          <div class="mt-4 lg:mt-8" role="grid">
            <div class="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12" role="row">
              <div role="gridcell">
                <img class="rounded-2xl" src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80" alt="Boy sitting on white cloth surrounded by toys" />
              </div>

              <div role="gridcell">
                <h3 class="text-xl font-bold">Lorem ipsum dolor sit amet consectetur.</h3>
                <p class="mt-2 text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsum adipisci ipsa.</p>
                <div class="mt-4">
                  <div class="text-sm font-semibold">Posted on</div>
                  <div class="text-sm font-semibold text-maya-blue" aria-label="Date posted">October 5, 2022</div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8 text-xl font-bold">Categories</div>
          <div class="mt-4 flex space-x-4">
            <button class="rounded-full bg-light-cyan px-4 py-2 text-sm font-medium text-dodger-blue focus:ring-2 focus:ring-dodger-blue focus:ring-offset-2">Filter</button>
            <button class="rounded-full bg-light-cyan px-4 py-2 text-sm font-medium text-dodger-blue focus:ring-2 focus:ring-dodger-blue focus:ring-offset-2">Filter</button>
            <button class="rounded-full bg-light-cyan px-4 py-2 text-sm font-medium text-dodger-blue focus:ring-2 focus:ring-dodger-blue focus:ring-offset-2">Filter</button>
          </div>

          <h2 class="mt-8 text-2xl font-bold lg:text-3xl">Featured Posts</h2>
          <div class="mt-4" role="grid">
            <div class="grid gap-8 lg:grid-cols-2 lg:gap-12" role="row">
              <a href="#" role="gridcell">
                <h3 class="text-xl font-bold">Lorem ipsum dolor sit amet consectetur.</h3>
                <p class="mt-2 text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsum adipisci ipsa.</p>
                <div class="mt-4">
                  <div class="text-sm font-semibold">Posted on</div>
                  <div class="text-sm font-semibold text-maya-blue" aria-label="Date posted">October 5, 2022</div>
                </div>
              </a>

              <a href="#" role="gridcell">
                <h3 class="text-xl font-bold">Lorem ipsum dolor sit amet consectetur.</h3>
                <p class="mt-2 text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsum adipisci ipsa.</p>
                <div class="mt-4">
                  <div class="text-sm font-semibold">Posted on</div>
                  <div class="text-sm font-semibold text-maya-blue" aria-label="Date posted">October 5, 2022</div>
                </div>
              </a>

              <a href="#" role="gridcell">
                <h3 class="text-xl font-bold">Lorem ipsum dolor sit amet consectetur.</h3>
                <p class="mt-2 text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsum adipisci ipsa.</p>
                <div class="mt-4">
                  <div class="text-sm font-semibold">Posted on</div>
                  <div class="text-sm font-semibold text-maya-blue" aria-label="Date posted">October 5, 2022</div>
                </div>
              </a>

              <a href="#" role="gridcell">
                <h3 class="text-xl font-bold">Lorem ipsum dolor sit amet consectetur.</h3>
                <p class="mt-2 text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsum adipisci ipsa.</p>
                <div class="mt-4">
                  <div class="text-sm font-semibold">Posted on</div>
                  <div class="text-sm font-semibold text-maya-blue" aria-label="Date posted">October 5, 2022</div>
                </div>
              </a>
            </div>
          </div>

          <h2 class="mt-8 text-2xl font-bold text-maya-blue md:mt-12 lg:mt-16 lg:text-3xl">Popular Articles</h2>
          <div class="mt-4" role="grid">
            <div class="grid gap-8 lg:grid-cols-2 lg:gap-12" role="row">
              <a href="#" role="gridcell">
                <h3 class="text-xl font-bold">Lorem ipsum dolor sit amet consectetur.</h3>
                <p class="mt-2 text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsum adipisci ipsa.</p>
                <div class="mt-4">
                  <div class="text-sm font-semibold">Posted on</div>
                  <div class="text-sm font-semibold text-maya-blue" aria-label="Date posted">October 5, 2022</div>
                </div>
              </a>

              <a href="#" role="gridcell">
                <h3 class="text-xl font-bold">Lorem ipsum dolor sit amet consectetur.</h3>
                <p class="mt-2 text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsum adipisci ipsa.</p>
                <div class="mt-4">
                  <div class="text-sm font-semibold">Posted on</div>
                  <div class="text-sm font-semibold text-maya-blue" aria-label="Date posted">October 5, 2022</div>
                </div>
              </a>
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
    document.title = 'Blog'
  },
}
</script>
