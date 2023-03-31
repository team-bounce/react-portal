export class FormsService {

  getAll() {
    return fetch('data/thegarageforms.json')
      .then((res) => res.json())
      .then((d) => d.forms);
  }

}
