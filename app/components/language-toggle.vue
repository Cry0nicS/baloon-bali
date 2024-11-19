<script setup lang="ts">
import {type Locale, LOCALE} from "~~/types/constants";

const {locale} = useI18n() as unknown as {locale: Locale};
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
    <nuxt-link
        v-if="locale === LOCALE.English"
        class="flex h-6 items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary"
        :title="$t(`language.id`)"
        role="button"
        :to="switchLocalePath(LOCALE.Indonesian)"
        :aria-label="$t(`language.label`)">
        <slot name="secondary">
            <span>{{ $t(`language.id`) }}</span>
        </slot>
    </nuxt-link>
    <nuxt-link
        v-if="locale === LOCALE.Indonesian"
        class="flex h-6 items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary"
        :title="$t(`language.en`)"
        role="button"
        :to="switchLocalePath(LOCALE.English)"
        :aria-label="$t(`language.label`)">
        <slot name="english">
            <span>{{ $t(`language.en`) }}</span>
        </slot>
    </nuxt-link>
</template>
