import source from '$lib/stores/tableOrderStore.ts?raw';
import pageSource from './+page.md?raw';

export async function load() {
  return {
    meta: {
      source,
      pageSource,
      related: ['actions/table', 'components/Table'],
    },
  };
}
