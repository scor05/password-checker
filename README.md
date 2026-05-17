# Password Strength Checker
Este es un proyecto bastante simple que funciona como un calificador de "fuerza" para contraseñas, principalmente hecho solo para familiarizarme con testing en vitest con react testing library.

## Especificaciones
Para instalar el proyecto, es solo necesario ejecutar `bun install`, y ya con eso se descargarán todas las dependencias utilizadas. Luego, para correr los tests, el proyecto ya está configurado para que `bun run test` ejecute todos los tests correspondientes. Y por último, para ver el proyecto en modo de desarrollo solo se debe de correr `bun run dev`, y eso expondrá el puerto local 5173 para ver el proyecto en el browser.

---
## Descripción del flujo TDD
Para este proyecto seguí el flujo que nos enseñaron en clase de hacer los tests antes que el código y basar el desarrollo en ellos, lo cual a mí me sonó bastante anti-intuitivo al inicio porque los tests nos habían enseñado que eran para probar el código ya hecho. Sin embargo, el hacerlo así me sirvió bastante para saber qué falta de implementar y llevar un buen orden.

Luego de haber hecho los tests, lo que hice justo después es hacer la lógica de determinación de la fortaleza de la contraseña con regex, junto con el input mínimo que registra la contraseña. Después de vincular el input con la función, hice el label que muestra en sí el nivel de fuerza de la contraseña, lo cual ya me permitió volver a correr todos los tests con esa versión mínima y pasaron todos (tuve que corregir los tests en sí porque puse mal el selector para el input en casi todos los casos, por eso hay un cambio en el archivo de .test después del commit que subí que lo escribió). 

Ya con todos los tests corriendo, hice los estilos CSS para los componentes para que no se miren tan feos y verifiqué que no haya roto ninguno de los tests en ese proceso. 
