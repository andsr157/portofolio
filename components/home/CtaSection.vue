<template>
  <section class="px-3 lg:px-10 pb-24">
    <div class="lg:grid grid-cols-2 gap-10">
      <div class="flex flex-col w-full justify-between">
        <div class="text-5xl lg:text-[90px]">
          <h2>LETS START</h2>
          <h2 class="text-right">CREATING</h2>
          <h2 class="text-center">TOGETHER</h2>
        </div>
        <div>
          <div class="flex gap-1 items-center mb-10 mt-2 lg:mt-0">
            <div class="text-left font-NeueHaas">Say hi</div>
            <div><Icon name="system-uicons:minus" size="2em" /></div>
            <div class="text-left font-NeueHaas text-[#6d6d6d]">
              andikasatrio159@gmail.comx
            </div>
          </div>
          <div class="flex flex-wrap lg:flex-nowrap gap-3 lg:gap-0 lg:gap-x-6">
            <div><CustomLink label="Github" with-arrow /></div>
            <div><CustomLink label="Facebook" with-arrow /></div>
            <div><CustomLink label="Linkedin" with-arrow /></div>
            <div><CustomLink label="Telegram" with-arrow /></div>
            <div><CustomLink label="Youtube" with-arrow /></div>
          </div>
        </div>
      </div>
      <div
        class="p-5 lg:p-[30px] border-[1px] border-opacity-20 border-white w-full rounded-3xl mt-6 lg:mt-0"
      >
        <form action="">
          <div class="mb-5">
            <label for="" class="text-sm">Your Data</label>
            <div
              class="flex flex-col lg:flex-row flex-grow mt-4 gap-y-4 lg:gap-y-0 gap-x-7 text-xs llg:text-base"
            >
              <input
                name="name"
                type="text"
                placeholder="Name"
                class="lg:w-1/2 !bg-transparent p-5 border border-white border-opacity-20 rounded-xl"
              />
              <input
                name="email"
                type="text"
                placeholder="Email"
                class="lg:w-1/2 !bg-transparent p-5 border border-white border-opacity-20 rounded-xl"
              />
            </div>
          </div>

          <div class="mb-5">
            <label for="" class="text-sm">You are interested in</label>
            <div
              class="flex flex-wrap w-full mt-4 gap-x-2 gap-y-3 lg:gap-x-7 lg:gap-y-5 text-sm"
            >
              <ButtonMagnetic title="UX/UI Design" />
              <ButtonMagnetic title="Web Design" />
              <ButtonMagnetic title="Web Development" />
              <ButtonMagnetic title="Website Creation" />
              <ButtonMagnetic title="Animation" />
              <ButtonMagnetic title="Other" />
            </div>
          </div>
          <div class="mb-5">
            <input
              type="text"
              class="border-[1px] border-white border-opacity-20 p-5 w-full bg-transparent rounded-xl text-xs llg:text-base"
              placeholder="Your question"
            />
          </div>
          <div>
            <Button title="Send Message" />
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
