import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class IndexRoute extends Route {
  async model() {
    const response = await fetch('/api/rentals.json');
    const { data } = await response.json();

    return data.map(({ attributes, id }) => ({
      id,
      type: COMMUNITY_CATEGORIES.includes(attributes.category)
        ? 'Community'
        : 'Standalone',
      ...attributes,
    }));
  }
}
