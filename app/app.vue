<script setup lang="ts">
import {useFavicon} from "@vueuse/core";

const {locale} = useI18n();

useFavicon("/favicon.ico");
</script>

<template>
    <Html :lang="locale" />

    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
