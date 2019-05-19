const brewed_coffee = {
  name: "Bryggkaffe",
  price: 12,
  volume: 330,
  id: 123
};

const cappuccino = {
  name: "Cappuccino",
  price: 28,
  volume: 500,
  id: 124
};

const latte = {
  name: "Caffee Latte",
  price: 28,
  volume: 500,
  id: 125
};

const biblioteket = {
  id: 0,
  name: "Biblioteket",
  // picture: require("./resources/biblan.js"),
  coordinates: {
    latitude: 57.690382,
    longitude: 11.978556
  },
  street: "Hörsalsvägen 2",
  drinkList: [
    {
      ...brewed_coffee,
      description: "Chalmers bästa kaffe för studerande",
      shopId: 0
    },
    {
      ...latte,
      description: "Lätt en latte!",
      shopId: 0
    },
    {
      ...cappuccino,
      description: "Inte kaps men en cappucino!",
      shopId: 0
    }
  ]
};

const bulten = {
  id: 1,
  name: "Bulten",
  // picture: require("./resources/bulten.jpg"),
  coordinates: {
    latitude: 57.689008,
    longitude: 11.978538
  },
  street: "Hörsalsvägen 7",
  drinkList: [
    {
      ...brewed_coffee,
      description: "Så gott som hemmabryggt",
      shopId: 1
    },
    {
      ...cappuccino,
      description: "Inte kaps men en cappucino!",

      shopId: 1
    }
  ]
};

const linsen = {
  id: 2,
  name: "Linsen",
  street: "Hörsalsvägen 11",
  // picture: require("./resources/linsen.jpg"),
  coordinates: {
    latitude: 57.687962,
    longitude: 11.978813
  },
  drinkList: [
    {
      ...brewed_coffee,
      description: "Hemmabryggt",

      shopId: 2
    },
    {
      ...latte,
      description: "DataFavoriten",
      shopId: 2

    },
    {
      ...cappuccino,
      description: "IT-Favoriten",
      shopId: 2
    }
  ]
};

const veras_cafe = {
  id: 3,
  name: "Veras Café",
  street: "Vera Sandbergs allé",
  // picture: require("./resources/vera.jpg"),
  coordinates: {
    latitude: 57.693158,
    longitude: 11.975036
  },
  drinkList: [
    {
      ...brewed_coffee,
      description: "I-arnas räddning",
      shopId: 3
    },
    {
      ...latte,
      description: "AE-arnas räddning",
      shopId: 3
    },
    {
      ...cappuccino,
      description: "Ingens räddning",
      shopId: 3
    }
  ]
};

const wijkanders = {
  id: 4,
  name: "Wijkanders",
  street: "Vera Sandbergs allé 5B",
  // picture: require("./resources/wijkanders.jpg"),
  coordinates: {
    latitude: 57.692538,
    longitude: 11.97539
  },
  drinkList: [
    {
      ...brewed_coffee,
      shopId: 4,
      description: "Wiljkanders bästa"
    },
    {
      ...latte,
      description: "Lätt en Latte",
      shopId: 4
    }
  ]
};

const shops = [biblioteket, bulten, linsen, veras_cafe, wijkanders];

const coffeeSorts = [brewed_coffee, cappuccino, latte];

module.exports = {
  shops: shops,
  coffeeSorts: coffeeSorts
};
