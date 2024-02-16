<template>
  <div
    class="relative grid overflow-hidden mx-3 xl:mx-10 px-5 xl:px-8 py-[10px] bg-black border-[1px] border-opacity-20 border-white rounded-[10px] font-NeueHaas"
  >
    <div class="h-full absolute progress-bar bg-[#202020] w-0" />
    <div class="grid grid-cols-2 lg:grid-cols-3 items-center relative">
      <div class="text-[16px] hidden lg:block">Personal portofolio</div>
      <div class="lg:flex justify-center gap-16 text-[16px] hidden">
        <NuxtLink>
          <p>About me</p>
        </NuxtLink>
        <NuxtLink>
          <p>My project</p>
        </NuxtLink>
      </div>
      <div class="block lg:hidden">
        <Icon name="uit:align-center-alt" size="2em" />
      </div>
      <div class="flex justify-end">
        <Button title="Contact me" custom-class="lg:!w-36" />
      </div>
    </div>
  </div>
</template>
