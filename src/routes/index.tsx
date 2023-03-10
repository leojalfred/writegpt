import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return <h1>WriteGPT</h1>
})

export const head: DocumentHead = {
  title: 'WriteGPT',
  meta: [
    {
      name: 'description',
      content: 'Leveraging powerful AI to help you write better'
    }
  ]
}
