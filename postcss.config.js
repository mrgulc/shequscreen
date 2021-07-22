/*
 * @Description:
 * @Author: MRG
 * @Date: 2021-07-15 10:17:48
 * @LastEditors: MRG
 * @LastEditTime: 2021-07-22 10:30:39
 */
module.exports = {
  plugins: [
    require('postcss-preset-env'),
    require('postcss-px-to-viewport')({
      viewportWidth: 1920,
      viewportHeight: 1080,
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore'],
      minPixelValue: 1,
      mediaQuery: false
    })
  ]
}
