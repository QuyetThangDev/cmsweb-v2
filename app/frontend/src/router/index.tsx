import React, { Suspense } from 'react'
import { createBrowserRouter, RouteObject } from 'react-router-dom'
import menuConfig from '@/router/routes'
import { Route } from '@/types/route.type'

const createRouteObject = (route: {
  title: string
  path: string
  component?: () => Promise<{ default: React.ComponentType }>
  children?: Route[]
}): RouteObject => {
  const { component, children } = route

  const Element = React.lazy(async () => {
    const module = await component!()
    return { default: module.default }
  })

  return {
    path: route.path,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Element />
      </Suspense>
    ),
    children: children?.map(createRouteObject)
  }
}

const { routes } = menuConfig

const routeObjects = routes.map(createRouteObject)

export const router = createBrowserRouter(routeObjects)
