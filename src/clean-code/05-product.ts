type Size = "" | "S" | "M" | "XL";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if (this[key].length <= 0) throw Error(`${this[key]} is empty`);
          break;
        case "number":
          if (this[key] <= 0) throw Error(`${this[key]} is cero`);
          break;
        default:
          break;
      }
    }
    return true;
  }

  toString() {
    if (!this.isProductReady()) return;
    return `${this.name} (${this.price}), (${this.size})`;
  }
}

(() => {
  const product = new Product("Blue pants", 10);
  console.log(product.toString());
})();
