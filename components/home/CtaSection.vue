<template>
  <section class="px-10 pb-24">
    <div class="grid grid-cols-2 gap-10">
      <div class="flex flex-col w-full justify-between">
        <div class="text-[90px]">
          <h2>LETS START</h2>
          <h2 class="text-right -mt-8">CREATING</h2>
          <h2 class="text-center -mt-8">TOGETHER</h2>
        </div>
        <div>
          <div class="flex gap-1 items-center mb-10">
            <div class="text-left font-NeueHaas">Say hi</div>
            <div><Icon name="system-uicons:minus" size="2em" /></div>
            <div class="text-left font-NeueHaas text-[#6d6d6d]">
              andikasatrio159@gmail.comx
            </div>
          </div>
          <div class="flex gap-x-6">
            <div>
              <span>Instagram</span>
              <span><Icon name="uit:arrow-up-right" size="1.5em" /></span>
            </div>
            <div>
              <span>Facebook</span>
              <span><Icon name="uit:arrow-up-right" size="1.5em" /></span>
            </div>
            <div>
              <span>Linkedin</span>
              <span><Icon name="uit:arrow-up-right" size="1.5em" /></span>
            </div>
            <div>
              <span>Telegram</span>
              <span><Icon name="uit:arrow-up-right" size="1.5em" /></span>
            </div>
            <div>
              <span>Youtube</span>
              <span><Icon name="uit:arrow-up-right" size="1.5em" /></span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="p-[30px] border-[1px] border-opacity-20 border-white w-full rounded-3xl"
      >
        <form action="">
          <div class="mb-5">
            <label for="" class="text-sm">Your Data</label>
            <div class="flex flex-grow mt-4 gap-x-7">
              <input
                name="name"
                type="text"
                placeholder="Name"
                class="w-1/2 !bg-transparent p-5 border border-white border-opacity-20 rounded-xl"
              />
              <input
                name="email"
                type="text"
                placeholder="Email"
                class="w-1/2 !bg-transparent p-5 border border-white border-opacity-20 rounded-xl"
              />
            </div>
          </div>

          <div class="mb-5">
            <label for="" class="text-sm">You are interested in</label>
            <div class="flex flex-wrap w-full mt-4 gap-x-7 gap-y-5 text-sm">
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
              class="border-[1px] border-white border-opacity-20 p-5 w-full bg-transparent rounded-xl"
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
