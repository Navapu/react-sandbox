# Contador Mejorado (React + TypeScript + Vite)

Este es un proyecto de ejemplo creado para practicar los conceptos básicos de React como `useState` y `useEffect`, así como lógica reactiva. Se trata de una aplicación que muestra un contador configurable con persistencia de estado a través de `localStorage`.

## 🧠 Objetivo

Permitir al usuario interactuar con un contador que:

- Se inicia en cero (o en el valor previamente guardado).
- Puede incrementarse, decrementarse o reiniciarse.
- Está limitado por un rango mínimo y máximo definido.
- Guarda su valor actual en `localStorage` para mantenerlo entre sesiones.

## 🚀 Funcionalidades principales

- **Contador visual**: Se muestra el valor actual en pantalla.
- **Botones de control**:
  - Incrementar (➕)
  - Decrementar (➖)
  - Resetear a 0 (🔄)
- **Límites predefinidos**: El contador no puede superar un valor máximo ni bajar de un valor mínimo. Por defecto, estos valores son:
  - Mínimo: `-5`
  - Máximo: `10`
- **Persistencia automática**: El valor del contador se guarda en `localStorage`, por lo que al recargar la página, se mantiene.

## 🧩 Funcionalidades adicionales (bonus)

- **Inputs para límites**: El usuario puede modificar los valores mínimo y máximo directamente desde la interfaz, y el contador se ajustará a esos nuevos límites automáticamente.
- **Botón para limpiar estado**: Se incluye una opción para eliminar el valor guardado en `localStorage` y restaurar el contador a su estado inicial.

## ✅ Comportamiento esperado

- El contador comienza en 0, salvo que ya exista un valor guardado previamente.
- No se permite incrementar el valor si ya se alcanzó el máximo.
- No se permite decrementar si ya se alcanzó el mínimo.
- Al presionar el botón de reinicio, el contador vuelve a 0 y se actualiza en `localStorage`.
- Al cambiar los límites:
  - Si el nuevo mínimo es mayor que el máximo, se muestra un mensaje de error y no se aplican los cambios.
  - Si el valor actual del contador queda fuera del nuevo rango, se ajusta automáticamente al límite más cercano.
- Si se introducen valores no numéricos en los límites, se ignora el cambio y se muestra una advertencia.

## 📁 Estructura del proyecto

Este proyecto usa la plantilla estándar de Vite con React y TypeScript. Los archivos principales son:

- `src/App.tsx`: Componente principal donde se gestiona la lógica del contador.
- `src/main.tsx`: Punto de entrada de la aplicación.
- Archivos de configuración (`index.html`, `vite.config.ts`, `tsconfig.json`, etc.) propios de Vite y TypeScript.

## 🛠️ Instalación y ejecución

Para correr este proyecto localmente:

# Contador Mejorado (React + TypeScript + Vite)

Este es un proyecto de ejemplo creado para practicar los conceptos básicos de React como `useState` y `useEffect`, así como lógica reactiva. Se trata de una aplicación que muestra un contador configurable con persistencia de estado a través de `localStorage`.

## 🧠 Objetivo

Permitir al usuario interactuar con un contador que:

- Se inicia en cero (o en el valor previamente guardado).
- Puede incrementarse, decrementarse o reiniciarse.
- Está limitado por un rango mínimo y máximo definido.
- Guarda su valor actual en `localStorage` para mantenerlo entre sesiones.

## 🚀 Funcionalidades principales

- **Contador visual**: Se muestra el valor actual en pantalla.
- **Botones de control**:
  - Incrementar (➕)
  - Decrementar (➖)
  - Resetear a 0 (🔄)
- **Límites predefinidos**: El contador no puede superar un valor máximo ni bajar de un valor mínimo. Por defecto, estos valores son:
  - Mínimo: `-5`
  - Máximo: `10`
- **Persistencia automática**: El valor del contador se guarda en `localStorage`, por lo que al recargar la página, se mantiene.

## 🧩 Funcionalidades adicionales (bonus)

- **Inputs para límites**: El usuario puede modificar los valores mínimo y máximo directamente desde la interfaz, y el contador se ajustará a esos nuevos límites automáticamente.
- **Botón para limpiar estado**: Se incluye una opción para eliminar el valor guardado en `localStorage` y restaurar el contador a su estado inicial.

## ✅ Comportamiento esperado

- El contador comienza en 0, salvo que ya exista un valor guardado previamente.
- No se permite incrementar el valor si ya se alcanzó el máximo.
- No se permite decrementar si ya se alcanzó el mínimo.
- Al presionar el botón de reinicio, el contador vuelve a 0 y se actualiza en `localStorage`.
- Al cambiar los límites:
  - Si el nuevo mínimo es mayor que el máximo, se muestra un mensaje de error y no se aplican los cambios.
  - Si el valor actual del contador queda fuera del nuevo rango, se ajusta automáticamente al límite más cercano.
- Si se introducen valores no numéricos en los límites, se ignora el cambio y se muestra una advertencia.

## 📁 Estructura del proyecto

Este proyecto usa la plantilla estándar de Vite con React y TypeScript. Los archivos principales son:

- `src/App.tsx`: Componente principal donde se gestiona la lógica del contador.
- `src/main.tsx`: Punto de entrada de la aplicación.
- Archivos de configuración (`index.html`, `vite.config.ts`, `tsconfig.json`, etc.) propios de Vite y TypeScript.

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
