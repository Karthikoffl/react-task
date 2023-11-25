export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const incrementItem = (item) => ({
  type: "INCREMENT_ITEM",
  payload: item,
});

export const decrementItem = (item) => ({
  type: "DECREMENT_ITEM",
  payload: item,
});
