let data = {
  customer: {
    firstName: "Ali",
    address: { city: "kabul", zipCode: "2013" },
    orders: [
      { item: "pizza", qty: 2 },
      { item: "Icecream", qty: 1 },
    ],
  },
};
function summarizeorder({
  customer: {
    firstName,
    address: { city },
    orders: [{ item: item1, qty: qt1 }, { item: item2, qty: qt2 }],
  },
}) {
  return `${firstName} from ${city} ordered ${qt1} ${item1}s and ${qt2} ${item2}s`;
}

console.log(summarizeorder(data));
