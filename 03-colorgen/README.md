# Generador de Colores (React + TypeScript + Vite)

Este es un proyecto de ejemplo creado para practicar conceptos fundamentales de React como `useState`, `useEffect` y el manejo de datos persistentes con `localStorage`.  
La aplicación permite generar colores aleatorios en formato hexadecimal, guardarlos, copiarlos y eliminarlos fácilmente.

---

## 🧠 Objetivo

Permitir al usuario generar colores aleatorios y gestionarlos en una paleta personal con persistencia local.

---

## 🚀 Funcionalidades principales

- **Generar colores aleatorios**:  
  - Cada clic genera un color en formato hexadecimal (`#RRGGBB`).  
  - El color se muestra visualmente en un contenedor.

- **Guardar colores**:  
  - Los colores generados se pueden guardar con un clic.  
  - Los colores se almacenan en `localStorage` para mantenerlos al recargar la página.

- **Copiar colores**:  
  - Al hacer clic en un color guardado, se copia automáticamente al portapapeles.  
  - Se muestra una notificación confirmando la copia.

- **Eliminar colores**:  
  - Cada color guardado puede eliminarse individualmente mediante un botón ❌.

- **Persistencia automática**:  
  - Los colores guardados permanecen incluso tras cerrar o recargar la aplicación.

---

## 🧩 Funcionalidades adicionales (bonus)

- **Notificaciones visuales**:  
  - Uso de `react-toastify` para mostrar mensajes de confirmación o alerta.  
- **Diseño adaptable**:  
  - Los colores se muestran en una cuadrícula que se ajusta automáticamente al ancho disponible.  
- **Identificadores únicos**:  
  - Cada color guardado tiene un `id` generado con `crypto.randomUUID()` para su correcta gestión.

---

## ✅ Comportamiento esperado

- Cada nuevo color debe generarse de forma completamente aleatoria.  
- No se deben guardar duplicados de forma consecutiva (opcional).  
- Al copiar un color, debe mostrarse una notificación visual inmediata.  
- Al eliminar un color, este desaparece de la interfaz sin necesidad de recargar.  
- Si `localStorage` no está disponible, la app sigue funcionando en memoria.

---

## 📁 Estructura del proyecto

Este proyecto utiliza la plantilla estándar de Vite con React y TypeScript.  
Los archivos principales son:

- `src/App.tsx`: Componente principal que gestiona la generación, copia y eliminación de colores.  
- `src/App.css`: Estilos generales del proyecto.  
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