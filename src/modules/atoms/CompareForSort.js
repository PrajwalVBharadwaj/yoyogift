export const comparePointsAsc = (a, b) => {
  if (a.cardPoints > b.cardPoints) {
    return 1;
  }
  return -1;
};
export const comparePointsDesc = (a, b) => {
  if (a.cardPoints < b.cardPoints) {
    return 1;
  }
  return -1;
};
export const compareCountAsc = (a, b) => {
  if (a.cardCount > b.cardCount) {
    return 1;
  }
  return -1;
};
export const compareCountDesc = (a, b) => {
  if (a.cardCount < b.cardCount) {
    return 1;
  }
  return -1;
};
export const compareValidityAsc = (a, b) => {
  if (a.cardExpiryDate > b.cardExpiryDate) {
    return 1;
  }
  return -1;
};
export const compareValidityDesc = (a, b) => {
  if (a.cardExpiryDate < b.cardExpiryDate) {
    return 1;
  }
  return -1;
};
