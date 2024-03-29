const app = new Vue({
  el: '#app',
  data: {
    title: 'Hello world with Vue',
    fruits: [
      { name: 'apple', cant: 10 },
      { name: 'orange', cant: 0 },
      { name: 'pineapple', cant: 10 },
    ],
    newFruit: '',
    total: 0,
  },
  methods: {
    addFruit() {
      this.fruits.push({
        name: this.newFruit,
        cant: 0,
      });
      this.newFruit = '';
    }
  },
  computed: {
    sumFruits() {
      const sum = (acc, item) => (acc + item.cant);
      this.total = this.fruits.reduce(sum, 0);
      return this.total;
    }
  }
})