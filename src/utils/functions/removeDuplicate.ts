const removeDuplicate = <T>(array: T[], field: keyof T): T[keyof T][] => {
  return [...new Set(array?.map((item: T) => item[field]))];
};

export default removeDuplicate;
