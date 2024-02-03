function capitalize(input) {
  const arr = input ? input.split(" ") : [];
  return arr.map((str) => str[0].toUpperCase() + str.slice(1)).join(" ");
}

export default capitalize;
