/*
 * @Description:
 * @Author: MRG
 * @Date: 2021-07-07 16:55:07
 * @LastEditors: MRG
 * @LastEditTime: 2021-07-21 17:09:11
 */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: 3,
        useBuiltIns: 'usage'
      }
    ]
  ]
}
