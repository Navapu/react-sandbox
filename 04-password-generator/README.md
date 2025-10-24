# 🔐 Password Generator (React + TypeScript + Vite)

Este proyecto forma parte de una serie de retos para practicar React.  
En este caso, se ha desarrollado un **generador de contraseñas aleatorias** con múltiples opciones de personalización.

## 🧠 Objetivo

Permitir al usuario generar contraseñas seguras seleccionando los tipos de caracteres que desea incluir y poder copiarlas fácilmente al portapapeles.

## 🚀 Funcionalidades principales

- **Generación de contraseñas aleatorias**  
  - Incluye letras minúsculas, mayúsculas, números y símbolos.  
  - La contraseña se regenera automáticamente al cambiar las opciones seleccionadas.  

- **Personalización total**  
  - El usuario puede activar o desactivar los diferentes tipos de caracteres.  
  - Siempre hay al menos una opción seleccionada para evitar errores.  

- **Copiado al portapapeles**  
  - Un clic en el botón 📋 copia la contraseña generada.  
  - Muestra un icono de confirmación ✅ temporal al copiar.

- **Diseño responsivo y claro**  
  - Interfaz minimalista con colores oscuros y botones destacados.  
  - Uso de `font-mono` para mostrar la contraseña de forma legible.

## ✅ Comportamiento esperado

- Si no se selecciona ninguna opción, muestra un mensaje de advertencia.  
- La contraseña se genera automáticamente al cambiar las opciones.  
- El botón de copiado muestra un feedback visual durante unos segundos.

## 📁 Estructura del proyecto

Proyecto creado con **Vite + React + TypeScript**, con la siguiente estructura principal:

- `src/App.tsx`: Componente principal con la lógica del generador.  
- `src/App.css`: Estilos base.  
- Archivos de configuración estándar de Vite y TypeScript.

## 🧩 Tecnologías utilizadas

- **React** (con Hooks: `useState`, `useEffect`)  
- **TypeScript**  
- **Vite**  
- **Tailwind CSS** (para el diseño) 

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