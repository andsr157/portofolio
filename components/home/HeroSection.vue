<template>
  <div class="w-full overflow-hidden">
    <Navbar />
    <section class="font-NeueHaas text-6xl px-10 hero__wrapper">
      <div class="content1">
        <div class="flex items-center hero__main_layer h-[70vh] pb-10">
          <div class="main_text1 w-full">
            <h2>HELLO I'M</h2>
            <h2>WEB DESIGNER</h2>
          </div>

          <video
            loop
            muted
            autoplay
            class="w-[668px] h-fulll main_video absolute -z-10 left-1/2 -translate-x-1/2"
          >
            <source src="../../public/logo.mp4" />
          </video>
          <div class="main_text2 w-full text-right absolute">
            <h2>ANDIKA</h2>
            <h2>SATRIO NUGROHO</h2>
          </div>
        </div>
      </div>

      <div class="content2"></div>
    </section>
  </div>
</template>
