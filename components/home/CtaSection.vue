<template>
  <section class="px-3 lg:px-10 pb-24">
    <div class="lg:grid grid-cols-2 gap-10">
      <div class="flex flex-col w-full justify-between">
        <div class="text-5xl lg:text-[90px]">
          <h2>AYO MULAI</h2>
          <h2 class="text-right">BUAT</h2>
          <h2 class="text-center">BERSAMA</h2>
        </div>
        <div>
          <div class="flex gap-1 items-center mb-10 mt-2 lg:mt-0">
            <div class="text-left font-NeueHaas">Say hi</div>
            <div><Icon name="system-uicons:minus" size="2em" /></div>
            <div class="text-left font-NeueHaas text-[#6d6d6d]">
              andikasatrio159@gmail.com
            </div>
          </div>
          <div class="flex flex-wrap lg:flex-nowrap gap-3 lg:gap-0 lg:gap-x-6">
            <div>
              <CustomLink
                label="Github"
                to="https://github.com/andsr157"
                with-arrow
              />
            </div>
            <div>
              <CustomLink
                label="Facebook"
                to="https://www.facebook.com/profile.php?id=100011086082150&mibextid=ZbWKwL"
                with-arrow
              />
            </div>
            <div>
              <CustomLink
                label="Linkedin"
                to="https://www.linkedin.com/in/andika-satrio-nugroho/"
                with-arrow
              />
            </div>
            <div>
              <CustomLink
                label="Telegram"
                to="https://t.me/andsr157"
                with-arrow
              />
            </div>
            <div>
              <CustomLink
                label="Email"
                to="mailto:andikasatrio159@gmail.com"
                with-arrow
              />
            </div>
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
              <ButtonMagnetic title="Landing Page" />
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
