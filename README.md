# Notas

## Descripción

Notas es una aplicación web desarrollada con React y Next.js que permite gestionar notas utilizando una base de datos en firestore. La aplicación permite listar notas, crear, editar y eliminar notas, mostrando notificaciones para cada acción realizada.

## Características

- **Listado de notas**: Visualización de notas en una lista de tarjetas.
- **Crear notas**: Formulario para crear nuevas notas.
- **Editar notas**: Modificar las notas existentes.
- **Eliminar notas**: Eliminar notas con confirmación mediante un modal.
- **Notificaciones modales**: Mensajes informativos sobre las acciones realizadas (crear, editar, eliminar).

## Despliegue

Puedes visitar la aplicación desplegada en el siguiente enlace:

[Visitar Notas](https://notes-frontend-gray.vercel.app/)

## Autor

- **Danilo Amaris** - [GitHub](https://github.com/danilojs17)

## Instalación

### Prerrequisitos

- Node.js >= 18.x.x
- Yarn, npm o pnpm

### Pasos de instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/danilojs17/notes-frontend.git
   ```
2. Accede al directorio del proyecto:

   ```bash
   cd notes-frontend
   ```

3. Instala las dependencias. Puedes usar pnpm, npm o yarn:

Si usas pnpm

```bash
pnpm install
```

Si usas npm

```bash
npm install
```

O si prefieres yarn

```bash
yarn install
```

4. Crea un archivo .env con las variables de entorno necesarias, basándote en un archivo de ejemplo template.env

5. Inicia el servidor de desarrollo:

```bash
pnpm run dev
# O con npm
npm run dev
# O con yarn
yarn dev
```

6. Ejecución de Pruebas
   Para ejecutar las pruebas, utiliza el siguiente comando:

```bash
pnpm run test
# O con npm
npm run test
# O con yarn
yarn test
```

7. Abre el navegador y accede a http://localhost:3000 para ver la aplicación en funcionamiento.

## Tecnologías

- [React.js](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Axios](https://axios-http.com/)
- [Firestore](https://firebase.google.com/docs/firestore?hl=es-419)

## Referencias

- [Documentación oficial de React](https://react.dev/reference/react)
- [Documentación oficial de Next.js](https://nextjs.org/docs)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Documentación de Axios](https://axios-http.com/docs/intro)
- [Documentación de React Hook Form](https://react-hook-form.com/get-started)
- [TanStack Query](https://tanstack.com/query)
