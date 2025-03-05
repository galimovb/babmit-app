<script setup>
import { Calendar, Home, Inbox, Search, Settings } from "lucide-vue-next"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar/index.js"
import SidebarHeader from "@/components/ui/sidebar/SidebarHeader.vue";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
];
</script>

<template>
  <Sidebar>
    <SidebarHeader>
      <h1>dedd</h1>
    </SidebarHeader>
  </Sidebar>
  <pre>{{ items }}</pre> <!-- Для отладки -->
</template>

