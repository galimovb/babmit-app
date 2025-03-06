<script setup>
import {Image, UsersRound} from "lucide-vue-next";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import SidebarHeader from "@/components/ui/sidebar/SidebarHeader.vue";
import Switch from "@/components/buttons/Switch.vue";
import {useThemeStore} from "@/stores/theme.js";

const items = [
  {
    title: "Фото",
    url: "/photos",
    icon: Image,
  },
  {
    title: "Лиды",
    url: "/leads",
    icon: UsersRound,
  },
];

const themeStore = useThemeStore();
</script>

<template>
  <Sidebar>
    <SidebarHeader>
      <div
          class="flex items-center justify-between"
      >
        <img
            src="/public/img/logo.png"
            alt="Logo"
            class="h-10 hover:animate-pulse"
        >
        <Switch
            @click="themeStore.toggleTheme"
        />
      </div>
    </SidebarHeader>
    <SidebarContent
        class="p-4"
    >
      <SidebarGroup>
        <SidebarGroupLabel
            class="text-sm ml-2"
        >
          Меню
        </SidebarGroupLabel>

        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem
                v-for="item in items"
                :key="item.title"
                class="text-lg flex items-center gap-4 p-2 rounded-lg transition duration-200"
            >
              <SidebarMenuButton
                  asChild
              >
                <router-link
                    :to="item.url"
                    class="flex items-center gap-2 py-2 px-1 hover:bg-gray-300 dark:hover:bg-gray-600"
                    active-class="bg-gray-200 dark:bg-blue-500"
                >
                  <component
                      :is="item.icon"
                      class="h-4 w-5"
                  />
                  <span>
                    {{ item.title }}
                  </span>
                </router-link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>

