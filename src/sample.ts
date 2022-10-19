// import * as self from "./sample.mjs";

// export function fooFn(str: string) {
//   return str;
// }
export const fooFn = (str: string) => {
  return str;
};

export const barFn = () => {
  return fooFn("foo");
};

export default { fooFn, barFn };

// export const barFn = () => {
//   return fooFn("foo");
// };

// 実行結果まとめ
// jest(non-ESM)
// fooFnをconstにするとmock化される。functionにするとmock化されない
// barFnはfunctionでもmock化される

// vitest
// fooFnがconstでもmock化されない

// jest(ESM)
// module aliasに対してspyOnできなかったのでdefault exportにして試した結果、vitestと同様の結果に
