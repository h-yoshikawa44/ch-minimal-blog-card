/** @type {import("@markuplint/ml-config").Config} */
export default {
  extends: ['markuplint:recommended-static-html'],
  excludeFiles: ['./node_modules/**/*.html'],
  rules: {
    // ページを作るというより、カード要素のみを作っている課題のため、見出し構成ルールを無効にする
    'heading-levels': false,
  },
};
