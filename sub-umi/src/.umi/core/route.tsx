// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"1":{"path":"/","redirect":"/page1","parentId":"@@/global-layout","id":"1"},"2":{"path":"/page1","parentId":"@@/global-layout","id":"2"},"3":{"path":"/page2","parentId":"@@/global-layout","id":"3"},"@@/global-layout":{"id":"@@/global-layout","path":"/","isLayout":true}} as const;
  return {
    routes,
    routeComponents: {
'1': React.lazy(() => import('./EmptyRoute')),
'2': React.lazy(() => import(/* webpackChunkName: "p__page1__index" */'@/pages/page1/index.tsx')),
'3': React.lazy(() => import(/* webpackChunkName: "p__page2__index" */'@/pages/page2/index.tsx')),
'@@/global-layout': React.lazy(() => import(/* webpackChunkName: "layouts__index" */'/Users/may/Project/qiankkun/qiankun-test-project/sub-umi/src/layouts/index.tsx')),
},
  };
}
