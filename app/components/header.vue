<script setup lang="ts">
const colorMode = useColorMode();

let logoColor = computed(() => "#FAFAFA");

if (import.meta.client) {
    logoColor = computed(() => {
        return colorMode.value === "dark" ? "#FAFAFA" : "black";
    });
}
</script>

<template>
    <div class="flex h-[70px] w-full justify-center border-0">
        <div class="flex w-full items-center justify-between border-b-2 px-8">
            <ColorScheme
                placeholder="Logo"
                tag="span">
                <ClientOnly>
                    <Logo :color="logoColor" />
                </ClientOnly>
            </ColorScheme>
            <div class="flex min-w-[180px] items-center justify-end gap-4">
                <div class="p-2">
                    <ThemeToggle />
                </div>
                <div class="p-2">
                    <LanguageToggle>
                        <template #english>
                            <Icon
                                class="size-6 rounded-full border"
                                name="emojione:flag-for-us-outlying-islands" />
                        </template>
                        <template #secondary>
                            <Icon
                                class="size-6 rounded-full border"
                                name="emojione:flag-for-indonesia" />
                        </template>
                    </LanguageToggle>
                </div>
            </div>
        </div>
    </div>
</template>
