/** @jsxImportSource react */
/** @jsxRuntime automatic */
import type { JSX } from 'react'
import { Manifest } from 'vite'
import { GetHrefOptions, getHrefFromManifest } from '../utils/link'
export const Link = (props: GetHrefOptions & Omit<JSX.IntrinsicElements['link'], 'href'>) => {
  const { manifest, prod, baseUrl, ...rest } = props
  const href = getHrefFromManifest({ href: props.href, prod, manifest, baseUrl })
  return (import.meta.env && import.meta.env.PROD) ? <link {...rest} href={href} /> : null
}
