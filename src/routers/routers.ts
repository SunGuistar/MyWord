/**
 * 路由
 */
import { dynamicWrapper } from "Src/utils";

export const routerConfig = (app: any) => ({
  path: '/main',
  name: '主页',
  component: dynamicWrapper(app, [],() => {}),
  children: [
    {
      path: 'react',
      name: 'React',
      component: dynamicWrapper(app, [], () => {}),
      children: [
        {
          path: 'hooks',
          name: 'Hooks',
          component: dynamicWrapper(app, [], () => import('Src/pages/FrontEnd/React/Hooks/index'))
        }
      ]
    }
  ]

})



