/**
 * ES6的一些使用技巧
 */

/**
 * 扁平化
 */
export const flattenedArray = () => {
  // 原对象
  const pre_Object = {
    采购部: [1, 2, 3],
    人事部: [5, 8, 12],
    行政部: [5, 14, 79],
    运输部: [3, 64, 105],
  }
  /**
   * 一个数组包含该对象的所有的值
   */
  const later_MultidimensionalArray = Object.values(pre_Object)
  /**
   * 多维数组转一维数组
   * 参数为Infinity时，无需知道被扁平化的数组的维度
  */
  const later_OneDimensionalArray = later_MultidimensionalArray.flat(Infinity)
  // 输出结果
  console.log(later_OneDimensionalArray)
}
