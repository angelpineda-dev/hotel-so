const result = (a = 1, b = 1) => {
  if (!a || !b) {
    return;
  }

  return (c = a + b);
};
