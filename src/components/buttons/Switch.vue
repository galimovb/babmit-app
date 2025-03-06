<script setup>
import {SwitchRoot, SwitchThumb} from "radix-vue";
import {Moon} from "lucide-vue-next";
</script>

<template>
  <SwitchRoot
      id="airplane-mode"
      class="w-[38px] h-[23px] sm:w-[42px] focus-within:outline focus-within:outline-blue-200 flex bg-blue-400 shadow-sm rounded-full relative data-[state=checked]:bg-blue-600 cursor-pointer"
  >
    <SwitchThumb
        class="block w-[19px] h-[19px] sm:w-[21px] sm:h-[21px] my-auto bg-white shadow-sm rounded-full transition-transform duration-150 translate-x-0 will-change-transform data-[state=checked]:translate-x-[19px] sm:data-[state=checked]:translate-x-[21px]"
    >
      <Moon class="w-full h-full hover:animate-pulse mx-auto my-auto text-black"/>
    </SwitchThumb>
  </SwitchRoot>
</template>

<style scoped>

</style>
