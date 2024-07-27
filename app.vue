<template>
    <div
        class="w-full min-h-screen flex flex-col bg-background text-foreground font-mono p-12"
    >
        <h1 class="text-4xl font-bold">nuxt-class-inject + Tailwind CSS</h1>
        <ClientOnly>
            <h2 class="text-2xl">
                {{ `
                <html class="${$classInject.classList.value}">
                    ...
                </html>
                ` }}
            </h2>
        </ClientOnly>
        <div class="flex flex-row gap-4">
            <button
                v-for="theme in themes"
                @click="setTheme(theme)"
                class="p-1 hover:text-background hover:bg-foreground"
            >
                {{ theme }}
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const { $classInject } = useNuxtApp();

useHead({ title: "nuxt-class-inject" });

const themes: string[] = ["light", "dark", "paper"];
const setTheme = (theme: string) => {
    const current: string[] = $classInject.classList.value;

    const classList = current.filter((cls) => !cls.startsWith("theme-"));
    classList.push(`theme-${theme}`);

    $classInject.classList.value = classList;
};
</script>

<style lang="css">
.theme-light {
    --foreground: #1e1e1e;
    --background: #fefefe;
}

.theme-dark {
    --foreground: #fefefe;
    --background: #1e1e1e;
}

.theme-paper {
    --foreground: #cfa476;
    --background: #332a2c;
}
</style>
