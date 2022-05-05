Bienvenido
El presente Documento es para explicar la estructura que se desarrolla en este proyecto
Dentro de /src se desarrollo la aplicacion y tiene la siguiente estructura:
**********************************************************************************************************************************
/components
Dentro de esta carpeta se encuentran los diferentes componentes que se utilizan dentro de las /paginas que mas explicare a continuacion,
cada componente es llamado por una pagina(tambien son componentes que fungen como paginas a traves del routing)
**********************************************************************************************************************************
/pages
dentro de esta carpeta se encuentran las paginas o pantallas principales bajo las cuales renderizan los compontentes visuales que se 
encuentran presentes dentro de /components
Tambien desde este archico se hacen las llamadas a las apis y pasa el result a los componentes visuales a traves de props
**********************************************************************************************************************************
/model
se encuentran las conexiones a las APIS(fake APIS, Mocks),
desde ahi se obtienen los productos filtrados por categoria, por id o todos los productos segun la ruta que hayamos ejecutado
***********************************************************************************************************************************

En resumen esos son los tres grandes arboles de capetas utilizados en este proyecto, el resto de elementos como el index.jsx siendo 
el archivo principal de la app que renderiza el componente <App /> que es sobre el cual se renderizan las paginas a traves del route, 
y las paginas llaman a las APIS y pasan como props los resultados(Porductos filtrados por categoria, por id o todos).

Los demas archivos forman parte de la estructura generada por react o git(.gitignore)