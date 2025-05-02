<template>
  <UForm
    ref="ClientFinderByCups"
    :schema="schema"
    :state="state"
    class="space-y-4"
    @submit="findClientByCups"
  >
    <UFormField
      name="cups"
    >
      <template #label>
        <b>{{ $t('common.cups') }}</b>
      </template>
      <UInput
        v-model="state.cups"
        size="lg"
        class="w-full"
        placeholder="Demo: 123456"
        variant="subtle"
      />
    </UFormField>
    <UButton
      type="submit"
      block
      :disabled="hasSubmitDisabled"
      size="lg"
    >
      {{ $t('home.form.button') }}
    </UButton>
  </UForm>
</template>

<script lang="ts" setup>
const localePath = useLocalePath()
const { t } = useI18n()
const { v, validations } = useValidator()

// eslint-disable-next-line
const form = useTemplateRef<any>('ClientFinderByCups')

const state = reactive({
  cups: '',
})

const schema = v.object({
  cups: v.string().regex(validations.cups, t('validations.cups')),
})

async function findClientByCups() {
  const link = localePath({
    name: 'client-cups', params: { cups: state.cups },
  })

  navigateTo(link)
}

const hasSubmitDisabled = computed(() => Boolean(form.value?.errors.length || !state.cups))
</script>
