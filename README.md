# julianbernal

Sitio de marketing personal de Julián Bernal construido con Next.js y Tailwind CSS.

## Desarrollo

```bash
cd next-app
npm install
npm run dev
```

Para generar la versión estática exportada:

```bash
npm run export
```

Los textos de la landing (ofertas, pasos y preguntas frecuentes) se definen en
archivos dentro de `next-app/src/data`. Puedes editarlos sin tocar los
componentes.

Las imágenes del sitio se cargan directamente desde
`https://julianbernal.cambiodigital.shop/media/` para mantener este repositorio
ligero y sin archivos binarios.
