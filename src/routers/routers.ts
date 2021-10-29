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
      path: 'frontEnd',
      name: '前端',
      component: dynamicWrapper(app, [], () => import('Src/pages/FrontEnd')),
      children: [
        {
          path: 'react',
          name: 'React',
          component: dynamicWrapper(app, [], () => import('Src/pages/FrontEnd/React')),
          children: [
            {
              path: 'hooks',
              name: 'Hooks',
              component: dynamicWrapper(app, [], () => import('Src/pages/FrontEnd/React/Hooks'))
            }
          ]
        },
        {
          path: 'skill',
          name: '技巧',
          component: dynamicWrapper(app, [], () => import('Src/pages/FrontEnd/Skill')),
          children: [
            {
              path: 'designPattern',
              name: '设计模式',
              component: dynamicWrapper(app, [], () => import('Src/pages/FrontEnd/Skill/DesignPattern'))
            },
            {
              path: 'es6',
              name: 'ES6',
              component: dynamicWrapper(app, [], () => import('Src/pages/FrontEnd/Skill/ES6'))
            }
          ]
        },
      ]
    },
  ]
})



