<template>
  <div class="w-full overflow-hidden">
    <Navbar />
    <section class="font-NeueHaas text-6xl px-10 hero__wrapper h-full">
      <div class="content1">
        <div class="flex relative items-center hero__main_layer h-[80vh] pb-10">
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
      <div></div>
      <div class="content2 absolute top-0 -z-10 w-full h-[100vh] pe-10">
        <div class="flex items-center h-full justify-between">
          <div
            class="profile__photo -ms-96 w-40 h-56 bg-red-300 mt-40 shrink-0"
          ></div>
          <div
            class="profile__desc text-[56px] max-w-[876px] -me-96 pe-8 -mt-24 opacity-0"
          >
            <span class="opacity-20">
              I love creating captivating and functional
            </span>
            <span class="opacity-20"
              >interfaces that evoke emotions and establish a conne</span
            >
            <span class="opacity-20"
              >-ction between the brand and the user.</span
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
