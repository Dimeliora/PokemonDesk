const toCapitalizeFirstLetter = (value: string): string => {
  if (value.length === 0) return '';
  return value[0].toUpperCase() + value.slice(1).toLowerCase();
};

export default toCapitalizeFirstLetter;
