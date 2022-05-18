<template>
  <main>
    <section class="py-8 sm:py-12 md:py-16 lg:py-20">
      <div class="container">
        <div class="text-center text-sm uppercase tracking-wide">Lorem ipsum dolor sit</div>
        <h1 class="text-center text-3xl font-bold uppercase md:mt-2 md:text-4xl lg:text-5xl">The Shop</h1>
        <p class="text-center lg:mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, provident.</p>

        <div class="mt-8 flex flex-nowrap items-center space-x-4 overflow-x-auto md:justify-center">
          <!-- Active button: bg-saffron -->
          <button class="flex-shrink-0 rounded-full border bg-saffron px-4 py-2 text-sm font-bold">All Ages</button>
          <button class="flex-shrink-0 rounded-full border px-4 py-2 text-sm font-bold">Filter</button>
          <button class="flex-shrink-0 rounded-full border px-4 py-2 text-sm font-bold">Filter</button>
          <button class="flex-shrink-0 rounded-full border px-4 py-2 text-sm font-bold">Filter</button>
          <button class="flex-shrink-0 rounded-full border px-4 py-2 text-sm font-bold">Filter</button>
        </div>

        <div class="mt-8 grid gap-8" role="grid">
          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" role="row">
            <div role="gridcell">
              <div>
                <div class="relative rounded-2xl border-2 border-maya-blue p-4">
                  <button class="absolute top-4 right-4">
                    <svg class="h-10 w-10 text-burnt-sienna" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="11.5" stroke="currentColor" />
                      <path fill="currentColor" d="m12.235 16.386-.17-.141c-3.641-2.965-4.63-4.01-4.63-5.704A2.53 2.53 0 0 1 9.976 8c1.158 0 1.807.65 2.26 1.158.451-.509 1.1-1.158 2.258-1.158a2.53 2.53 0 0 1 2.541 2.541c0 1.694-.988 2.739-4.63 5.704l-.17.14ZM9.976 8.565A1.964 1.964 0 0 0 8 10.54c0 1.44.904 2.4 4.235 5.11 3.332-2.71 4.236-3.67 4.236-5.11a1.964 1.964 0 0 0-1.977-1.976c-.988 0-1.525.593-1.948 1.073l-.31.367-.311-.367c-.424-.48-.96-1.073-1.949-1.073Z" />
                    </svg>
                  </button>
                  <img class="mt-14 aspect-video rounded-lg bg-slate-200" src="" alt="" />
                </div>

                <h3 class="mt-4 text-xl font-semibold">Product Name</h3>
                <div class="mt-2 flex">
                  <svg class="h-5 w-5 text-saffron" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.503 10.565a1.48 1.48 0 0 0-.86-2.667l-6-.226a.153.153 0 0 1-.134-.1l-2.073-5.6a1.48 1.48 0 0 0-2.78 0l-2.067 5.62a.153.153 0 0 1-.133.1l-6 .226a1.48 1.48 0 0 0-.86 2.667l4.707 3.7a.153.153 0 0 1 .053.16l-1.62 5.74a1.48 1.48 0 0 0 2.253 1.633l4.974-3.333a.147.147 0 0 1 .166 0l4.973 3.333a1.467 1.467 0 0 0 1.7 0 1.466 1.466 0 0 0 .554-1.6l-1.634-5.76a.146.146 0 0 1 .054-.16l4.727-3.733Z" />
                  </svg>
                  <div class="ml-2 font-medium">5.0</div>
                </div>

                <div class="mt-6">
                  <button class="flex w-full items-center justify-center rounded-full border border-grey px-4 py-2 hover:border-saffron hover:bg-saffron">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M5 7h13.79a2 2 0 0 1 1.99 2.199l-.6 6A2 2 0 0 1 18.19 17H8.64a2 2 0 0 1-1.962-1.608L5 7Z" />
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 21h2M5 7l-.81-3.243A1 1 0 0 0 3.22 3H2l3 4Zm3 14h2-2Z" />
                    </svg>
                    <div class="ml-2">Add to Cart</div>
                  </button>
                </div>
              </div>
            </div>

            <div role="gridcell">
              <div>
                <div class="relative rounded-2xl border-2 border-maya-blue p-4">
                  <button class="absolute top-4 right-4">
                    <svg class="h-10 w-10 text-burnt-sienna" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="11.5" stroke="currentColor" />
                      <path fill="currentColor" d="m12.235 16.386-.17-.141c-3.641-2.965-4.63-4.01-4.63-5.704A2.53 2.53 0 0 1 9.976 8c1.158 0 1.807.65 2.26 1.158.451-.509 1.1-1.158 2.258-1.158a2.53 2.53 0 0 1 2.541 2.541c0 1.694-.988 2.739-4.63 5.704l-.17.14ZM9.976 8.565A1.964 1.964 0 0 0 8 10.54c0 1.44.904 2.4 4.235 5.11 3.332-2.71 4.236-3.67 4.236-5.11a1.964 1.964 0 0 0-1.977-1.976c-.988 0-1.525.593-1.948 1.073l-.31.367-.311-.367c-.424-.48-.96-1.073-1.949-1.073Z" />
                    </svg>
                  </button>
                  <img class="mt-14 aspect-video rounded-lg bg-slate-200" src="" alt="" />
                </div>

                <h3 class="mt-4 text-xl font-semibold">Product Name</h3>
                <div class="mt-2 flex">
                  <svg class="h-5 w-5 text-saffron" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.503 10.565a1.48 1.48 0 0 0-.86-2.667l-6-.226a.153.153 0 0 1-.134-.1l-2.073-5.6a1.48 1.48 0 0 0-2.78 0l-2.067 5.62a.153.153 0 0 1-.133.1l-6 .226a1.48 1.48 0 0 0-.86 2.667l4.707 3.7a.153.153 0 0 1 .053.16l-1.62 5.74a1.48 1.48 0 0 0 2.253 1.633l4.974-3.333a.147.147 0 0 1 .166 0l4.973 3.333a1.467 1.467 0 0 0 1.7 0 1.466 1.466 0 0 0 .554-1.6l-1.634-5.76a.146.146 0 0 1 .054-.16l4.727-3.733Z" />
                  </svg>
                  <div class="ml-2 font-medium">5.0</div>
                </div>

                <div class="mt-6">
                  <button class="flex w-full items-center justify-center rounded-full border border-grey px-4 py-2 hover:border-saffron hover:bg-saffron">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M5 7h13.79a2 2 0 0 1 1.99 2.199l-.6 6A2 2 0 0 1 18.19 17H8.64a2 2 0 0 1-1.962-1.608L5 7Z" />
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 21h2M5 7l-.81-3.243A1 1 0 0 0 3.22 3H2l3 4Zm3 14h2-2Z" />
                    </svg>
                    <div class="ml-2">Add to Cart</div>
                  </button>
                </div>
              </div>
            </div>

            <div role="gridcell">
              <div>
                <div class="relative rounded-2xl border-2 border-maya-blue p-4">
                  <button class="absolute top-4 right-4">
                    <svg class="h-10 w-10 text-burnt-sienna" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="11.5" stroke="currentColor" />
                      <path fill="currentColor" d="m12.235 16.386-.17-.141c-3.641-2.965-4.63-4.01-4.63-5.704A2.53 2.53 0 0 1 9.976 8c1.158 0 1.807.65 2.26 1.158.451-.509 1.1-1.158 2.258-1.158a2.53 2.53 0 0 1 2.541 2.541c0 1.694-.988 2.739-4.63 5.704l-.17.14ZM9.976 8.565A1.964 1.964 0 0 0 8 10.54c0 1.44.904 2.4 4.235 5.11 3.332-2.71 4.236-3.67 4.236-5.11a1.964 1.964 0 0 0-1.977-1.976c-.988 0-1.525.593-1.948 1.073l-.31.367-.311-.367c-.424-.48-.96-1.073-1.949-1.073Z" />
                    </svg>
                  </button>
                  <img class="mt-14 aspect-video rounded-lg bg-slate-200" src="" alt="" />
                </div>

                <h3 class="mt-4 text-xl font-semibold">Product Name</h3>
                <div class="mt-2 flex">
                  <svg class="h-5 w-5 text-saffron" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.503 10.565a1.48 1.48 0 0 0-.86-2.667l-6-.226a.153.153 0 0 1-.134-.1l-2.073-5.6a1.48 1.48 0 0 0-2.78 0l-2.067 5.62a.153.153 0 0 1-.133.1l-6 .226a1.48 1.48 0 0 0-.86 2.667l4.707 3.7a.153.153 0 0 1 .053.16l-1.62 5.74a1.48 1.48 0 0 0 2.253 1.633l4.974-3.333a.147.147 0 0 1 .166 0l4.973 3.333a1.467 1.467 0 0 0 1.7 0 1.466 1.466 0 0 0 .554-1.6l-1.634-5.76a.146.146 0 0 1 .054-.16l4.727-3.733Z" />
                  </svg>
                  <div class="ml-2 font-medium">5.0</div>
                </div>

                <div class="mt-6">
                  <button class="flex w-full items-center justify-center rounded-full border border-grey px-4 py-2 hover:border-saffron hover:bg-saffron">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M5 7h13.79a2 2 0 0 1 1.99 2.199l-.6 6A2 2 0 0 1 18.19 17H8.64a2 2 0 0 1-1.962-1.608L5 7Z" />
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 21h2M5 7l-.81-3.243A1 1 0 0 0 3.22 3H2l3 4Zm3 14h2-2Z" />
                    </svg>
                    <div class="ml-2">Add to Cart</div>
                  </button>
                </div>
              </div>
            </div>

            <div role="gridcell">
              <div>
                <div class="relative rounded-2xl border-2 border-maya-blue p-4">
                  <button class="absolute top-4 right-4">
                    <svg class="h-10 w-10 text-burnt-sienna" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="11.5" stroke="currentColor" />
                      <path fill="currentColor" d="m12.235 16.386-.17-.141c-3.641-2.965-4.63-4.01-4.63-5.704A2.53 2.53 0 0 1 9.976 8c1.158 0 1.807.65 2.26 1.158.451-.509 1.1-1.158 2.258-1.158a2.53 2.53 0 0 1 2.541 2.541c0 1.694-.988 2.739-4.63 5.704l-.17.14ZM9.976 8.565A1.964 1.964 0 0 0 8 10.54c0 1.44.904 2.4 4.235 5.11 3.332-2.71 4.236-3.67 4.236-5.11a1.964 1.964 0 0 0-1.977-1.976c-.988 0-1.525.593-1.948 1.073l-.31.367-.311-.367c-.424-.48-.96-1.073-1.949-1.073Z" />
                    </svg>
                  </button>
                  <img class="mt-14 aspect-video rounded-lg bg-slate-200" src="" alt="" />
                </div>

                <h3 class="mt-4 text-xl font-semibold">Product Name</h3>
                <div class="mt-2 flex">
                  <svg class="h-5 w-5 text-saffron" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.503 10.565a1.48 1.48 0 0 0-.86-2.667l-6-.226a.153.153 0 0 1-.134-.1l-2.073-5.6a1.48 1.48 0 0 0-2.78 0l-2.067 5.62a.153.153 0 0 1-.133.1l-6 .226a1.48 1.48 0 0 0-.86 2.667l4.707 3.7a.153.153 0 0 1 .053.16l-1.62 5.74a1.48 1.48 0 0 0 2.253 1.633l4.974-3.333a.147.147 0 0 1 .166 0l4.973 3.333a1.467 1.467 0 0 0 1.7 0 1.466 1.466 0 0 0 .554-1.6l-1.634-5.76a.146.146 0 0 1 .054-.16l4.727-3.733Z" />
                  </svg>
                  <div class="ml-2 font-medium">5.0</div>
                </div>

                <div class="mt-6">
                  <button class="flex w-full items-center justify-center rounded-full border border-grey px-4 py-2 hover:border-saffron hover:bg-saffron">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M5 7h13.79a2 2 0 0 1 1.99 2.199l-.6 6A2 2 0 0 1 18.19 17H8.64a2 2 0 0 1-1.962-1.608L5 7Z" />
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 21h2M5 7l-.81-3.243A1 1 0 0 0 3.22 3H2l3 4Zm3 14h2-2Z" />
                    </svg>
                    <div class="ml-2">Add to Cart</div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" role="row">
            <div role="gridcell">
              <div>
                <div class="relative rounded-2xl border-2 border-maya-blue p-4">
                  <button class="absolute top-4 right-4">
                    <svg class="h-10 w-10 text-burnt-sienna" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="11.5" stroke="currentColor" />
                      <path fill="currentColor" d="m12.235 16.386-.17-.141c-3.641-2.965-4.63-4.01-4.63-5.704A2.53 2.53 0 0 1 9.976 8c1.158 0 1.807.65 2.26 1.158.451-.509 1.1-1.158 2.258-1.158a2.53 2.53 0 0 1 2.541 2.541c0 1.694-.988 2.739-4.63 5.704l-.17.14ZM9.976 8.565A1.964 1.964 0 0 0 8 10.54c0 1.44.904 2.4 4.235 5.11 3.332-2.71 4.236-3.67 4.236-5.11a1.964 1.964 0 0 0-1.977-1.976c-.988 0-1.525.593-1.948 1.073l-.31.367-.311-.367c-.424-.48-.96-1.073-1.949-1.073Z" />
                    </svg>
                  </button>
                  <img class="mt-14 aspect-video rounded-lg bg-slate-200" src="" alt="" />
                </div>

                <h3 class="mt-4 text-xl font-semibold">Product Name</h3>
                <div class="mt-2 flex">
                  <svg class="h-5 w-5 text-saffron" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.503 10.565a1.48 1.48 0 0 0-.86-2.667l-6-.226a.153.153 0 0 1-.134-.1l-2.073-5.6a1.48 1.48 0 0 0-2.78 0l-2.067 5.62a.153.153 0 0 1-.133.1l-6 .226a1.48 1.48 0 0 0-.86 2.667l4.707 3.7a.153.153 0 0 1 .053.16l-1.62 5.74a1.48 1.48 0 0 0 2.253 1.633l4.974-3.333a.147.147 0 0 1 .166 0l4.973 3.333a1.467 1.467 0 0 0 1.7 0 1.466 1.466 0 0 0 .554-1.6l-1.634-5.76a.146.146 0 0 1 .054-.16l4.727-3.733Z" />
                  </svg>
                  <div class="ml-2 font-medium">5.0</div>
                </div>

                <div class="mt-6">
                  <button class="flex w-full items-center justify-center rounded-full border border-grey px-4 py-2 hover:border-saffron hover:bg-saffron">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M5 7h13.79a2 2 0 0 1 1.99 2.199l-.6 6A2 2 0 0 1 18.19 17H8.64a2 2 0 0 1-1.962-1.608L5 7Z" />
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 21h2M5 7l-.81-3.243A1 1 0 0 0 3.22 3H2l3 4Zm3 14h2-2Z" />
                    </svg>
                    <div class="ml-2">Add to Cart</div>
                  </button>
                </div>
              </div>
            </div>

            <div role="gridcell">
              <div>
                <div class="relative rounded-2xl border-2 border-maya-blue p-4">
                  <button class="absolute top-4 right-4">
                    <svg class="h-10 w-10 text-burnt-sienna" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="11.5" stroke="currentColor" />
                      <path fill="currentColor" d="m12.235 16.386-.17-.141c-3.641-2.965-4.63-4.01-4.63-5.704A2.53 2.53 0 0 1 9.976 8c1.158 0 1.807.65 2.26 1.158.451-.509 1.1-1.158 2.258-1.158a2.53 2.53 0 0 1 2.541 2.541c0 1.694-.988 2.739-4.63 5.704l-.17.14ZM9.976 8.565A1.964 1.964 0 0 0 8 10.54c0 1.44.904 2.4 4.235 5.11 3.332-2.71 4.236-3.67 4.236-5.11a1.964 1.964 0 0 0-1.977-1.976c-.988 0-1.525.593-1.948 1.073l-.31.367-.311-.367c-.424-.48-.96-1.073-1.949-1.073Z" />
                    </svg>
                  </button>
                  <img class="mt-14 aspect-video rounded-lg bg-slate-200" src="" alt="" />
                </div>

                <h3 class="mt-4 text-xl font-semibold">Product Name</h3>
                <div class="mt-2 flex">
                  <svg class="h-5 w-5 text-saffron" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.503 10.565a1.48 1.48 0 0 0-.86-2.667l-6-.226a.153.153 0 0 1-.134-.1l-2.073-5.6a1.48 1.48 0 0 0-2.78 0l-2.067 5.62a.153.153 0 0 1-.133.1l-6 .226a1.48 1.48 0 0 0-.86 2.667l4.707 3.7a.153.153 0 0 1 .053.16l-1.62 5.74a1.48 1.48 0 0 0 2.253 1.633l4.974-3.333a.147.147 0 0 1 .166 0l4.973 3.333a1.467 1.467 0 0 0 1.7 0 1.466 1.466 0 0 0 .554-1.6l-1.634-5.76a.146.146 0 0 1 .054-.16l4.727-3.733Z" />
                  </svg>
                  <div class="ml-2 font-medium">5.0</div>
                </div>

                <div class="mt-6">
                  <button class="flex w-full items-center justify-center rounded-full border border-grey px-4 py-2 hover:border-saffron hover:bg-saffron">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M5 7h13.79a2 2 0 0 1 1.99 2.199l-.6 6A2 2 0 0 1 18.19 17H8.64a2 2 0 0 1-1.962-1.608L5 7Z" />
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 21h2M5 7l-.81-3.243A1 1 0 0 0 3.22 3H2l3 4Zm3 14h2-2Z" />
                    </svg>
                    <div class="ml-2">Add to Cart</div>
                  </button>
                </div>
              </div>
            </div>

            <div role="gridcell">
              <div>
                <div class="relative rounded-2xl border-2 border-maya-blue p-4">
                  <button class="absolute top-4 right-4">
                    <svg class="h-10 w-10 text-burnt-sienna" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="11.5" stroke="currentColor" />
                      <path fill="currentColor" d="m12.235 16.386-.17-.141c-3.641-2.965-4.63-4.01-4.63-5.704A2.53 2.53 0 0 1 9.976 8c1.158 0 1.807.65 2.26 1.158.451-.509 1.1-1.158 2.258-1.158a2.53 2.53 0 0 1 2.541 2.541c0 1.694-.988 2.739-4.63 5.704l-.17.14ZM9.976 8.565A1.964 1.964 0 0 0 8 10.54c0 1.44.904 2.4 4.235 5.11 3.332-2.71 4.236-3.67 4.236-5.11a1.964 1.964 0 0 0-1.977-1.976c-.988 0-1.525.593-1.948 1.073l-.31.367-.311-.367c-.424-.48-.96-1.073-1.949-1.073Z" />
                    </svg>
                  </button>
                  <img class="mt-14 aspect-video rounded-lg bg-slate-200" src="" alt="" />
                </div>

                <h3 class="mt-4 text-xl font-semibold">Product Name</h3>
                <div class="mt-2 flex">
                  <svg class="h-5 w-5 text-saffron" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.503 10.565a1.48 1.48 0 0 0-.86-2.667l-6-.226a.153.153 0 0 1-.134-.1l-2.073-5.6a1.48 1.48 0 0 0-2.78 0l-2.067 5.62a.153.153 0 0 1-.133.1l-6 .226a1.48 1.48 0 0 0-.86 2.667l4.707 3.7a.153.153 0 0 1 .053.16l-1.62 5.74a1.48 1.48 0 0 0 2.253 1.633l4.974-3.333a.147.147 0 0 1 .166 0l4.973 3.333a1.467 1.467 0 0 0 1.7 0 1.466 1.466 0 0 0 .554-1.6l-1.634-5.76a.146.146 0 0 1 .054-.16l4.727-3.733Z" />
                  </svg>
                  <div class="ml-2 font-medium">5.0</div>
                </div>

                <div class="mt-6">
                  <button class="flex w-full items-center justify-center rounded-full border border-grey px-4 py-2 hover:border-saffron hover:bg-saffron">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M5 7h13.79a2 2 0 0 1 1.99 2.199l-.6 6A2 2 0 0 1 18.19 17H8.64a2 2 0 0 1-1.962-1.608L5 7Z" />
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 21h2M5 7l-.81-3.243A1 1 0 0 0 3.22 3H2l3 4Zm3 14h2-2Z" />
                    </svg>
                    <div class="ml-2">Add to Cart</div>
                  </button>
                </div>
              </div>
            </div>

            <div role="gridcell">
              <div>
                <div class="relative rounded-2xl border-2 border-maya-blue p-4">
                  <button class="absolute top-4 right-4">
                    <svg class="h-10 w-10 text-burnt-sienna" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="11.5" stroke="currentColor" />
                      <path fill="currentColor" d="m12.235 16.386-.17-.141c-3.641-2.965-4.63-4.01-4.63-5.704A2.53 2.53 0 0 1 9.976 8c1.158 0 1.807.65 2.26 1.158.451-.509 1.1-1.158 2.258-1.158a2.53 2.53 0 0 1 2.541 2.541c0 1.694-.988 2.739-4.63 5.704l-.17.14ZM9.976 8.565A1.964 1.964 0 0 0 8 10.54c0 1.44.904 2.4 4.235 5.11 3.332-2.71 4.236-3.67 4.236-5.11a1.964 1.964 0 0 0-1.977-1.976c-.988 0-1.525.593-1.948 1.073l-.31.367-.311-.367c-.424-.48-.96-1.073-1.949-1.073Z" />
                    </svg>
                  </button>
                  <img class="mt-14 aspect-video rounded-lg bg-slate-200" src="" alt="" />
                </div>

                <h3 class="mt-4 text-xl font-semibold">Product Name</h3>
                <div class="mt-2 flex">
                  <svg class="h-5 w-5 text-saffron" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.503 10.565a1.48 1.48 0 0 0-.86-2.667l-6-.226a.153.153 0 0 1-.134-.1l-2.073-5.6a1.48 1.48 0 0 0-2.78 0l-2.067 5.62a.153.153 0 0 1-.133.1l-6 .226a1.48 1.48 0 0 0-.86 2.667l4.707 3.7a.153.153 0 0 1 .053.16l-1.62 5.74a1.48 1.48 0 0 0 2.253 1.633l4.974-3.333a.147.147 0 0 1 .166 0l4.973 3.333a1.467 1.467 0 0 0 1.7 0 1.466 1.466 0 0 0 .554-1.6l-1.634-5.76a.146.146 0 0 1 .054-.16l4.727-3.733Z" />
                  </svg>
                  <div class="ml-2 font-medium">5.0</div>
                </div>

                <div class="mt-6">
                  <button class="flex w-full items-center justify-center rounded-full border border-grey px-4 py-2 hover:border-saffron hover:bg-saffron">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M5 7h13.79a2 2 0 0 1 1.99 2.199l-.6 6A2 2 0 0 1 18.19 17H8.64a2 2 0 0 1-1.962-1.608L5 7Z" />
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 21h2M5 7l-.81-3.243A1 1 0 0 0 3.22 3H2l3 4Zm3 14h2-2Z" />
                    </svg>
                    <div class="ml-2">Add to Cart</div>
                  </button>
                </div>
              </div>
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
    document.title = 'Shop'
  },
}
</script>
