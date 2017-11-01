# Prueba de factibilidad - aplicación

Modularización de la [prueba de factibilidad](https://github.com/OpenSITMUN/prueba-de-factibilidad)

Tras hacer copia local de los repos
* [sitmun-pof-app-pof](https://github.com/OpenSITMUN/sitmun-pof-app-pof) 
* [sitmun-pof-plugin-core](https://github.com/OpenSITMUN/sitmun-pof-plugin-core)
* [sitmun-pof-plugin-demo](https://github.com/OpenSITMUN/sitmun-pof-plugin-demo)

Pasos
```bash
$ cd sitmun-pof-plugin-core
$ gradle clean install
$ cd sitmun-pof-plugin-demo
$ gradle clean install
$ cd sitmun-pof-app-pof
$ gradle clean bootRun
```

Y navegar a http://localhost:8080
