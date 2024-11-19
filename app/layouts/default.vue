<template>
    <div class="flex min-h-screen flex-col">
        <div class="flex grow justify-center">
            <div class="flex min-h-full w-full max-w-[1280px] flex-col">
                <Header />

                <main class="grow">
                    <slot />
                </main>

                <Footer>
                    <template #links>
                        <ClientOnly>
                            <LanguageToggle />
                            <ThemeToggle>
                                <template #dark-mode>
                                    <span>{{ $t("common.lightMode") }}</span>
                                </template>
                                <template #light-mode>
                                    <span>{{ $t("common.darkMode") }}</span>
                                </template>
                            </ThemeToggle>
                        </ClientOnly>
                    </template>
                </Footer>
            </div>
        </div>
    </div>
</template>
