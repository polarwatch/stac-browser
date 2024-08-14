"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[536],{64703:function(e){e.exports=function(e){if(e&&e.length)for(const o of e){let e;switch(o.keyword){case"additionalItems":case"items":e="não são permitidos itens adicionais (mais do que "+a+")";break;case"additionalProperties":e="não são permitidas propriedades adicionais";break;case"anyOf":e='os dados não correspondem a nenhum schema de "anyOf"';break;case"const":e="deve ser igual à constante";break;case"contains":e="deve conter um item válido";break;case"dependencies":case"dependentRequired":e="";var a=o.params.depsCount;e+=" deve ter propriedade",1!=a&&(e+="s"),e+=" "+o.params.deps+" quando a propriedade "+o.params.property+" estiver presente";break;case"discriminator":switch(o.params.error){case"tag":e='a tag "'+o.params.tag+'" deve ser uma string';break;case"mapping":e='o valor da tag "'+o.params.tag+'" deve estar no oneOf';break;default:e='deve passar a validação da keyword "'+o.keyword+'"'}break;case"enum":e="deve ser igual a um dos valores permitidos";break;case"false schema":e='o schema booleano é "false"';break;case"format":e='deve corresponder ao formato "'+o.params.format+'"';break;case"formatMaximum":case"formatExclusiveMaximum":e="";var r=o.params.comparison+" "+o.params.limit;e+="deve ser "+r;break;case"formatMinimum":case"formatExclusiveMinimum":e="";r=o.params.comparison+" "+o.params.limit;e+="deve ser "+r;break;case"if":e='deve corresponder ao schema "'+o.params.failingKeyword+'"';break;case"maximum":case"exclusiveMaximum":e="";r=o.params.comparison+" "+o.params.limit;e+="deve ser "+r;break;case"maxItems":e="";a=o.params.limit;e+="não deve ter mais que "+a+" elemento",1!=a&&(e+="s");break;case"maxLength":e="";a=o.params.limit;e+="não deve ser maior que "+a+" caracter",1!=a&&(e+="es");break;case"maxProperties":e="";a=o.params.limit;e+="não deve ter mais que "+a+" propriedade",1!=a&&(e+="s");break;case"minimum":case"exclusiveMinimum":e="";r=o.params.comparison+" "+o.params.limit;e+="deve ser "+r;break;case"minItems":e="";a=o.params.limit;e+="não deve ter menos que "+a+" elemento",1!=a&&(e+="s");break;case"minLength":e="";a=o.params.limit;e+="não deve ser mais curta que "+a+" caracter",1!=a&&(e+="es");break;case"minProperties":e="";a=o.params.limit;e+="não deve ter menos que "+a+" propriedade",1!=a&&(e+="s");break;case"multipleOf":e="deve ser múltiplo de "+o.params.multipleOf;break;case"not":e='não deve ser valido segundo o schema em "not"';break;case"oneOf":e='deve corresponder exatamente com um schema em "oneOf"';break;case"pattern":e='deve corresponder ao padrão "'+o.params.pattern+'"';break;case"patternRequired":e='deve ter a propriedade correspondente ao padrão "'+o.params.missingPattern+'"';break;case"propertyNames":e="o nome da propriedade é inválido";break;case"required":e="deve ter a propriedade obrigatória "+o.params.missingProperty;break;case"type":e="";var s=o.params.type;e+="deve ser ",e+="number"==s?"um número":"integer"==s?"um número inteiro":"string"==s?"um texto":"boolean"==s?"um booleano":s;break;case"unevaluatedItems":e="";a=o.params.len;e+="não pode possuir mais que "+a+" ",e+=1==a?"item":"itens";break;case"unevaluatedProperties":e="não pode possuir propridades não avaliadas";break;case"uniqueItems":e="não deve ter itens duplicados (os itens ## "+o.params.j+" e "+o.params.i+" são idênticos)";break;default:e='deve passar a validação da keyword "'+o.keyword+'"'}o.message=e}}},70536:function(e,a,r){r.r(a),a["default"]=r(64703)}}]);
//# sourceMappingURL=536.38a3d794.js.map