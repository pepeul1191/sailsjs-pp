# demo-sails

Instalar dependencias:

    $ npm install

Arrancar la aplicación:

    $ sails lift
    $ sails lift --port=1338

Configuración de la ruta de los arhicos estáticos esté en el archivo:


    .sailsrc

Configuracines adicionales en fuente[4]

Generar un hook:

    $ sails generate hook <<nombre_hoook>>

Para ver que hooks se están cargando al arrancar la aplicación:

    $ sails lift --verbose

---

Fuentes:

+ https://sailsjs.com/get-started
+ https://github.com/sgress454/sails-hook-autoreload
+ https://stackoverflow.com/questions/34025614/changing-the-default-sails-public-folder
+ http://walidhosseini.com/journal/2014/10/21/sails-config-hooks-policies-and-services.html
+ https://sailsjs.com/documentation/concepts/extending-sails/hooks/hook-specification
+ https://sailsjs.com/documentation/concepts/views/partials
