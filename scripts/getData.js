export const getData = {
  url: 'database/dataBase.json',
  get(process) {
    fetch(this.url)
      .then((response) => responce.json())
      .then((process));
  },
  wishList(list, callback) {
    this.get((data) => {
      const result = data.filter((item) => list.includes(item.id));
      callback(result);
    })
  }
};