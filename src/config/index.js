export { default as ENUMS } from './enums';

const { baseURL } = window.GLOBAL_CONFIG;

export const domains = {
  base: baseURL,
};

// 默认分页查询
export const PAGE = {
  size: 10,
  num: 1
};
