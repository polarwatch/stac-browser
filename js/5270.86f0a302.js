"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[5270],{84703:function(e){e.exports=function(e){if(e&&e.length)for(const r of e){let e;switch(r.keyword){case"additionalItems":case"items":e="";var a=r.params.limit;e+="darf nicht mehr als "+a+" Element",1!=a&&(e+="e"),e+=" enthalten";break;case"additionalProperties":e="darf keine zusätzlichen Attribute haben";break;case"anyOf":e='muss einem der Schemata in "anyOf" entsprechen';break;case"const":e="muss gleich der Konstanten sein";break;case"contains":e="muss ein valides Element enthalten";break;case"dependencies":case"dependentRequired":e="";a=r.params.depsCount;e+="muss Attribut",1!=a&&(e+="e"),e+=" "+r.params.deps+" aufweisen, wenn Attribut "+r.params.property+" gesetzt ist";break;case"discriminator":switch(r.params.error){case"tag":e='der Tag "'+r.params.tag+'" muss eine Zeichenkette sein';break;case"mapping":e='der Wert vom Tag "'+r.params.tag+'" muss im oneOf enthalten sein';break;default:e='muss die Validierung "'+r.keyword+'" bestehen'}break;case"enum":e="muss einem der vorgegebenen Werte entsprechen";break;case"false schema":e="boolesches Schema ist falsch";break;case"format":e='muss diesem Format entsprechen: "'+r.params.format+'"';break;case"formatMaximum":case"formatExclusiveMaximum":e="";var s=r.params.comparison+" "+r.params.limit;e+="muss "+s+" sein";break;case"formatMinimum":case"formatExclusiveMinimum":e="";s=r.params.comparison+" "+r.params.limit;e+="muss "+s+" sein";break;case"if":e='muss dem Schema "'+r.params.failingKeyword+'" entsprechen';break;case"maximum":case"exclusiveMaximum":e="";s=r.params.comparison+" "+r.params.limit;e+="muss "+s+" sein";break;case"maxItems":e="";a=r.params.limit;e+="darf nicht mehr als "+a+" Element",1!=a&&(e+="e"),e+=" haben";break;case"maxLength":e="";a=r.params.limit;e+="darf nicht länger als "+a+" Zeichen sein";break;case"maxProperties":e="";a=r.params.limit;e+="darf nicht mehr als "+a+" Attribut",1!=a&&(e+="e"),e+=" haben";break;case"minimum":case"exclusiveMinimum":e="";s=r.params.comparison+" "+r.params.limit;e+="muss "+s+" sein";break;case"minItems":e="";a=r.params.limit;e+="darf nicht weniger als "+a+" Element",1!=a&&(e+="e"),e+=" haben";break;case"minLength":e="";a=r.params.limit;e+="darf nicht kürzer als "+a+" Zeichen sein";break;case"minProperties":e="";a=r.params.limit;e+="darf nicht weniger als "+a+" Attribut",1!=a&&(e+="e"),e+=" haben";break;case"multipleOf":e="muss ein Vielfaches von "+r.params.multipleOf+" sein";break;case"not":e='muss dem in "not" angegebenen Schema widersprechen';break;case"oneOf":e='muss genau einem der Schemata in "oneOf" entsprechen';break;case"pattern":e='muss diesem Muster entsprechen: "'+r.params.pattern+'"';break;case"patternRequired":e='muss ein Attribut nach folgendem Muster haben "'+r.params.missingPattern+'"';break;case"propertyNames":e="Attributname ist ungültig";break;case"required":e="muss das erforderliche Attribut "+r.params.missingProperty+" enthalten";break;case"type":e="muss sein: "+r.params.type;break;case"unevaluatedItems":e="";a=r.params.len;e+="darf nicht mehr als "+a+" Element",1!=a&&(e+="e"),e+=" haben";break;case"unevaluatedProperties":e="darf keine unausgewerteten Attribute haben";break;case"uniqueItems":e="darf keine Duplikate enthalten (Elemente #"+r.params.j+" und #"+r.params.i+" sind gleich)";break;default:e='muss die Validierung "'+r.keyword+'" bestehen'}r.message=e}}},75270:function(e,a,s){s.r(a),a["default"]=s(84703)}}]);
//# sourceMappingURL=5270.86f0a302.js.map