// eslint-disable-next-line import/prefer-default-export
export default (types) => {
  const formatedType = types.map(({ type }) => ({
    name: type.name,
  }));

  return formatedType;
};
