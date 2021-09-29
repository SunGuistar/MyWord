import dynamic from 'dva/dynamic';

/**
 * 生成动态组件
 * @param app 挂载的对象，即你将要把这个router挂载到哪个实例上
 * @param models 这个router所需要的model
 * @param component 这个router的组件
 * @returns
 */
export const dynamicWrapper = (app: any, models: any, component: any) => {
  return dynamic({ app, models: () => models, component } as any)
}

