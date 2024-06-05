<script setup lang="ts">

</script>

<template>
  <div>
    <Logos mb-6 />
    <Suspense>
      <ClientOnly>

      </ClientOnly>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <InputEntry />
  </div>
</template>
