"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[5893],{27140:function(e){e.exports=function(e){if(e&&e.length)for(const s of e){let e;switch(s.keyword){case"additionalItems":case"items":e="";var a=s.params.limit;e+="no debe tener más de "+a+" elemento",1!=a&&(e+="s");break;case"additionalProperties":e="no debe tener propiedades adicionales";break;case"anyOf":e='debe coincidir con algún esquema en "anyOf"';break;case"const":e="debe ser igual a la constante";break;case"contains":e="debe contener un elemento válido";break;case"dependencies":case"dependentRequired":e="";a=s.params.depsCount;e+="debe contener la",1!=a&&(e+="s"),e+=" propiedad",1!=a&&(e+="es"),e+=" "+s.params.deps+" cuando la propiedad "+s.params.property+" se encuentra presente";break;case"discriminator":switch(s.params.error){case"tag":e='tag "'+s.params.tag+'" must be string';break;case"mapping":e='value of tag "'+s.params.tag+'" must be in oneOf';break;default:e='debe pasar la validación de palabra clave "'+s.keyword+'"'}break;case"enum":e="deber ser igual a uno de los valores predefinidos";break;case"false schema":e="el esquema és falso";break;case"format":e='debe coincidir con el formato "'+s.params.format+'"';break;case"formatMaximum":case"formatExclusiveMaximum":e="";var r=s.params.comparison+" "+s.params.limit;e+="debe ser "+r;break;case"formatMinimum":case"formatExclusiveMinimum":e="";r=s.params.comparison+" "+s.params.limit;e+="debe ser "+r;break;case"if":e='debe corresponderse con el esquema "'+s.params.failingKeyword+'"';break;case"maximum":case"exclusiveMaximum":e="";r=s.params.comparison+" "+s.params.limit;e+="debe ser "+r;break;case"maxItems":e="";a=s.params.limit;e+="no debe contener más de "+a+" elemento",1!=a&&(e+="s");break;case"maxLength":e="";a=s.params.limit;e+="no debe contener más de "+a+" caracter",1!=a&&(e+="es");break;case"maxProperties":e="";a=s.params.limit;e+="no debe contener más de "+a+" propiedad",1!=a&&(e+="es");break;case"minimum":case"exclusiveMinimum":e="";r=s.params.comparison+" "+s.params.limit;e+="debe ser "+r;break;case"minItems":e="";a=s.params.limit;e+="no debe contener menos de "+a+" elemento",1!=a&&(e+="s");break;case"minLength":e="";a=s.params.limit;e+="no debe contener menos de "+a+" caracter",1!=a&&(e+="es");break;case"minProperties":e="";a=s.params.limit;e+="no debe contener menos de "+a+" propiedad",1!=a&&(e+="es");break;case"multipleOf":e="debe ser múltiplo de "+s.params.multipleOf;break;case"not":e='no debe ser válido según el esquema en "not"';break;case"oneOf":e='debe coincidir con un solo esquema en "oneOf"';break;case"pattern":e='debe coincidir con el patron "'+s.params.pattern+'"';break;case"patternRequired":e='la propiedad debe coincidir con el patrón "'+s.params.missingPattern+'"';break;case"propertyNames":e="la propiedad no és válida";break;case"required":e="debe tener la propiedad requerida "+s.params.missingProperty;break;case"type":e="debe ser "+s.params.type;break;case"unevaluatedItems":e="";a=s.params.len;e+="must NOT have more than "+a+" item",1!=a&&(e+="s");break;case"unevaluatedProperties":e="must NOT have unevaluated properties";break;case"uniqueItems":e="no debe contener elementos duplicados, (los elementos ## "+s.params.j+" y "+s.params.i+" son idénticos)";break;default:e='debe pasar la validación de palabra clave "'+s.keyword+'"'}s.message=e}}},35893:function(e,a,r){r.r(a),a["default"]=r(27140)}}]);
//# sourceMappingURL=5893.5838fcbf.js.map