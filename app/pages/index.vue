<script setup lang="ts">
const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
        bookingSection.scrollIntoView({behavior: "smooth"});
    }
};
</script>

<template>
    <div>
        <!-- Hero Section -->
        <section class="container relative py-24 sm:py-32">
            <div class="absolute inset-0 z-0">
                <NuxtImg
                    src="/assets/images/terrace.webp"
                    :alt="$t('hero.alt')"
                    class="h-full w-full object-cover"
                    width="1280"
                    height="592"
                    sizes="sm:100vw md:100vw lg:100vw"
                    format="webp"
                    loading="eager" />
                <div class="absolute inset-0 bg-black/40"></div>
            </div>
            <div
                class="relative z-10 mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center text-white">
                <h1
                    class="text-3xl font-extrabold leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    {{ $t("hero.title") }}
                </h1>
                <p class="max-w-[700px] text-lg sm:text-xl">{{ $t("hero.description1") }}</p>
                <p class="max-w-[700px]">{{ $t("hero.description2") }}</p>
                <Button
                    size="lg"
                    class="bg-white text-black hover:bg-gray-200"
                    @click="scrollToBooking">
                    {{ $t("hero.button") }}
                </Button>
            </div>
        </section>

        <!-- Social Proof -->
        <section class="container py-8 text-center">
            <h3 class="mb-4 text-2xl font-semibold">{{ $t("socialProof.title") }}</h3>
            <div class="mb-4 flex flex-wrap justify-center gap-4">
                <Badge variant="secondary">{{ $t("socialProof.badges.tours") }}</Badge>
                <Badge variant="secondary">{{ $t("socialProof.badges.ratings") }}</Badge>
                <Badge variant="secondary">{{ $t("socialProof.badges.average") }}</Badge>
            </div>
            <p class="italic">{{ $t("socialProof.testimonial") }}</p>
        </section>

        <!-- Benefits -->
        <section class="container py-16">
            <h3 class="mb-8 text-center text-2xl font-semibold">{{ $t("benefits.title") }}</h3>
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
                <Card>
                    <CardHeader>
                        <NuxtImg
                            src="/assets/images/guide.webp"
                            :alt="$t('benefits.localExpertise.alt')"
                            class="mb-4 aspect-[3/2] w-full rounded-t-lg object-cover"
                            width="646"
                            sizes="(min-width: 1024px) 230px, (min-width: 768px) 413px, 646px"
                            loading="lazy" />
                        <CardTitle>{{ $t("benefits.localExpertise.title") }}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{{ $t("benefits.localExpertise.description") }}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <NuxtImg
                            src="/assets/images/car.webp"
                            :alt="$t('benefits.convenience.alt')"
                            class="mb-4 aspect-[3/2] w-full rounded-t-lg object-cover"
                            width="646"
                            sizes="(min-width: 1024px) 230px, (min-width: 768px) 413px, 646px"
                            loading="lazy" />
                        <CardTitle>{{ $t("benefits.convenience.title") }}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{{ $t("benefits.convenience.description") }}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <NuxtImg
                            src="/assets/images/travel.webp"
                            :alt="$t('benefits.flexibility.alt')"
                            class="mb-4 aspect-[3/2] w-full rounded-t-lg object-cover"
                            width="646"
                            sizes="(min-width: 1024px) 230px, (min-width: 768px) 413px, 646px"
                            loading="lazy" />
                        <CardTitle>{{ $t("benefits.flexibility.title") }}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{{ $t("benefits.flexibility.description") }}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <NuxtImg
                            src="/assets/images/tradition.webp"
                            :alt="$t('benefits.immersion.alt')"
                            class="mb-4 aspect-[3/2] w-full rounded-t-lg object-cover"
                            width="646"
                            sizes="(min-width: 1024px) 230px, (min-width: 768px) 413px, 646px"
                            loading="lazy" />
                        <CardTitle>{{ $t("benefits.immersion.title") }}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{{ $t("benefits.immersion.description") }}</p>
                    </CardContent>
                </Card>
            </div>
        </section>

        <!-- How It Works -->
        <section class="container py-16">
            <h3 class="mb-8 text-center text-2xl font-semibold">{{ $t("howItWorks.title") }}</h3>
            <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div class="flex flex-col items-center text-center">
                    <div
                        class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        1
                    </div>
                    <h4 class="mb-2 font-semibold">{{ $t("howItWorks.steps.step1.title") }}</h4>
                    <p>{{ $t("howItWorks.steps.step1.description") }}</p>
                </div>
                <div class="flex flex-col items-center text-center">
                    <div
                        class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        2
                    </div>
                    <h4 class="mb-2 font-semibold">{{ $t("howItWorks.steps.step2.title") }}</h4>
                    <p>{{ $t("howItWorks.steps.step2.description") }}</p>
                </div>
                <div class="flex flex-col items-center text-center">
                    <div
                        class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        3
                    </div>
                    <h4 class="mb-2 font-semibold">{{ $t("howItWorks.steps.step3.title") }}</h4>
                    <p>{{ $t("howItWorks.steps.step3.description") }}</p>
                </div>
            </div>
        </section>

        <!-- Features -->
        <section class="container py-16">
            <h3 class="mb-8 text-center text-2xl font-semibold">{{ $t("offerings.title") }}</h3>
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <NuxtImg
                            src="/assets/images/freestyle.webp"
                            :alt="$t('offerings.tours.personalized.title')"
                            class="mb-4 aspect-[1/1] w-full rounded-t-lg object-cover"
                            width="400"
                            sizes="(min-width: 1024px) 230px, (min-width: 768px) 413px, 646px"
                            loading="lazy" />
                        <CardTitle>{{ $t("offerings.tours.personalized.title") }}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p class="mb-4">
                            {{ $t("offerings.tours.personalized.description") }}
                        </p>
                        <ul class="list-inside list-disc">
                            <li>{{ $t("offerings.tours.personalized.features[0]") }}</li>
                            <li>{{ $t("offerings.tours.personalized.features[1]") }}</li>
                            <li>{{ $t("offerings.tours.personalized.features[2]") }}</li>
                            <li>{{ $t("offerings.tours.personalized.features[3]") }}</li>
                            <li>{{ $t("offerings.tours.personalized.features[4]") }}</li>
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <NuxtImg
                            src="/assets/images/full-day.webp"
                            :alt="$t('offerings.tours.eightHour.title')"
                            class="mb-4 aspect-[1/1] w-full rounded-t-lg object-cover"
                            width="400"
                            sizes="(min-width: 1024px) 230px, (min-width: 768px) 413px, 646px"
                            loading="lazy" />
                        <CardTitle>{{ $t("offerings.tours.eightHour.title") }}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p class="mb-4">
                            {{ $t("offerings.tours.eightHour.description") }}
                        </p>
                        <ul class="list-inside list-disc">
                            <li>{{ $t("offerings.tours.eightHour.features[0]") }}</li>
                            <li>{{ $t("offerings.tours.eightHour.features[1]") }}</li>
                            <li>{{ $t("offerings.tours.eightHour.features[2]") }}</li>
                            <li>{{ $t("offerings.tours.eightHour.features[3]") }}</li>
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <NuxtImg
                            src="/assets/images/sunset.webp"
                            :alt="$t('offerings.tours.twelveHour.title')"
                            class="mb-4 aspect-[1/1] w-full rounded-t-lg object-cover"
                            width="400"
                            sizes="(min-width: 1024px) 230px, (min-width: 768px) 413px, 646px"
                            loading="lazy" />
                        <CardTitle>{{ $t("offerings.tours.twelveHour.title") }}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p class="mb-4">
                            {{ $t("offerings.tours.twelveHour.description") }}
                        </p>
                        <ul class="list-inside list-disc">
                            <li>{{ $t("offerings.tours.twelveHour.features[0]") }}</li>
                            <li>{{ $t("offerings.tours.twelveHour.features[1]") }}</li>
                            <li>{{ $t("offerings.tours.twelveHour.features[2]") }}</li>
                            <li>{{ $t("offerings.tours.twelveHour.features[3]") }}</li>
                            <li>{{ $t("offerings.tours.twelveHour.features[4]") }}</li>
                            <li>{{ $t("offerings.tours.twelveHour.features[5]") }}</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </section>

        <!-- Testimonials -->
        <section class="container py-16">
            <h3 class="mb-8 text-center text-2xl font-semibold">{{ $t("testimonials.title") }}</h3>
            <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>{{ $t("testimonials.reviews.sarah.name") }}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>"{{ $t("testimonials.reviews.sarah.feedback") }}"</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>{{ $t("testimonials.reviews.mark.name") }}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>"{{ $t("testimonials.reviews.mark.feedback") }}"</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>{{ $t("testimonials.reviews.andrea.name") }}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>"{{ $t("testimonials.reviews.andrea.feedback") }}"</p>
                    </CardContent>
                </Card>
            </div>
        </section>

        <!-- Call to Action -->
        <section
            id="booking"
            class="container py-16 text-center">
            <h3 class="mb-4 text-2xl font-semibold">{{ $t("callToAction.title") }}</h3>
            <p class="mx-auto mb-8 max-w-2xl">{{ $t("callToAction.description") }}</p>
            <Button as-child>
                <NuxtLink
                    to="https://wa.me/628563850892?text=Hi%2C+I+am+interested+in+booking+a+tour+with+you+for+Bali"
                    target="_blank">
                    <Icon
                        name="ic:baseline-whatsapp"
                        size="md" />
                    {{ $t("callToAction.button") }}
                </NuxtLink>
            </Button>
        </section>

        <!-- FAQs -->
        <section class="container py-16">
            <h3 class="mb-8 text-center text-2xl font-semibold">{{ $t("faqs.title") }}</h3>
            <Accordion
                type="single"
                collapsible
                class="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        {{ $t("faqs.questions.included.question") }}
                    </AccordionTrigger>
                    <AccordionContent>{{ $t("faqs.questions.included.answer") }}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        {{ $t("faqs.questions.customize.question") }}
                    </AccordionTrigger>
                    <AccordionContent>{{ $t("faqs.questions.customize.answer") }}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>{{ $t("faqs.questions.cancel.question") }}</AccordionTrigger>
                    <AccordionContent>{{ $t("faqs.questions.cancel.answer") }}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>{{ $t("faqs.questions.family.question") }}</AccordionTrigger>
                    <AccordionContent>{{ $t("faqs.questions.family.answer") }}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>{{ $t("faqs.questions.bring.question") }}</AccordionTrigger>
                    <AccordionContent>{{ $t("faqs.questions.bring.answer") }}</AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    </div>
</template>
