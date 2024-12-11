export const debounce = async (fn: any, delay: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fn);
    }, delay);
  })
}