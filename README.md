# Ejercicio de React - Render infinito! ∞

En este problema te proponemos solucionar un bug que puede ocurrirnos cuando trabajamos con React, un render infinito!

> La solución pasa por modificar **únicamente** el archivo `App.jsx`. No debes tocar ningún otro archivo.

### Cómo lanzar el proyecto

- Instala las dependencias con `npm install`.
- Corre el proyecto en local con `npm run dev`.

### Requerimientos

- Solamente puedes usar la función `enhanceWithTypes` una vez en todo el archivo `App.jsx`.
- El prop `pokemon` que bajamos a `PokemonList` debe tener un listado de Pokemon (no importa si están reptidos) con su tipo añadido obligatoriamente. En caso contrario se romperá la aplicación.
- El botón cargar más debe seguir funcionando cuando arregles el ejercicio.

### Pistas

- No recomendamos tocar ningún useEffect para dar con una solución más eficaz.
- Comprueba e intenta entender bien qué ocurre en cada render.
