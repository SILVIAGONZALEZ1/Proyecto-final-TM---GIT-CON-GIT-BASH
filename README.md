# Proyecto Final - Taller de Git con Git Bash

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Status](https://img.shields.io/badge/status-en%20desarrollo-yellow)

Trabajo grupal para el Taller de Git con Git Bash, de Casa del Futuro. Es una página que arma una tarjeta de presentación por cada integrante del equipo, con foto (o video), rol y las habilidades de cada uno. La idea del trabajo es practicar el flujo de Git en equipo: ramas, commits, y cómo coordinarse sin pisarse el trabajo entre todos.

## 👓​​ Vista del proyecto

![Vista de escritorio](img/demo_proyecto.gif)


## 🛠️​ Tecnologías

**HTML**, **CSS** y **JavaScript**, sin nada más. No hay backend ni instalación de por medio, es una página estática. Cada uno diseñó su propia tarjeta, tratando de respetar buenas prácticas de accesibilidad y semántica en el HTML. **Git** y **GitHub** para el control de versiones y el trabajo colaborativo.

## 🌳​ Estructura

```text
.
├── img/                  # Imágenes, avatares y assets visuales
├── js/                   # Scripts con las funcionalidades del proyecto
│   ├── formulario.js     # Manejo y envío del formulario
│   └── script.js         # Interactividad a través de botones
├── styles.css            # Estilos CSS generales y diseño responsivo
├── index.html            # Estructura principal (Navbar, tarjetas y footer)
├── .gitignore            # Archivos y carpetas ignorados por Git
└── README.md             # Documentación general del proyecto

```

- **index.html**: Punto de entrada de la aplicación. Contiene la barra de navegación, la grilla responsiva de tarjetas de integrantes y el pie de página.

- **styles.css**: Modela el diseño visual, paleta de colores, tipografía y la distribución de los elementos.

- **js/**: Almacena los scripts encargados de la interactividad o la carga dinámica de información.

- **img/**: Carpeta destinada a alojar los recursos gráficos (fotografías de perfil de los integrantes, logos e íconos).

- **.gitignore**: Define las reglas para excluir archivos temporales, configuraciones del entorno local o cachés del control de versiones.

- **README.md**: Fichero Markdown que contiene la presentación, guía de instalación y documentación general del taller.

## ⚡ Funcionalidades del Proyecto

- **Tarjetas de integrantes:** Muestra foto, nombre y habilidades técnicas de cada miembro del equipo.
- **Filtro de habilidades:** Permite buscar o filtrar desarrolladores según sus competencias técnicas.
- **Descarga de CV:** Botón directo para descargar el currículum de cada integrante.
- **Formulario de contacto:** Permite el envío de mensajes dirigidos a los integrantes del proyecto.
- **Navegación fluida:** Barra superior fija con desplazamiento suave (smooth scroll) entre secciones.

 
## ❗​ Cómo verla

No hace falta instalar nada. Cloná el repo:
```bash
git clone https://github.com/SILVIAGONZALEZ1/Proyecto-final-TM---GIT-CON-GIT-BASH.git
```

y abrís `index.html` directo en el navegador. Si querés que recargue solo cada vez que guardás un cambio, podés usar la extensión Live Server de VS Code.

## 🖐️​ Quiénes somos

- Silvia González - profesora, coordina el proyecto
- Jimena García - Data Analyst Jr.
- Heber José Vergara - desarrollo y soporte técnico
- Lucas David Adrover - backend

## Ramas

Regla del equipo: nadie pushea directo a main. Cada uno trabaja en su propia rama y los cambios entran a main por Pull Request.

```bash
git checkout -b nombre-de-tu-rama
```

Para nombrar las ramas veníamos usando algo así:
- feature/algo -> cuando se agrega algo nuevo
- fix/algo -> para arreglar un bug
- docs/algo -> cambios de documentación

## ⚠️​ Si vas a sumar algo

1. Creá tu rama desde main (nunca trabajes directo sobre main).
2. Commiteá con mensajes que se entiendan (ej: "corrige accesibilidad tarjeta heber").
3. Pusheá tu rama: `git push origin nombre-de-tu-rama`.
4. Abrí un Pull Request hacia main contando qué cambiaste.
5. Se espera la revisión del equipo antes de mergear.