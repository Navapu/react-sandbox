# Lista de Tareas (React + TypeScript + Vite)

Este es un proyecto de ejemplo creado para practicar conceptos fundamentales de React como `useState`, `useEffect` y manejo de estado persistente con `localStorage`. Se trata de una aplicación donde el usuario puede gestionar una lista de tareas.

## 🧠 Objetivo

Permitir al usuario crear, visualizar, completar y eliminar tareas de forma sencilla, con persistencia local y filtros personalizables.

## 🚀 Funcionalidades principales

- **Agregar tareas**:  
  - Campo de texto y botón para añadir nuevas tareas.  
  - Cada tarea contiene un texto, un estado (`pendiente` o `completada`) y una marca de tiempo.

- **Visualización de tareas**:  
  - Las tareas se muestran en orden de creación.  
  - Las completadas se distinguen con estilo tachado u otro visual.

- **Interacción con tareas**:  
  - Marcar como completada o pendiente con un clic o checkbox.  
  - Eliminar tareas individualmente mediante un botón ❌.

- **Persistencia automática**:  
  - Toda la información se guarda en `localStorage`, por lo que no se pierde al recargar la página.

## 🧩 Funcionalidades adicionales (bonus)

- **Filtros por estado**:  
  - Ver todas las tareas, solo las completadas o solo las pendientes.

- **Eliminar completadas**:  
  - Botón adicional para borrar todas las tareas marcadas como completadas.

## ✅ Comportamiento esperado

- No se permite añadir tareas vacías (puede ignorarse o mostrar una advertencia).
- Al cambiar el filtro, la lista se actualiza de inmediato.
- Si el usuario intenta eliminar todas las completadas y hay muchas, puede confirmarse antes (opcional).
- Si `localStorage` no está disponible, la app sigue funcionando con datos en memoria.

## 📁 Estructura del proyecto

Este proyecto utiliza la plantilla estándar de Vite con React y TypeScript. Los archivos principales son:

- `src/App.tsx`: Componente principal que gestiona la lógica de la lista de tareas.
- `src/hooks/useTodos.ts`: Hook personalizado para encapsular la lógica de las tareas (opcional pero recomendado).
- `src/main.tsx`: Punto de entrada de la aplicación.
- Archivos de configuración (`index.html`, `vite.config.ts`, `tsconfig.json`, etc.) estándar de Vite y TypeScript.

## 🛠️ Instalación y ejecución

Para correr este proyecto localmente:

1. **Instalación de dependencias**

   Ejecuta el siguiente comando en la terminal:

```powershell
npm install
```

2. **Modo desarrollo**

Para iniciar la aplicación en modo desarrollo:

```powershell
npm run dev
```

3. **Compilación para producción**

Para generar una versión optimizada:

```powershell
npm run build
```

4. **Vista previa del build**

Para ver la aplicación compilada en producción localmente:

```powershell
npm run preview
```

## 🌐 Acceso a la aplicación

Una vez iniciada en modo desarrollo, la aplicación estará disponible normalmente en:

[http://localhost:5173](http://localhost:5173)