/*
 *Objeto ActiveX del servicio web
 *
 *Este script recibe el evento http de SecurOS y manda los parámetros del método definido en
 *la integración de servicios web que se encuentra en el Objeto ActiveX desarrollado por ISS
 *
*/

// Configuration settings
var httpID = 1;
var Connect_extDB = "DATABASE=ext;DRIVER={PostgreSQL Unicode};PORT=5432;PWD=postgres;SERVER=127.0.0.1;UID=postgres;";
var Connect_securosDB = "DATABASE=securos;DRIVER={PostgreSQL Unicode};PORT=5432;PWD=postgres;SERVER=127.0.0.1;UID=postgres;";
var Connect_AutoDB = "DATABASE=auto;DRIVER={PostgreSQL Unicode};PORT=5432;PWD=postgres;SERVER=127.0.0.1;UID=postgres;";
var Connect_CoordenadasDB = "DATABASE=coordenadas;DRIVER={PostgreSQL Unicode};PORT=5432;PWD=postgres;SERVER=127.0.0.1;UID=postgres;";
	
var object = new ActiveXObject("issmex.LPRWebServices");

function Init()
{
    Core.RegisterEventHandler("HTTP_EVENT_PROXY",httpID,"PENDING_REQUEST","RESPONSE_TO_HTTP");
}
function RESPONSE_TO_HTTP(e)
{
	var messageId = e._id, path = e._path, reconocedores = null, plate = null, folioIncidente = null, fecha_Inicio = null, fecha_Fin = null, id_Arco = null, justDate = null, database = null, comentario = null, idR = null, respuesta = "";

    
	if(e.reconocedores != null)	reconocedores = e.reconocedores;
	
	if(e.placa != null)	plate = e.placa;
	
	if(e.folioIncidente != null) folioIncidente = e.folioIncidente;

	if(e.fechaInicio != null) fecha_Inicio = e.fechaInicio;
	
	if(e.fechaFin != null) fecha_Fin = e.fechaFin;

	if(e.idArco != null) id_Arco = e.idArco;
    
    if(e.justDate != null) justDate = e.justDate;
    
    if(e.database != null) database = e.database;
    
    if(e.comentario != null) comentario = e.comentario;
    
    if(e.id != null) idR = e.id;

	respuesta = object.RESPONSE_TO_HTTP(Connect_extDB, Connect_securosDB, Connect_AutoDB, Connect_CoordenadasDB, messageId, plate, path, reconocedores, folioIncidente, fecha_Inicio, fecha_Fin, id_Arco, justDate, database, comentario, idR);
	Core.DoReact("HTTP_EVENT_PROXY",httpID,"RESPONSE","_id",messageId,"_body",respuesta,"_content_type","application/json");
}