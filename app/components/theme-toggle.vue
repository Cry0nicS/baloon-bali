<script setup lang="ts">
const colorMode = useColorMode();

colorMode.preference = colorMode.preference === "system" ? "dark" : colorMode.preference;
</script>

<template>
    <Button
        variant="ghost"
        class="flex h-6 w-auto items-center justify-center p-0 hover:bg-transparent"
        :title="$t('common.toggleTheme')"
        :aria-pressed="colorMode.preference === 'dark'"
        @click="colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'">
        <span class="sr-only">{{ $t("common.toggleTheme") }}</span>
        <template v-if="colorMode.preference === 'dark'">
            <slot name="dark-mode">
                <Icon
                    class="size-6"
                    name="lucide:sun" />
            </slot>
        </template>
        <template v-else>
            <slot name="light-mode">
                <Icon
                    class="size-6"
                    name="lucide:moon" />
            </slot>
        </template>
    </Button>
</template>
