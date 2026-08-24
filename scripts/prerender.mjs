import { readFile, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const clientHtmlPath = resolve(projectRoot, 'dist', 'index.html')
const serverBuildPath = resolve(projectRoot, 'dist-ssr')
const serverEntryUrl = new URL('../dist-ssr/entry-server.js', import.meta.url)

const template = await readFile(clientHtmlPath, 'utf8')

if (!template.includes('<!--app-html-->')) {
  throw new Error('No se encontró el punto de inserción del contenido prerenderizado.')
}

const { render } = await import(serverEntryUrl.href)
const appHtml = render()
const html = template.replace('<!--app-html-->', appHtml)

await writeFile(clientHtmlPath, html, 'utf8')
await rm(serverBuildPath, { recursive: true, force: true })

console.log('Página prerenderizada en dist/index.html')
