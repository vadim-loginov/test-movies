export function setProp(obj, name) {
  return (val) => {
    obj[name] = val;
  };
}
