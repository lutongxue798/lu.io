// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type IsAny<T> = 0 extends 1 & T ? true : false
type InjectionType<A extends Plugin> = IsAny<A> extends true ? unknown : A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.11.2_@opentelemetry+api@1.8.0_@unocss+reset@0.60.4_eslint@9.4.0_floating-vue@5.2.2_rol_kz5sis3zuyiqyo5au5yoh7bo4q/node_modules/nuxt/dist/app/plugins/check-outdated-build.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@pinia+nuxt@0.5.1_rollup@2.79.1_typescript@5.4.5_vue@3.4.27/node_modules/@pinia/nuxt/dist/runtime/plugin.vue3").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.11.2_@opentelemetry+api@1.8.0_@unocss+reset@0.60.4_eslint@9.4.0_floating-vue@5.2.2_rol_kz5sis3zuyiqyo5au5yoh7bo4q/node_modules/nuxt/dist/app/plugins/revive-payload.server").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.11.2_@opentelemetry+api@1.8.0_@unocss+reset@0.60.4_eslint@9.4.0_floating-vue@5.2.2_rol_kz5sis3zuyiqyo5au5yoh7bo4q/node_modules/nuxt/dist/app/plugins/revive-payload.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.11.2_@opentelemetry+api@1.8.0_@unocss+reset@0.60.4_eslint@9.4.0_floating-vue@5.2.2_rol_kz5sis3zuyiqyo5au5yoh7bo4q/node_modules/nuxt/dist/head/runtime/plugins/unhead").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.11.2_@opentelemetry+api@1.8.0_@unocss+reset@0.60.4_eslint@9.4.0_floating-vue@5.2.2_rol_kz5sis3zuyiqyo5au5yoh7bo4q/node_modules/nuxt/dist/pages/runtime/plugins/router").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.11.2_@opentelemetry+api@1.8.0_@unocss+reset@0.60.4_eslint@9.4.0_floating-vue@5.2.2_rol_kz5sis3zuyiqyo5au5yoh7bo4q/node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.11.2_@opentelemetry+api@1.8.0_@unocss+reset@0.60.4_eslint@9.4.0_floating-vue@5.2.2_rol_kz5sis3zuyiqyo5au5yoh7bo4q/node_modules/nuxt/dist/pages/runtime/plugins/check-if-page-unused").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+devtools@1.3.2_@unocss+reset@0.60.4_floating-vue@5.2.2_nuxt@3.11.2_rollup@2.79.1_unocss_e22pxc6yjn56mqxxz3fa4aznvi/node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.server").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+devtools@1.3.2_@unocss+reset@0.60.4_floating-vue@5.2.2_nuxt@3.11.2_rollup@2.79.1_unocss_e22pxc6yjn56mqxxz3fa4aznvi/node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@vite-pwa+nuxt@0.7.0_rollup@2.79.1_vite@5.2.12_workbox-build@7.1.1_workbox-window@7.1.0/node_modules/@vite-pwa/nuxt/dist/runtime/plugins/pwa-icons").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@vite-pwa+nuxt@0.7.0_rollup@2.79.1_vite@5.2.12_workbox-build@7.1.1_workbox-window@7.1.0/node_modules/@vite-pwa/nuxt/dist/runtime/plugins/pwa.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+color-mode@3.4.1_rollup@2.79.1/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+color-mode@3.4.1_rollup@2.79.1/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.11.2_@opentelemetry+api@1.8.0_@unocss+reset@0.60.4_eslint@9.4.0_floating-vue@5.2.2_rol_kz5sis3zuyiqyo5au5yoh7bo4q/node_modules/nuxt/dist/app/plugins/chunk-reload.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.11.2_@opentelemetry+api@1.8.0_@unocss+reset@0.60.4_eslint@9.4.0_floating-vue@5.2.2_rol_kz5sis3zuyiqyo5au5yoh7bo4q/node_modules/nuxt/dist/app/plugins/dev-server-logs").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.11.2_@opentelemetry+api@1.8.0_@unocss+reset@0.60.4_eslint@9.4.0_floating-vue@5.2.2_rol_kz5sis3zuyiqyo5au5yoh7bo4q/node_modules/nuxt/dist/app/plugins/check-if-layout-used").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }

  interface NuxtAppLiterals {
    pluginName: 'nuxt:revive-payload:client' | 'nuxt:head' | 'nuxt:router' | 'nuxt:revive-payload:server' | 'nuxt:global-components' | 'nuxt:prefetch' | 'nuxt:checkIfPageUnused' | 'nuxt:chunk-reload' | 'nuxt:checkIfLayoutUsed'
  }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
