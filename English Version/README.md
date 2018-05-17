# **ISS LPR WEB SERVICE V3.5**

# Aglahir Jiménez Flórez
# a.florez@isscctv.com



## Installation


1. Copy files "ISS_LPR_WEB_SERVICE.dll", "ISS_LPR_WEB_SERVICE.pdb", "Newtonsoft.Json.dll", "configuration.json" into C:\Program Files (x86)\ISS\SecurOS\. Then copy file "paths.txt" (or add text if already exists) into C:\Program Files (x86)\ISS\SecurOS\Modules\http_event_proxy\



2. Change information of recognizers and camera relation into "configuration.json" following the sample Json sintaxis



3. Open Windows CMD with admin privileges and execute:
    
>  C:\Windows\Microsoft.NET\Framework\v4.0.30319\regasm /codebase "C:\Program Files (x86)\ISS\SecurOS\ISS_LPR_WEB_SERVICE.dll"
    
***Continue if correct registering***




4. Using SecurOS create object "HTTP Event Gate" and stablish available port on the network

***If this object ID is different than "1", then write it down for further step***




5. Using SecurOS create new JScript object



6. Open file "JScript SecurOS.js" and copy text content into the JScript object created in SecurOS

***If "HTTP Event Gate" object ID was different than "1", then replace the variable "httpID" into the script with the correct ID***

```
var httpID = 1;

```



7. NOTE: The recognizers service is now using a coordinates database “coordinates” which has the following structure:


>Database name: “coordinates”
>Table name: “coordinates”

```
Table creation query:
CREATE TABLE coordinates
(
  id integer,
  latitude text,
  longitude text
)
WITH (
  OIDS=FALSE
);
ALTER TABLE coordinates
  OWNER TO postgres;
```

***Insert data of coordinates for each recognizer, this is a must**



 
8. Finally setup correctly PostgreSQL connection Strings into the JScript 
 
```
var Connect_extDB = "DATABASE=ext;DRIVER={PostgreSQL Unicode};PORT=5432;PWD=postgres;SERVER=127.0.0.1;UID=postgres;";
var Connect_securosDB = "DATABASE=securos;DRIVER={PostgreSQL Unicode};PORT=5432;PWD=postgres;SERVER=127.0.0.1;UID=postgres;";
var Connect_AutoDB = "DATABASE=auto;DRIVER={PostgreSQL Unicode};PORT=5432;PWD=postgres;SERVER=127.0.0.1;UID=postgres;";
var Connect_CoordinatesDB = "DATABASE=coordinates;DRIVER={PostgreSQL Unicode};PORT=5432;PWD=postgres;SERVER=127.0.0.1;UID=postgres;";
```