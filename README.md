# DEPRECATED. Use LPR API in SecurOS 11

# **ISS LPR WEB SERVICE V3.3**

# Aglahir Jiménez Flórez
# a.florez@isscctv.com



## Installation


1. Copy files "ISS_LPR_WEB_SERVICE.dll" and "ISS_LPR_WEB_SERVICE.pdb" into SecurOS root folder


2. Open Windows CMD with admin privileges and execute:  :
    
>  C:\Windows\Microsoft.NET\Framework\v4.0.30319\regasm /codebase "C:\Program Files (x86)\ISS\SecurOS\ISS_LPR_WEB_SERVICE.dll"
    
***Continue if correct registering***


3. Using SecurOS create object "HTTP Event Gate" and stablish available port on the network

***If this object ID is different than "1", then write it down for further step***


4. Using SecurOS create new JScript object


5. Open file "JScript SecurOS.js" and copy text content into the JScript object created in SecurOS

***If "HTTP Event Gate" object ID was different than "1", then replace the variable "httpID" into the script with the correct ID***

```
var httpID = 1;

```
 
6. Finally setup correctly PostgreSQL connection Strings into the JScript 
 
```
var Connect_extDB = "DATABASE=ext;DRIVER={PostgreSQL Unicode};PORT=5432;PWD=postgres;SERVER=127.0.0.1;UID=postgres;";
var Connect_securosDB = "DATABASE=securos;DRIVER={PostgreSQL Unicode};PORT=5432;PWD=postgres;SERVER=127.0.0.1;UID=postgres;";
var Connect_AutoDB = "DATABASE=auto;DRIVER={PostgreSQL Unicode};PORT=5432;PWD=postgres;SERVER=127.0.0.1;UID=postgres;";
var Connect_CoordenadasDB = "DATABASE=coordenadas;DRIVER={PostgreSQL Unicode};PORT=5432;PWD=postgres;SERVER=127.0.0.1;UID=postgres;";
```
