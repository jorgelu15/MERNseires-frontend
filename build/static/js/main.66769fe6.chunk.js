(this.webpackJsonppresupuesto=this.webpackJsonppresupuesto||[]).push([[0],{37:function(e,a,t){e.exports=t(68)},42:function(e,a,t){},44:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),c=t.n(l),o=(t(42),t(43),t(44),t(2)),i=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark navbar-bg-dark"},r.a.createElement(o.b,{className:"navbar-brand",to:"/"},"WebAnime "),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(o.b,{className:"nav-item nav-link",to:"/"},"Inicio ",r.a.createElement("span",{className:"sr-only"},"(current)")),r.a.createElement(o.b,{className:"nav-item nav-link",to:"/directorio"},"Directorio ")),r.a.createElement("form",{className:"form-inline my-2 my-lg-0 ml-auto"},r.a.createElement("input",{className:"form-control mr-sm-2 busqueda",type:"search",placeholder:"Buscar...","aria-label":"Search"})))))},s=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"col-md-3 d-none d-sm-block"},r.a.createElement("h3",null,"En emision"),r.a.createElement("ul",{className:"list-group list-group-flush "},r.a.createElement(o.b,{className:"list-group-item background-dark",to:"/serie"},"Cras justo odio"),r.a.createElement(o.b,{className:"list-group-item background-dark",to:"/serie"},"Dapibus ac facilisis in"),r.a.createElement(o.b,{className:"list-group-item background-dark",to:"/serie"},"Cras justo odio"),r.a.createElement(o.b,{className:"list-group-item background-dark",to:"/serie"},"Dapibus ac facilisis in"),r.a.createElement(o.b,{className:"list-group-item background-dark",to:"/serie"},"Cras justo odio"),r.a.createElement(o.b,{className:"list-group-item background-dark",to:"/serie"},"Dapibus ac facilisis in"),r.a.createElement(o.b,{className:"list-group-item background-dark",to:"/serie"},"Cras justo odio"),r.a.createElement(o.b,{className:"list-group-item background-dark",to:"/serie"},"Dapibus ac facilisis in"),r.a.createElement(o.b,{className:"list-group-item background-dark",to:"/serie"},"Cras justo odio"),r.a.createElement(o.b,{className:"list-group-item background-dark",to:"/serie"},"Dapibus ac facilisis in"),r.a.createElement(o.b,{className:"list-group-item background-dark",to:"/serie"},"Cras justo odio"),r.a.createElement(o.b,{className:"list-group-item background-dark",to:"/serie"},"Dapibus ac facilisis in"))))},m=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("footer",{className:"pt-4 pb-2 text-white navbar-bg-dark"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("p",null,"Todos los derechos reservados"))))},u=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"row row-cols-1 row-cols-md-3"},r.a.createElement(o.b,{to:"/capitulos"},"nombre")))},p=Object(n.createContext)(),d=Object(n.createContext)(),E=function(){var e=Object(n.useContext)(p),a=e.animes,t=e.obtenerTodosAnime,l=e.obtenerAnimeNombre,c=Object(n.useContext)(d).obtenerTodosCapitulos;Object(n.useEffect)((function(){t()}),[]);return r.a.createElement(n.Fragment,null,0===a.length?r.a.createElement("p",null,r.a.createElement("br",null),"No hay animes"):null,a.map((function(e){return r.a.createElement(o.b,{key:e._id,to:"/serie/"+e.nombre,className:"btn btn-anime",onClick:function(){return l(a=e),void c(a);var a}},e.nombre," ")})))},b=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(i,null),r.a.createElement("div",{className:"container mt-3 mb-3"},r.a.createElement("div",{className:"row"},r.a.createElement(s,null),r.a.createElement("div",{className:"col-md-9"},r.a.createElement("h3",null,"Ultimos"),r.a.createElement("div",{id:"principal"},r.a.createElement(u,null)),r.a.createElement("hr",null),r.a.createElement("h3",null,"Animes Subidos"),r.a.createElement("div",{id:"principal"},r.a.createElement("div",{className:"row row-cols-1 row-cols-md-3"}),r.a.createElement(E,null))))),r.a.createElement(m,null))},v=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(i,null),r.a.createElement("div",{className:"container mt-3 mb-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{id:"principal"},r.a.createElement("div",{className:"row row-cols-1 row-cols-md-4"},r.a.createElement(o.b,{to:"/serie"},r.a.createElement("div",{className:"col mb-4"},r.a.createElement("div",{className:"card h-100 background-dark"},r.a.createElement("img",{src:"https://animeflv.net/uploads/animes/covers/3316.jpg",className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Card title"),r.a.createElement("p",{className:"card-text"},"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."))))),r.a.createElement(o.b,{to:"/serie"},r.a.createElement("div",{className:"col mb-4"},r.a.createElement("div",{className:"card h-100 background-dark"},r.a.createElement("img",{src:"https://animeflv.net/uploads/animes/covers/3316.jpg",className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Card title"),r.a.createElement("p",{className:"card-text"},"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."))))),r.a.createElement(o.b,{to:"/serie"},r.a.createElement("div",{className:"col mb-4"},r.a.createElement("div",{className:"card h-100 background-dark"},r.a.createElement("img",{src:"https://animeflv.net/uploads/animes/covers/3316.jpg",className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Card title"),r.a.createElement("p",{className:"card-text"},"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."))))),r.a.createElement(o.b,{to:"/serie"},r.a.createElement("div",{className:"col mb-4"},r.a.createElement("div",{className:"card h-100 background-dark"},r.a.createElement("img",{src:"https://animeflv.net/uploads/animes/covers/3316.jpg",className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Card title"),r.a.createElement("p",{className:"card-text"},"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."))))),r.a.createElement(o.b,{to:"/serie"},r.a.createElement("div",{className:"col mb-4"},r.a.createElement("div",{className:"card h-100 background-dark"},r.a.createElement("img",{src:"https://animeflv.net/uploads/animes/covers/3316.jpg",className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Card title"),r.a.createElement("p",{className:"card-text"},"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.")))))))))),r.a.createElement(m,null))},f=t(13),g=t(1),O=t(6),N=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"col-md-9 d-none d-sm-block "},r.a.createElement("div",{id:"carouselExampleSlidesOnly",className:"carousel slide","data-ride":"carousel"},r.a.createElement("div",{className:"carousel-inner"},r.a.createElement("div",{className:"carousel-item active"},r.a.createElement("img",{src:"https://i.pinimg.com/originals/02/ba/d3/02bad35cf2e44a2c544b319e32b6481a.jpg",className:"d-block w-100",alt:"..."})),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{src:"https://cdn.wallpapersafari.com/78/32/cxXVUf.jpg",className:"d-block w-100",alt:"..."})),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{src:"https://i.ytimg.com/vi/-I7pty3LU98/maxresdefault.jpg",className:"d-block w-100",alt:"..."}))))))},h=Object(n.createContext)(),y=Object(n.createContext)(),j=function(e){var a=Object(n.useContext)(h),t=a.alerta,l=a.mostrarAlerta,c=Object(n.useContext)(y),s=c.iniciarSesion,m=c.mensaje,u=c.autenticado;Object(n.useEffect)((function(){u&&e.history.push("/animes"),m&&l(m.msg,m.categoria)}),[m,u,e.history]);var p=Object(n.useState)({email:"",password:""}),d=Object(O.a)(p,2),E=d[0],b=d[1],v=E.email,j=E.password,A=function(e){b(Object(g.a)(Object(g.a)({},E),{},Object(f.a)({},e.target.name,e.target.value)))};return r.a.createElement(n.Fragment,null,r.a.createElement(i,null),r.a.createElement("div",{className:"container mt-3 mb-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(N,null),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"box"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==v.trim()&&""!==j.trim()?s({email:v,password:j}):l("Todos los campos son obligatorios","alert alert-warning")}},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"text",value:v,className:"form-control",placeholder:"Correo",name:"email",onChange:A}),r.a.createElement("br",null),r.a.createElement("label",null,"Contrase\xf1a"),r.a.createElement("input",{type:"password",value:j,className:"form-control",placeholder:"Contrase\xf1a",name:"password",onChange:A}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",className:"btn btn-success btn-block",value:"Iniciar sesion"})),r.a.createElement("br",null),t?r.a.createElement("div",{className:t.categoria},t.msg):null,r.a.createElement("hr",null),r.a.createElement(o.b,{className:"btn btn-primary btn-block",to:"/register"},"Registrarse"))))))))},A=function(){var e=Object(n.useContext)(p).proyecto,a=Object(n.useContext)(d),t=a.capitulosAnime,l=a.obtenerTodosCapitulos,c=a.capituloSelect;Object(n.useEffect)((function(){l(e)}),[]);return r.a.createElement(n.Fragment,null,r.a.createElement("h1",null),t.map((function(e){return r.a.createElement("li",{className:"list-cap-item",key:e._id},r.a.createElement(o.b,{to:"/capitulo/"+e.nombre,onClick:function(){return function(e){c(e)}(e)}},e.nombre))})))},C=function(){var e=Object(n.useContext)(p),a=e.proyecto,t=e.obtenerTodosAnime,l=e.animeSelecto;return Object(n.useEffect)((function(){t(),l()}),[]),a?r.a.createElement(n.Fragment,null,r.a.createElement(i,null),r.a.createElement("article",{className:"anime-single"},r.a.createElement("div",{className:"container mt-3 mb-3"},r.a.createElement("div",{className:"row"},r.a.createElement("aside",{className:"col-md-2"},r.a.createElement("div",{className:"thumb"},r.a.createElement("figure",null,r.a.createElement("img",{src:"https://tioanime.com/uploads/portadas/7.jpg",alt:"imagen"}))),r.a.createElement("div",{to:"/",className:"btn btn-dark btn-block"},"En emision")),r.a.createElement("aside",{className:"col-md-10"},r.a.createElement("header",null,r.a.createElement("p",{className:"title-anime"},a.nombre)),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))),r.a.createElement("figure",{className:"backdrop"},r.a.createElement("img",{src:"https://tioanime.com/uploads/fondos/3259.jpg",alt:"imagen"}))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"scrolling bg-color col-md-8"},r.a.createElement("ul",{className:"list-cap"},r.a.createElement(A,null))),r.a.createElement("div",{className:"fb"},r.a.createElement("div",{className:"fb-comments","data-href":"http://localhost:3000/serie","data-colorscheme":"dark","data-numposts":"10","data-width":"750"})),r.a.createElement("div",{className:"col-md-4"})),r.a.createElement(m,null)):null},R=function(){var e=Object(n.useContext)(p),a=e.formulario,t=e.errorFormulario,l=e.mostrarFormulario,c=e.agregarAnime,o=e.mostrarError,i=Object(n.useState)({nombre:"",creador:""}),s=Object(O.a)(i,2),m=s[0],u=s[1],d=m.nombre,E=m.creador,b=function(e){u(Object(g.a)(Object(g.a)({},m),{},Object(f.a)({},e.target.name,e.target.value)))};return r.a.createElement(n.Fragment,null,r.a.createElement("button",{type:"button",className:"btn btn-dark btn-block",onClick:function(){return l()}},"Nuevo Anime"),a?r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==d?(c(m),u({nombre:"",creador:""})):o()},autoComplete:"off"},r.a.createElement("input",{type:"text",className:"form-border-hidden",placeholder:"Nombre del Anime",name:"nombre",value:d,onChange:b}),r.a.createElement("input",{type:"text",className:"form-border-hidden",placeholder:"Creador del Anime",name:"creador",value:E,onChange:b}),r.a.createElement("input",{type:"submit",className:"btn btn-block btn-dark",value:"Agregar Anime"})):null,r.a.createElement("br",null),t?r.a.createElement("div",{className:"alert alert-dark",role:"alert"},"Todos los campos son Obligatorios"):null,r.a.createElement("br",null))},k=function(e){var a=e.anime,t=Object(n.useContext)(p).animeActual,l=Object(n.useContext)(d).obtenerCapitulos;return r.a.createElement("li",{className:"list-anime-item"},r.a.createElement("button",{type:"button",className:"btn-anime",onClick:function(){return e=a._id,t(e),void l(e);var e}},a.nombre))},T=t(71),x=t(70),S=function(){var e=Object(n.useContext)(p),a=e.animes,t=e.obtenerAnime;return Object(n.useEffect)((function(){t()}),[]),0===a.length?r.a.createElement("p",null,r.a.createElement("br",null),"No hay animes, comienza creando uno"):r.a.createElement("ul",{className:"list-anime scrolling"},r.a.createElement(T.a,null,a.map((function(e){return r.a.createElement(x.a,{key:e._id,timeout:200,classNames:"anime"},r.a.createElement(k,{anime:e}))}))))},_=function(){return r.a.createElement("aside",{className:"col-md-2"},r.a.createElement("div",{className:"sidebar-admin"},r.a.createElement("div",{align:"center"},r.a.createElement("h1",null,"MERN",r.a.createElement("span",null,"Series")),r.a.createElement("br",null),r.a.createElement(R,null),r.a.createElement("h5",null,"Tus Animes")),r.a.createElement(S,null)))},w=function(){var e=Object(n.useContext)(y),a=e.usuario,t=e.usuarioAutenticado,l=e.cerrarSesion;return Object(n.useEffect)((function(){t()}),[]),r.a.createElement("header",{className:"panel-admin"},a?r.a.createElement("h1",null,"Hola ",r.a.createElement("span",null,a.nombre)):null,r.a.createElement("nav",{className:"float-md-right"},r.a.createElement("button",{className:"btn-anime",onClick:function(){return l()}},"Cerrar Sesion")))},I=function(){var e=Object(n.useContext)(p).proyecto,a=Object(n.useContext)(d),t=a.capituloSeleccionado,l=a.errorCapitulo,c=a.agregarCapitulo,o=a.validarAnime,i=a.obtenerCapitulos,s=a.editarCapitulo;Object(n.useEffect)((function(){b(null!==t?t:{nombre:"",video:""})}),[t]);var m=Object(n.useState)({nombre:"",video:""}),u=Object(O.a)(m,2),E=u[0],b=u[1],v=function(e){b(Object(g.a)(Object(g.a)({},E),{},Object(f.a)({},e.target.name,e.target.value)))},N=E.nombre,h=E.video;if(!e)return null;var y=Object(O.a)(e,1)[0];return r.a.createElement("div",{className:"bg-form"},r.a.createElement("div",{className:"agregar-capitulo col-md-12 "},r.a.createElement("form",{className:"form-anime",onSubmit:function(e){e.preventDefault(),""!==N.trim()&&""!==h.trim()?(null===t?(E.anime=y._id,c(E)):s(E),i(y._id),b({nombre:"",video:""})):o()},autoComplete:"off"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nuevo Capitulo...",name:"nombre",onChange:v,value:N}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Url del video",name:"video",onChange:v,value:h}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",className:"btn btn-block btn-dark",value:t?"Editar capitulo":"A\xf1adir Capitulo"}))),l?r.a.createElement("div",{align:"center",className:"alert alert-dark"},r.a.createElement("p",null,"Todos los campos son obligatorios")):null))},L=function(e){var a=e.capitulo,t=Object(n.useContext)(p).proyecto,l=Object(n.useContext)(d),c=l.eliminarCapitulo,o=l.obtenerCapitulos,i=l.guardarCapituloActual,s=Object(O.a)(t,1)[0];return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"box-cap"},r.a.createElement("span",null,a.nombre),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e=a._id,c(e,s._id),void o(s._id);var e}},"Eliminar"),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return function(e){i(e)}(a)}},"Editar")))},F=function(){var e=Object(n.useContext)(p),a=e.proyecto,t=e.eliminarAnime,l=Object(n.useContext)(d).capitulosAnime;if(!a)return r.a.createElement("div",{align:"center"},r.a.createElement("br",null),r.a.createElement("h2",null,"Selecciona un Anime"));var c=Object(O.a)(a,1)[0];return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"listado-capitulo"},r.a.createElement("h2",null,"Anime: ",c.nombre),0===l.length?r.a.createElement("div",{align:"center"},r.a.createElement("p",null,r.a.createElement("br",null),"No hay capitulos")):l.map((function(e){return r.a.createElement(L,{key:e._id,capitulo:e})})))),r.a.createElement("div",{className:"eliminar-anime"},r.a.createElement("button",{className:"btn btn-dark",onClick:function(){return t(c._id)}},"Eliminar Anime")))},P=t(34),U=t.n(P).a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BACKEND_URL}),D=function(e){e?U.defaults.headers.common["x-auth-token"]=e:delete U.defaults.headers.common["x-auth-token"]},B=localStorage.getItem("token");B&&D(B);var Y=function(){var e=Object(n.useContext)(y).usuarioAutenticado;return Object(n.useEffect)((function(){e()}),[]),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement(_,null),r.a.createElement("div",{className:"col-md-10"},r.a.createElement(w,null),r.a.createElement("main",null,r.a.createElement(I,null),r.a.createElement(F,null))))))},G=t(5),M=function(e){var a=Object(n.useContext)(h),t=a.alerta,l=a.mostrarAlerta,c=Object(n.useContext)(y),s=c.agregarUsuario,m=c.mensaje,u=c.autenticado;Object(n.useEffect)((function(){u&&e.history.push("/animes"),m&&l(m.msg,m.categoria)}),[m,u,e.history]);var p=Object(n.useState)({nombre:"",email:"",password:"",confirmar:""}),d=Object(O.a)(p,2),E=d[0],b=d[1],v=E.nombre,j=E.email,A=E.password,C=E.confirmar,R=function(e){b(Object(g.a)(Object(g.a)({},E),{},Object(f.a)({},e.target.name,e.target.value)))};return r.a.createElement(n.Fragment,null,r.a.createElement(i,null),r.a.createElement("div",{className:"container mt-3 mb-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(N,null),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"box"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==v.trim()&&""!==j.trim()&&""!==A.trim()&&""!==C.trim()?A.length<6?l("Las contrase\xf1a debe ser de minimo 6 caracteres","alert alert-warning"):A===C?s({nombre:v,email:j,password:A}):l("Las contrase\xf1as no son igaules","alert alert-warning"):l("Todos los campos son obligatorios","alert alert-warning")}},r.a.createElement("label",null,"Nombre"),r.a.createElement("input",{type:"text",value:v,className:"form-control",placeholder:"Nombre",name:"nombre",onChange:R}),r.a.createElement("br",null),r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"text",value:j,className:"form-control",placeholder:"Correo",name:"email",onChange:R}),r.a.createElement("br",null),r.a.createElement("label",null,"Contrase\xf1a"),r.a.createElement("input",{type:"password",value:A,className:"form-control",placeholder:"Contrase\xf1a",name:"password",onChange:R}),r.a.createElement("br",null),r.a.createElement("label",null,"Repite la Contrase\xf1a"),r.a.createElement("input",{type:"password",value:C,className:"form-control",placeholder:"Repite la Contrase\xf1a",name:"confirmar",onChange:R}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block",value:"Registrarse"})),r.a.createElement("br",null),t?r.a.createElement("div",{className:t.categoria},t.msg):null,r.a.createElement("hr",null),r.a.createElement(o.b,{to:"/login",className:"btn btn-success btn-block"},"Iniciar sesion"))))))))},J=function(e,a){switch(a.type){case"MOSTRAR_ALERTA":return{alerta:a.payload};case"OCULTAR_ALERTA":return{alerta:null};default:return e}},q=function(e){var a=Object(n.useReducer)(J,{alerta:null}),t=Object(O.a)(a,2),l=t[0],c=t[1];return r.a.createElement(h.Provider,{value:{alerta:l.alerta,mostrarAlerta:function(e,a){c({type:"MOSTRAR_ALERTA",payload:{msg:e,categoria:a}}),setTimeout((function(){c({type:"OCULTAR_ALERTA"})}),5e3)}}},e.children)},V=t(3),X=t.n(V),K=t(8),W=function(e,a){switch(a.type){case"REGISTRO_EXITOSO":return localStorage.setItem("token",a.payload.token),Object(g.a)(Object(g.a)({},e),{},{autenticado:!0,mensaje:null});case"REGISTRO_ERROR":return localStorage.removeItem("token"),Object(g.a)(Object(g.a)({},e),{},{token:null,mensaje:a.payload,cargando:!1});case"OBTENER_USUARIO":return Object(g.a)(Object(g.a)({},e),{},{autenticado:!0,usuario:a.payload,cargando:!1});case"LOGIN_EXITOSO":return localStorage.setItem("token",a.payload.token),Object(g.a)(Object(g.a)({},e),{},{autenticado:!0,mensaje:null,cargando:!1});case"LOGIN_ERROR":return Object(g.a)(Object(g.a)({},e),{},{token:null,mensaje:a.payload});case"CERRAR_SESION":return localStorage.removeItem("token"),Object(g.a)(Object(g.a)({},e),{},{token:null,usuario:null,autenticado:null});default:return e}},H=function(e){var a={token:localStorage.getItem("token"),autenticado:null,usuario:null,mensaje:null},t=Object(n.useReducer)(W,a),l=Object(O.a)(t,2),c=l[0],o=l[1],i=function(){var e=Object(K.a)(X.a.mark((function e(a){var t,n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.post("/api/users",a);case 3:t=e.sent,o({type:"REGISTRO_EXITOSO",payload:t.data}),s(),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response),n={msg:e.t0.response.data.msg,categoria:"alert alert-warning"},o({type:"REGISTRO_ERROR",payload:n});case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}(),s=function(){var e=Object(K.a)(X.a.mark((function e(){var a,t,n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=localStorage.getItem("token"))&&D(a),e.prev=2,e.next=5,U.get("/api/auth");case 5:t=e.sent,o({type:"OBTENER_USUARIO",payload:t.data.usuario}),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0),n={msg:e.t0.response.data.msg,categoria:"alert alert-warning"},o({type:"LOGIN_ERROR",payload:n});case 14:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(K.a)(X.a.mark((function e(a){var t,n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.post("/api/auth",a);case 3:t=e.sent,o({type:"LOGIN_EXITOSO",payload:t.data}),s(),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response),n={msg:e.t0.response.data.msg,categoria:"alert alert-warning"},o({type:"LOGIN_ERROR",payload:n});case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(y.Provider,{value:{token:c.token,autenticado:c.autenticado,usuario:c.usuario,mensaje:c.mensaje,agregarUsuario:i,iniciarSesion:m,usuarioAutenticado:s,cerrarSesion:function(){o({type:"CERRAR_SESION"})}}},e.children)},z=t(19),Q=function(e,a){switch(a.type){case"FORMULARIO_PROYECTO":return Object(g.a)(Object(g.a)({},e),{},{formulario:!0});case"AGREGAR_PROYECTO":return Object(g.a)(Object(g.a)({},e),{},{animes:[].concat(Object(z.a)(e.animes),[a.payload]),formulario:!1,errorFormulario:!1});case"VALIDAR_FORMULARIO":return Object(g.a)(Object(g.a)({},e),{},{errorFormulario:!0});case"OBTENER_PROYECTO_NOMBRE":return localStorage.setItem("anime",JSON.stringify(a.payload)),Object(g.a)(Object(g.a)({},e),{},{proyecto:e.animes.filter((function(e){return e.nombre===a.payload}))});case"OBTENER_PROYECTO_SELECTO":return Object(g.a)(Object(g.a)({},e),{},{proyecto:a.payload});case"PROYECTO_ACTUAL":return Object(g.a)(Object(g.a)({},e),{},{proyecto:e.animes.filter((function(e){return e._id===a.payload}))});case"OBTENER_PROYECTO_TODOS":case"OBTENER_PROYECTO":return Object(g.a)(Object(g.a)({},e),{},{formulario:!1,animes:a.payload});case"ELIMINAR_PROYECTO":return console.log(a.payload),Object(g.a)(Object(g.a)({},e),{},{animes:e.animes.filter((function(e){return e._id!==a.payload})),proyecto:null});default:return e}},Z=function(e){var a=Object(n.useReducer)(Q,{animes:[],formulario:!1,errorFormulario:!1,proyecto:null}),t=Object(O.a)(a,2),l=t[0],c=t[1],o=function(){var e=Object(K.a)(X.a.mark((function e(){var a;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.get("/api/proyectos");case 3:a=e.sent,c({type:"OBTENER_PROYECTO",payload:a.data.proyectos}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(K.a)(X.a.mark((function e(){var a;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.get("/api/proyectosTodos");case 3:a=e.sent,c({type:"OBTENER_PROYECTO_TODOS",payload:a.data.proyectos}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(K.a)(X.a.mark((function e(a){var t;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.post("/api/proyectos",a);case 3:t=e.sent,c({type:"AGREGAR_PROYECTO",payload:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),m=function(){var e=localStorage.getItem("anime");try{c({type:"OBTENER_PROYECTO_SELECTO",payload:JSON.parse(e)})}catch(a){}},u=function(){var e=Object(K.a)(X.a.mark((function e(a){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.delete("/api/proyectos/"+a);case 3:c({type:"ELIMINAR_PROYECTO",payload:a}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(p.Provider,{value:{animes:l.animes,formulario:l.formulario,errorFormulario:l.errorFormulario,proyecto:l.proyecto,mostrarFormulario:function(){c({type:"FORMULARIO_PROYECTO"})},agregarAnime:s,obtenerAnime:o,mostrarError:function(){c({type:"VALIDAR_FORMULARIO"})},animeActual:function(e){c({type:"PROYECTO_ACTUAL",payload:e})},eliminarAnime:u,obtenerTodosAnime:i,obtenerAnimeNombre:function(e){try{c({type:"OBTENER_PROYECTO_NOMBRE",payload:e}),m()}catch(a){console.log(a)}},animeSelecto:m}},e.children)},$=function(e,a){switch(a.type){case"TAREAS_PROYECTO":return localStorage.setItem("capitulo",JSON.stringify(a.payload)),Object(g.a)(Object(g.a)({},e),{},{capitulosAnime:a.payload});case"OBTENER_TAREAS":return Object(g.a)(Object(g.a)({},e),{},{capitulosAnime:a.payload});case"OBTENER_CAPITULO":return localStorage.setItem("capituloActual",JSON.stringify(a.payload)),Object(g.a)(Object(g.a)({},e),{},{capituloActual:a.payload});case"OBTENER_CAPITULO_ACTUAL":return Object(g.a)(Object(g.a)({},e),{},{capituloActual:a.payload});case"AGREGAR_TAREAS":return Object(g.a)(Object(g.a)({},e),{},{capitulosAnime:[].concat(Object(z.a)(e.capitulosAnime),[a.payload.capitulo]),errorCapitulo:!1});case"VALIDAR_TAREAS":return Object(g.a)(Object(g.a)({},e),{},{errorCapitulo:!0});case"ELIMINAR_TAREAS":return Object(g.a)(Object(g.a)({},e),{},{capitulosAnime:e.capitulosAnime.filter((function(e){return e._id!==a.payload}))});case"TAREA_ACTUAL":return Object(g.a)(Object(g.a)({},e),{},{capituloSeleccionado:a.payload});case"EDITAR_TAREA":return Object(g.a)(Object(g.a)({},e),{},{capitulosAnime:e.capitulosAnime.map((function(e){return e._id===a.payload._id?a.payload:e})),capituloSeleccionado:null});default:return e}},ee=function(e){var a=Object(n.useReducer)($,{capitulosAnime:[],capituloActual:null,errorCapitulo:!1,capituloSeleccionado:null}),t=Object(O.a)(a,2),l=t[0],c=t[1],o=function(){var e=Object(K.a)(X.a.mark((function e(a){var t;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.get("/api/capitulos",{params:{anime:a}});case 3:t=e.sent,c({type:"TAREAS_PROYECTO",payload:t.data.capitulos}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),i=function(){var e=Object(K.a)(X.a.mark((function e(a){var t,n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=a._id,e.next=4,U.get("/api/capitulo",{params:{anime:t}});case 4:n=e.sent,c({type:"TAREAS_PROYECTO",payload:n.data.capitulos}),s(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a){return e.apply(this,arguments)}}(),s=function(){var e=localStorage.getItem("capitulo");try{c({type:"OBTENER_TAREAS",payload:JSON.parse(e)})}catch(a){}},m=function(){var e=localStorage.getItem("capituloActual");try{c({type:"OBTENER_CAPITULO_ACTUAL",payload:JSON.parse(e)})}catch(a){}},u=function(){var e=Object(K.a)(X.a.mark((function e(a){var t;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.post("/api/capitulos",a);case 3:t=e.sent,c({type:"AGREGAR_TAREAS",payload:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),p=function(){var e=Object(K.a)(X.a.mark((function e(a,t){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.delete("api/capitulos/"+a,{params:{anime:t}});case 3:c({type:"ELIMINAR_TAREAS",payload:a}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(a,t){return e.apply(this,arguments)}}(),E=function(){var e=Object(K.a)(X.a.mark((function e(a){var t;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.put("/api/capitulos/"+a._id,a);case 3:t=e.sent,c({type:"EDITAR_TAREA",payload:t.data.capitulo}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(d.Provider,{value:{capitulosAnime:l.capitulosAnime,capituloActual:l.capituloActual,errorCapitulo:l.errorCapitulo,capituloSeleccionado:l.capituloSeleccionado,obtenerCapitulos:o,agregarCapitulo:u,validarAnime:function(){c({type:"VALIDAR_TAREAS"})},eliminarCapitulo:p,guardarCapituloActual:function(e){c({type:"TAREA_ACTUAL",payload:e})},editarCapitulo:E,obtenerTodosCapitulos:i,animeCapitulosSelecto:s,capituloSelect:function(e){try{c({type:"OBTENER_CAPITULO",payload:e}),m()}catch(a){}},obtenerCapituloSeccionado:m}},e.children)},ae=t(35),te=function(e){var a=e.component,t=Object(ae.a)(e,["component"]),l=Object(n.useContext)(y),c=l.autenticado,o=l.cargando,i=l.usuarioAutenticado;return Object(n.useEffect)((function(){i()}),[]),r.a.createElement(G.b,Object.assign({},t,{render:function(e){return c||o?r.a.createElement(a,e):r.a.createElement(G.a,{to:"/login"})}}))},ne=function(){var e=Object(n.useContext)(d),a=e.capituloActual,t=e.obtenerCapituloSeccionado,l=e.animeCapitulosSelecto;return Object(n.useEffect)((function(){l(),t()}),[]),a?r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement("p",null,a.nombre)),r.a.createElement("div",{className:"list-option"},r.a.createElement("ul",{className:"nav nav-pills nav-justified"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link"},"Opcion 1"))))):null},re=function(){var e=Object(n.useContext)(d),a=e.capituloActual,t=e.obtenerCapituloSeccionado,l=e.animeCapitulosSelecto;return Object(n.useEffect)((function(){l(),t()}),[]),a?r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"canal"},r.a.createElement("iframe",{src:a.video,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))):null},le=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(i,null),r.a.createElement("div",{className:"container mt-3 mb-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement(ne,null),r.a.createElement(re,null)),r.a.createElement("div",{className:"col-md-4 "},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"comentarios"},r.a.createElement("div",{className:"box-comentarios"},r.a.createElement("div",{className:"fb-comments","data-href":"http://localhost:3000/capitulo","data-colorscheme":"dark","data-numposts":"10","data-width":"750"})))))),r.a.createElement(m,null))};var ce=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(q,null,r.a.createElement(H,null,r.a.createElement(Z,null,r.a.createElement(ee,null,r.a.createElement(o.a,null,r.a.createElement(G.d,null,r.a.createElement(G.b,{exact:!0,path:"/directorio",component:v}),r.a.createElement(G.b,{exact:!0,path:"/login",component:j}),r.a.createElement(G.b,{exact:!0,path:"/register",component:M}),r.a.createElement(G.b,{exact:!0,path:"/serie/:animeid",component:C}),r.a.createElement(G.b,{exact:!0,path:"/capitulo/:capituloid",component:le}),r.a.createElement(te,{exact:!0,path:"/animes",component:Y}),r.a.createElement(G.b,{exact:!0,path:"/",component:b}))))))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.66769fe6.chunk.js.map