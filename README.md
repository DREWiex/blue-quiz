# Blue

El proyecto "Blue" es el resultado final desarrollado en conjunto por los alumnos de los bootcamps de Full Stack, UX/UI, Data Science y Ciberseguridad para el Desafío de Tripulaciones de la promoción de Enero 2023 en The Bridge. Se trata de un quiz interactivo que mide la huella hídrica de las personas que lo contestan, clasificándolas en función de su consumo como "Saver" (ahorrador) o "Spender" (gastador).

El objetivo principal de "Blue" es concienciar a los usuarios sobre su consumo de agua y fomentar prácticas sostenibles. La aplicación realiza un seguimiento en tiempo real de los litros de agua que consume cada usuario por día y, al final del quiz, ofrece la posibilidad de reservar "SmartBlue" con un descuento del 40%. "SmartBlue" es un producto en fase de desarrollo que ayudará a ahorrar tanto agua como dinero a aquellos que lo adquieran.

Además de medir la huella hídrica, "Blue" proporciona un informe final que muestra el consumo total de litros de agua por día y el gasto anual en euros, comparándolos con la media en España. También propone retos personalizados para ayudar al usuario a ahorrar agua, dinero y contribuir al cuidado del medioambiente.

## Características principales

- Quiz interactivo para medir la huella hídrica de los usuarios.
- Clasificación de los usuarios como "Saver" o "Spender" según su consumo de agua.
- Seguimiento en tiempo real de los litros de agua consumidos por día.
- Utilización del componente `react-wavify` para agregar el efecto de la ola que crece en función del consumo acumulado del usuario.
- Informe final con el resultado total de litros/día y euros gastados al año.
- Propuesta de retos personalizados para ahorrar agua y dinero.
- Enfoque en la concienciación y el cuidado del medioambiente.
- Posibilidad de reservar "SmartBlue" con un descuento del 40%, producto que ayuda en el ahorro tanto de agua como dinero.

## Despliegue

La aplicación se encuentra desplegada y disponible en Netlify: [https://blue-quiz.netlify.app/](https://blue-quiz.netlify.app/).

## Capturas de pantalla

#### Mobile

| Blue Quiz - Intro | Blue Quiz - Question 9 | Blue Quiz - Challenges |
| :-------------:| :-------------:| :-------------:|
| ![Blue Quiz - Intro](/public/readme/01-quiz-mobile-intro.png) | ![Blue Quiz - Question](/public/readme/02-quiz-mobile-question.png) | ![Blue Quiz - Challenges](/public/readme/03-quiz-mobile-challenges.png) |

#### Web

| Blue Quiz - Question 11 |
| :-------------:|
| ![Blue Quiz - Question ](/public/readme/04-quiz-web-question.png) |

---

## Instalación

1. Clona el repositorio en local.
```shell
git clone https://github.com/DREWiex/blue-quiz.git
```

2. Ve al directorio del proyecto.
```shell
cd blue
```

3. Instala las dependencias utilizando yarn.
```shell
yarn install
```

4. Inicia la aplicación en tu entorno de desarrollo local.
```shell
yarn dev
```

## Configuración

Antes de ejecutar la aplicación, asegúrate de configurar correctamente la siguiente variable de entorno:

- `VITE_URL_BASE`: especificar el localhost.

Para ello debes crear un archivo `.env` en la raíz del proyecto y asignarle el valor correspondiente.

---

## Tecnologías utilizadas

- React
- Redux
- HTML5
- CSS3
- JavaScript

---

## Equipo

#### Full Stack
- Andrés León
- Leonardo Esteve
- Marcos Delgado

#### UX/UI
- Andina Castaño
- José García
- Laura García

#### Data Science
- Daniel Carrera
- Ignacio García-Barrero
- Jimena Alía
- Sebastián Olivera

#### Ciberseguridad
- Juan Calvo
- Rodrigo Salata
- Víctor Esteban

#### Mentor
- Alejandro Cárabe

---

## Contacto

Si tienes alguna pregunta, sugerencia o comentario, no dudes en contactarme. Puedes enviar un correo electrónico a [dreweloper@gmail.com](mailto:dreweloper@gmail.com).

Esperamos que disfrutes utilizando "Blue" y que te ayude a tomar conciencia sobre el consumo de agua y el cuidado del medioambiente. ¡Gracias por tu interés y contribución!

![Blue logo](/public/readme/logo.png)