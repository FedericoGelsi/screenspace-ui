# ScreenSpace

## Features Principales

- La app cuenta con dos flujos principales: El de Usuario consumidor de películas y el de Dueños de cine.
- El flujo de Dueños está protegido mediante una autenticación de usuario y contraseña, y permitirá a los propietarios de cines cargar sus respectivos cines.
  - Podrán crear salas dentro de los cines y crear funciones.
- El flujo de Usuario está protegido con Google Auth, y en este se podrá descubrir películas disponibles que los Dueños cargaron en funciones, reservar tickets en alguna funcion y dejar reviews en las películas.

## Instalación

Para comenzar con ScreenSpace, sigue estos pasos:

1. Clona este repositorio: `git clone https://github.com/FedericoGelsi/screenspace-ui.git`
2. Navega al directorio del proyecto: `cd screenspace-ui/ScreenSpace`
3. Instala las dependencias: `npm install`

## Uso

Para ejecutar la aplicación en un simulador o dispositivo, utiliza los siguientes comandos:

- Android: `npm run android`

Recuerda tener configurado un AVD (Android Virtual Device) en Android Studio.

## Estructura de Carpetas

Describe brevemente la estructura de carpetas de tu aplicación. Puedes mencionar los directorios clave y sus propósitos.

- `/app`: Contiene el código de la aplicación.
- `/app/assets`: Almacena los recursos estáticos como imágenes, fuentes, traducciones, etc.
- `/app/navigation`: Contiene todo lo relacionado a la navegación de pantallas dentro de la app.
- `/app/networking`: Contiene todo lo relacionado a llamadas a la API a traves de WS.
- `/app/redux`: Contiene todo lo relacionado al almacenamiento de estado con Redux (Slices y Reducers).
- `/app/ui/components`: Contiene componentes reutilizables que se importan dentro de la app.
- `/app/ui/screens`: Contiene los componentes que representan las distintas pantallas.

## Acerca de Nosotros

Grupo 9 - Aplicaciones Distribuidas - UADE 2023
