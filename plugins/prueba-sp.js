function _0x443c(_0x16f592,_0x1af919){const _0x153fd7=_0x153f();return _0x443c=function(_0x443c77,_0x147350){_0x443c77=_0x443c77-0x13d;let _0x1d7d10=_0x153fd7[_0x443c77];return _0x1d7d10;},_0x443c(_0x16f592,_0x1af919);}const _0xc53ac5=_0x443c;(function(_0x327714,_0x12f2df){const _0x2647f9=_0x443c,_0x50e786=_0x327714();while(!![]){try{const _0x1a9d40=parseInt(_0x2647f9(0x140))/0x1*(parseInt(_0x2647f9(0x15e))/0x2)+-parseInt(_0x2647f9(0x15b))/0x3+parseInt(_0x2647f9(0x15a))/0x4*(-parseInt(_0x2647f9(0x160))/0x5)+parseInt(_0x2647f9(0x151))/0x6+-parseInt(_0x2647f9(0x14a))/0x7+parseInt(_0x2647f9(0x149))/0x8+-parseInt(_0x2647f9(0x15d))/0x9*(-parseInt(_0x2647f9(0x14b))/0xa);if(_0x1a9d40===_0x12f2df)break;else _0x50e786['push'](_0x50e786['shift']());}catch(_0x356991){_0x50e786['push'](_0x50e786['shift']());}}}(_0x153f,0xc1d6f));function _0x153f(){const _0x56cd04=['keys','join','\x22\x20se\x20encuentra\x20en\x20la\x20dirección\x20\x22','1GteTPB','length','intentos','log','\x20\x20\x20','vertical','charAt','floor','Agotaste\x20tus\x20intentos.\x20La\x20palabra\x20correcta\x20era:','2902688NUBUMZ','2097165nyJQMb','249430akefOH','replace','╮*\x0a','command','charCodeAt','repeat','430908CSCAwq','diagonalDerecha','WHATSAPP','\x20\x20\x20\x20\x20','¡Correcto!','horizontal','La\x20palabra\x20\x22','Incorrecto.\x20Te\x20quedan','diagonalIzquierda','128716ScAGhM','2854455MiuNDg','CASA','549DExvZh','499530xHoubv','random','25LsHbIm'];_0x153f=function(){return _0x56cd04;};return _0x153f();}let fila,columna,sopaNube=null,intentos=0x3,handler=async(_0x205dc9,{conn:_0xad640d,text:_0x285b72,usedPrefix:_0x2a48bd,command:_0x317e5c})=>{const _0x57a7d5=_0x443c;function _0x21280c(){const _0x5e424c=_0x443c,_0x56ac5d=0xa;let _0x1ee1bc=new Array(_0x56ac5d);for(let _0x2d3419=0x0;_0x2d3419<_0x56ac5d;_0x2d3419++){_0x1ee1bc[_0x2d3419]=new Array(_0x56ac5d);}const _0x49b3ce=[_0x5e424c(0x15c),'GATABOT',_0x5e424c(0x153),'GITHUB'],_0x2b75b2=_0x49b3ce[Math[_0x5e424c(0x147)](Math['random']()*_0x49b3ce[_0x5e424c(0x141)])];let _0x5f384d=Math[_0x5e424c(0x147)](Math[_0x5e424c(0x15f)]()*_0x56ac5d),_0x36cdf3=Math['floor'](Math[_0x5e424c(0x15f)]()*_0x56ac5d);const _0x3955a7=[_0x5e424c(0x156),_0x5e424c(0x145),_0x5e424c(0x152),_0x5e424c(0x159)],_0x388f7a=_0x3955a7[Math[_0x5e424c(0x147)](Math[_0x5e424c(0x15f)]()*_0x3955a7['length'])];while(_0x5f384d+_0x2b75b2['length']>_0x56ac5d&&_0x388f7a===_0x5e424c(0x145)||_0x36cdf3+_0x2b75b2[_0x5e424c(0x141)]>_0x56ac5d&&_0x388f7a==='horizontal'||_0x5f384d+_0x2b75b2[_0x5e424c(0x141)]>_0x56ac5d||_0x36cdf3+_0x2b75b2[_0x5e424c(0x141)]>_0x56ac5d){_0x5f384d=Math[_0x5e424c(0x147)](Math[_0x5e424c(0x15f)]()*_0x56ac5d),_0x36cdf3=Math[_0x5e424c(0x147)](Math['random']()*_0x56ac5d);}for(let _0x26e6d1=0x0;_0x26e6d1<_0x2b75b2[_0x5e424c(0x141)];_0x26e6d1++){if(_0x388f7a===_0x5e424c(0x156))_0x1ee1bc[_0x5f384d][_0x36cdf3+_0x26e6d1]=_0x2b75b2['charAt'](_0x26e6d1);else{if(_0x388f7a===_0x5e424c(0x145))_0x1ee1bc[_0x5f384d+_0x26e6d1][_0x36cdf3]=_0x2b75b2[_0x5e424c(0x146)](_0x26e6d1);else _0x388f7a===_0x5e424c(0x152)?_0x1ee1bc[_0x5f384d+_0x26e6d1][_0x36cdf3+_0x26e6d1]=_0x2b75b2['charAt'](_0x26e6d1):_0x1ee1bc[_0x5f384d+_0x26e6d1][_0x36cdf3-_0x26e6d1]=_0x2b75b2[_0x5e424c(0x146)](_0x26e6d1);}}console[_0x5e424c(0x143)](_0x5e424c(0x157)+_0x2b75b2+_0x5e424c(0x13f)+_0x388f7a+'\x22\x20empezando\x20en\x20la\x20fila\x20'+_0x5f384d+'\x20y\x20columna\x20'+_0x36cdf3+'.\x0a');const _0x3e0646='ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓜⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ';let _0x30e055='';_0x30e055+=_0x5e424c(0x154)+[...Array(_0x56ac5d)[_0x5e424c(0x13d)]()][_0x5e424c(0x13e)](_0x5e424c(0x144))+'\x0a',_0x30e055+='\x20\x20*╭'+'┄'[_0x5e424c(0x150)](_0x56ac5d)+'┄┄'+_0x5e424c(0x14d);for(let _0x5e9144=0x0;_0x5e9144<_0x56ac5d;_0x5e9144++){let _0xb3a927=_0x5e9144+'\x20|\x20';for(let _0xb1e49a=0x0;_0xb1e49a<_0x56ac5d;_0xb1e49a++){if(_0x1ee1bc[_0x5e9144][_0xb1e49a])_0xb3a927+=_0x1ee1bc[_0x5e9144][_0xb1e49a]+'\x20';else{let _0xc63ea5=_0x3e0646[_0x5e424c(0x146)](Math[_0x5e424c(0x147)](Math[_0x5e424c(0x15f)]()*_0x3e0646[_0x5e424c(0x141)]));_0xb3a927+=_0xc63ea5+'\x20';}}_0xb3a927+='\x20|',_0x30e055+=_0xb3a927+'\x0a';}_0x30e055+='\x20\x20*╰'+'┄'[_0x5e424c(0x150)](_0x56ac5d)+'┄┄'+'╯*',_0x30e055=_0x30e055[_0x5e424c(0x14c)](/[a-zA-Z]/g,_0x30d5b0=>_0x3e0646[_0x30d5b0[_0x5e424c(0x14f)]()-0x41]||_0x30d5b0),console['log'](_0x30e055),fila=_0x5f384d,columna=_0x36cdf3,sopaNube=_0x30e055;}if(sopaNube===null){_0x21280c();return;}else{if(''+fila+columna==_0x285b72)console['log'](_0x57a7d5(0x155)),(fila,columna,sopaNube=null);else{if(intentos===0x0){fila,columna,sopaNube=null,console['log'](_0x57a7d5(0x148),fila,columna);return;}else intentos-=0x1,console[_0x57a7d5(0x143)](_0x57a7d5(0x158),intentos,_0x57a7d5(0x142)),console[_0x57a7d5(0x143)](sopaNube);}}};handler[_0xc53ac5(0x14e)]=/^(sopa)$/i;export default handler;