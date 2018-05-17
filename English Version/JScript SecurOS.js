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
var Connect_CoordinatesDB = "DATABASE=coordinates;DRIVER={PostgreSQL Unicode};PORT=5432;PWD=postgres;SERVER=127.0.0.1;UID=postgres;";
	
var object = new ActiveXObject("issmex.LPRWebServices");

function Init()
{
    Core.RegisterEventHandler("HTTP_EVENT_PROXY",httpID,"PENDING_REQUEST","RESPONSE_TO_HTTP");
}
function RESPONSE_TO_HTTP(e)
{
	var messageId = e._id, path = e._path, recognizers = null, plate = null, incidentFolio = null, initialDate = null, endDate = null, idRecognizer = null, justDate = null, database = null, comment = null, idR = null, response = "";

    
	if(e.recognizers != null)	recognizers = e.recognizers;
	
	if(e.plate != null)	plate = e.plate;
	
	if(e.incidentFolio != null) incidentFolio = e.incidentFolio;

	if(e.initialDate != null) initialDate = e.initialDate;
	
	if(e.endDate != null) endDate = e.endDate;

	if(e.idRecognizer != null) idRecognizer = e.idRecognizer;
    
    if(e.justDate != null) justDate = e.justDate;
    
    if(e.database != null) database = e.database;
    
    if(e.comment != null) comment = e.comment;
    
    if(e.id != null) idR = e.id;

	response = object.RESPONSE_TO_HTTP(Connect_extDB, Connect_securosDB, Connect_AutoDB, Connect_CoordinatesDB, messageId, plate, path, recognizers, incidentFolio, initialDate, endDate, idRecognizer, justDate, database, comment, idR);
	Core.DoReact("HTTP_EVENT_PROXY",httpID,"RESPONSE","_id",messageId,"_body",response,"_content_type","application/json");
}