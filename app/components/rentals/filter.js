import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let { rentals, query } = this.args;

    return query
      ? rentals.filter((rental) => rental.title.includes(query))
      : rentals;
  }
}
