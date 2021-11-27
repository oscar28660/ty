var str_verificar_si_cambia = "";
var version_optol = "3.30"
/*======================================*/
function expandir_contraer_jquery($selector, $type = null, $delay = 500)
{
	if ($type === null) {
		if($($selector).is(":visible")){
			$($selector).hide($delay);
		} else{
			$($selector).show($delay);
		}
	} else {
		if ($type == 'show') {
				$($selector).show($delay);
		} else {
				$($selector).hide($delay);
		}
	}
}
/*======================================*/
function expandir_contraer(sec)
{
	try
	{
		thisSec = eval(sec);	
	}
	catch (e)
	{
		return true;
	}

     if (thisSec != null){
          if (thisSec.length){
               if (thisSec[0].style.display != 'none'){
                    for (var i=0;i<thisSec.length;i++) {
						thisSec[i].style.display = 'none';
						thisSec[i].style.visibility = 'hidden';
					}
               }
               else{
                    for (var i=0;i<thisSec.length;i++) {
						thisSec[i].style.display = 'table-row';
						thisSec[i].style.visibility = 'visible';
					}
               }
          }
          else{
				if (thisSec.style.display != 'none') {
					 thisSec.style.display = 'none';
					 thisSec.style.visibility = 'hidden';
				}
                else {
					thisSec.style.display = 'table-row';
					thisSec.style.visibility = 'visible';
				}
          }
     }
}
/*======================================*/
function expandir_contraer_type(sec, type)
{
	try
	{
		thisSec = eval(sec);	
	}
	catch (e)
	{
		return true;
	}

     if (thisSec != null){
          if (thisSec.length){
               if (thisSec[0].style.display != 'none'){
                    for (var i=0;i<thisSec.length;i++) {
						thisSec[i].style.display = 'none';
						thisSec[i].style.visibility = 'hidden';
					}
               }
               else{
                    for (var i=0;i<thisSec.length;i++) {
						thisSec[i].style.display = type;
						thisSec[i].style.visibility = 'visible';
					}
               }
          }
          else{
				if (thisSec.style.display != 'none') {
					 thisSec.style.display = 'none';
					 thisSec.style.visibility = 'hidden';
				}
                else {
					thisSec.style.display = type;
					thisSec.style.visibility = 'visible';
				}
          }
     }
}
/*======================================*/
function expandir_contraer2(sec)
{
     thisSec = eval(sec);

     if (thisSec != null){
          if (thisSec.length){
               if (thisSec[0].style.visibility != 'hidden'){
                    for (var i=0;i<thisSec.length;i++) {thisSec[i].style.visibility = 'hidden'}
               }
               else{
                    for (var i=0;i<thisSec.length;i++) {thisSec[i].style.visibility = 'visible'}
               }
          }
          else{
                         if (thisSec.style.visibility != 'hidden')     {thisSec.style.visibility = 'hidden'}
               else{thisSec.style.visibility = 'visible'}
          }
     }
}
/*======================================*/
function solo_mostrar_ocultar (elemento, propiedad)
{
	if (propiedad == "inline") {
		propiedad = "show"
	} else {
		propiedad = "hide"
	}
	expandir_contraer_jquery("#" + elemento, propiedad)
/*
	if (propiedad=="inline")
	{
		propiedad = "contents"
	}

	var ele;
	ele = eval (elemento);
    if (ele.length)
	{
		for (var i=0;i<ele.length;i++)
			ele[i].style.display = propiedad;
	}
	else
		ele.style.display = propiedad;*/
}
/*======================================*/
function solo_mostrar_ocultar2 (elemento, propiedad)
{
	var ele;
	ele = eval (elemento);
    if (ele.length)
	{
		for (var i=0;i<ele.length;i++) {
			ele[i].style.visibility = propiedad;
		}
			
	}
	else {
		ele.style.visibility = propiedad;
	}
}
/*======================================*/
function mostrar_msn (mensaje)
{
	document.body.style.cursor = "help";
	mensaje = "" + mensaje +"&nbsp;"
	document.getElementById("mensaje_dinamico").innerHTML = mensaje;
	mensaje_dinamico.style.visibility= 'visible';
	mensaje_dinamico.style.display = 'inline';
	mensaje_dinamico.style.left=document.body.scrollLeft+event.clientX+10;
	mensaje_dinamico.style.top=document.body.scrollTop+event.clientY-15;
}
/*======================================*/
function ocultar_msn ()
{
	document.body.style.cursor = "default";
	mensaje_dinamico.style.display = 'none';
	mensaje_dinamico.style.visibility= 'hidden';
	document.getElementById("mensaje_dinamico").innerHTML = "";
}
/*======================================*/
function cambiar_figura (campo)
{
	var imagen = new Image;
	imagen_abajo = "../images/flecha_abajo.gif";
	imagen = "../images/flecha.gif";

	if (campo.bgcolor=="0")
	{
		campo.bgcolor="1";
		campo.src = imagen_abajo;
	}
	else if (campo.bgcolor=="1")
	{
		campo.bgcolor="0";
		campo.src = imagen;
	}
}
/*======================================*/
function search(forma, nombre_campo, buscador)
{
	var campo_aux = eval ("document."+forma+"."+buscador);
	if (campo_aux.value!="")
	{
		var campo = eval ("document."+forma+"."+nombre_campo);
		var found=false;
		var size=campo.length;
		var re = new RegExp(".*"+campo_aux.value+".*","gi");
		var i=0;
		while(i<=size-1 && !found)
		{
			if(campo.options[i].text.match(re))
			{
				campo.options[i].selected=true;
				found=true;
			}
			else
				campo.selectedIndex=0;

			i++;
		}
	}	
}
/*======================================*/
var posicion_popup = 0
function abrir_popup (url, nombre, altura, ancho)
{
	var WinWidth=ancho;
	var WinHeight=altura;
	var winLeft = 0 + posicion_popup;
	var winUp = 0 + posicion_popup;
	posicion_popup += 60
	if (posicion_popup>200)
		posicion_popup = 0
	var WinOptions="menubar=no,location=no,status=yes,toolbar=no,scrollbars=yes,titlebar=no,resizable=yes,width="+WinWidth+",height="+WinHeight+",top="+winUp+",left="+winLeft;
	Ventana_PopPup = window.open(url,nombre,WinOptions);
	Ventana_PopPup.focus();
	try
	{
	if (Ventana_PopPup.target)
	{}
	}catch (e) {alert(objTransJs["abrir_popup-alert"])}
}
/*======================================*/
function abrir_popup2 (url, nombre, altura, ancho)
{
	var WinWidth=ancho;
	var WinHeight=altura;
	var winLeft = 0;
	var winUp = 0;
	var WinOptions="menubar=yes,location=yes,status=yes,toolbar=yes,scrollbars=yes,titlebar=yes,resizable=yes,width="+WinWidth+",height="+WinHeight+",top="+winUp+",left="+winLeft;
	Ventana_PopPup = window.open(url,nombre,WinOptions);
	Ventana_PopPup.focus();
	try
	{
	if (Ventana_PopPup.target)
	{}
	}catch (e) {alert('Se esta intentando mostrar contenido por medio de una\nventana emergente y su navegador no lo permite.\nPor favor deshabilite su bloqueador de Pop-Pup')}
}
/*======================================*/
function mostrar_solo_seleccionado (nombre_campo, incial)
{
	combo = eval ("document."+nombre_campo);
	var cantidad = parseInt(combo.length);
	for (pos_mc=0; pos_mc<cantidad ; pos_mc++)
	{
		if (combo.options[pos_mc].selected==true)
			solo_mostrar_ocultar (incial+combo.options[pos_mc].value,"inline");
		else
			solo_mostrar_ocultar (incial+combo.options[pos_mc].value,"none");
	}
}
/*======================================*/
function verificar_longitud (campo, tamano)
{
	if (campo.value.length >= tamano)
	{
		alert('Ha llegado el limite de Caracteres');
		return false;
	}
	else
		window.status = "Has escrito = "+(campo.value.length+1)+" caracteres de "+tamano+" disponibles";
	return true;
}
/*======================================*/
function verificar_radio (campo, i, nombre_forma)
{	
	var nomb_aux, retorno = 0;
	nomb_aux = eval ("document."+nombre_forma+"."+campo.name);

	for (pos_vr=0; pos_vr<nomb_aux.length ; pos_vr++)
	{
		if (nomb_aux[pos_vr].checked==true || nomb_aux[pos_vr].getAttribute("alt")=="no_requerido")
		{
			retorno = 1;
			break;
		}
	}
	return retorno;
}
/*======================================*/
function verificar_formulario (nombre)
{
	var aux, error = false;
	formulario = eval("document.forms."+nombre);

	for (i = 0; i!=formulario.length ; i++)
	{
		error=false;
		if (formulario[i].name.substring(0,5)!="hidd_")
		{
			if (formulario[i].type=="radio")
			{
				if (verificar_radio (formulario[i], i, nombre)==0)
				{
					alert("Debe llenar todos los campos");
					animacion_campo(formulario[i]);
					formulario[i].focus();
					return false;
				}
			}
			else if (formulario[i].type!="hidden" && formulario[i].value=="" && formulario[i].disabled==false && formulario[i].getAttribute("alt")!="no_requerido" && isVisible(formulario[i]))
			{
				try
					{formulario[i].focus(); animacion_campo(formulario[i]);}
				catch (e) 
					{error=true}
				if (error==false)
				{
					alert("Debe llenar todos los campos");
					return false;
				}
			}
		}
	}
	return true;
}
/*======================================*/
function isVisible(obj)
{
    if (obj == document) return true

    if (!obj) return false
    if (!obj.parentNode) return false
    if (obj.style) {
        if (obj.style.display == 'none') return false
        if (obj.style.visibility == 'hidden') return false
    }

    //Try the computed style in a standard way
    if (window.getComputedStyle) {
        var style = window.getComputedStyle(obj, "")
        if (style.display == 'none') return false
        if (style.visibility == 'hidden') return false
    }

    //Or get the computed style using IE's silly proprietary way
    var style = obj.currentStyle
    if (style) {
        if (style['display'] == 'none') return false
        if (style['visibility'] == 'hidden') return false
    }

    return isVisible(obj.parentNode)
}
/*======================================*/
function procesar (boton, forma, url)
{
	var url;

	if (verificar_formulario(forma))
	{
		var obj_forma = eval ("document."+forma);
		obj_forma.action=url;
		obj_forma.submit();
	}
	return true;
}
/*======================================*/
function marcar_hora (obj_a)
{	
	if (confirm(' - Estas completamente Seguro que deseas marcar hora?'))
		document.location = "../includes/acciones.asp?hidd_opci=marcar_hora";
	else
		obj_a.href="javascript:void(null);";
}
/*======================================*/
function Procesar_new_window (boton, forma, url)
{
	if (verificar_formulario(forma))
	{
		var obj_forma = eval ("document."+forma);
		obj_forma.action=url;
		obj_forma.target="_blank";
		obj_forma.submit();
	}
	return true
}
/*======================================*/
function verificar_fecha (campo)
{
	var numero = /^([0-9])+$/;
	var dia, mes, ano;
	
	arreglo = campo.value.split("/");
	arreglo2 = campo.value.split("-");

	if (campo.value=="")
		return true;
	else if ((arreglo[0].length>=1 && arreglo[0].length<=2))
	{
		dia = arreglo[0];
		mes = arreglo[1];
		ano = arreglo[2];
	}
	else if ((arreglo2[0].length>=1 && arreglo2[0].length<=2))
	{
		dia = arreglo2[0];
		mes = arreglo2[1];
		ano = arreglo2[2];
	}
	else {
		alert('separador invalido use por favor el / o el guion -');
		campo.value = "";
		campo.focus();
		return false;
	}

	if (!numero.test(dia) || !(dia>=1 && dia<=31))
	{
		alert('Dia invalido. (dd/mm/aaaa)');
		campo.value = "";
		campo.focus();
		return false;
	}
	else if (!numero.test(mes) || !(mes>=1 && mes<=12))
	{
		alert('Mes invalido. (dd/mm/aaaa)');
		campo.value = "";
		campo.focus();
		return false;
		}
	else if (!numero.test(ano) || !(ano>=1900 && ano<=2060))
	{
		alert('Year invalido. (dd/mm/aaaa)');
		campo.value = "";
		campo.focus();
		return false;
	}

	dia = parseInt(dia)
	mes = parseInt(mes)

	if ( (mes==1 && dia>31) || (mes==2 && dia>29) || (mes==3 && dia>31) || (mes==4 && dia>30) || (mes==5 && dia>31) || (mes==6 && dia>30) || (mes==7 && dia>31) || (mes==8 && dia>31) || (mes==9 && dia>30) || (mes=="10" && dia>31) || (mes=="11" && dia>30) || (mes=="12" && dia>31) )
	{
		alert('El mes que acaba de introducir no tiene '+dia+' dias.');
		campo.value = "";
		campo.focus();
		return false;
	}


	return true;
}
/*======================================*/
function verificar_repetidos (campo, valor_split, valor)
{
	arr_campo = campo.value.split (valor_split);
	for ( cont_veri = 0 ; arr_campo.length!=cont_veri ; cont_veri++ )
	{
		if (trim(arr_campo[cont_veri])==valor)
			return false;
	}
	return true;
}
/*======================================*/
function borrar_copiar_valor (campo, valor_split)
{
	arr_campo = campo.value.split (valor_split);
	texto_final = "";
	for ( cont_veri = 0 ; arr_campo.length-1!=cont_veri ; cont_veri++ )
			texto_final +=trim(arr_campo[cont_veri]) + valor_split;

	texto_final = texto_final.substring(0,texto_final.length-1);
	campo.value = texto_final;

	return true;
}
/*======================================*/
function copiar_valor (campo_input, nomb_text, separador)
{
	var key;
	key = getkey(campo_input);
	var campo = eval ("document."+nomb_text);
	keychar = String.fromCharCode(key);

	var caracteresPermitidos = '0123456789';
	/* chequea si el caracter es un caracter permitido*/
	if (caracteresPermitidos.indexOf(keychar) != "-1" && key!=13)
		return true;
	else if (caracteresPermitidos.indexOf(keychar) == "-1" && key!=13)
		return false;


	if (!separador)
		separador = ";";

	if (key==13 && trim(campo_input.value)!="")
	{		
		if (verificar_repetidos(campo, separador, campo_input.value)==false)
			alert('Ya fue agregado este valor, verifique que desee repetirlo')

		try{
			if (document.forma_crear.tipo.value=="ref")
				tipo_conteo = 'P';
			else
				tipo_conteo = '';
		}
		catch(e) {tipo_conteo = '';}

		if (campo.value=="")
			campo.value = tipo_conteo + campo_input.value;
		else
			campo.value = campo.value + separador + tipo_conteo + campo_input.value;

		if (document.getElementById(nomb_text))		/*si existe el div*/
		{
			/*esto es parte de un mejora. no implementado. puede sustituirse por borra el elemento al encontrarlo.*/
		}

		campo_input.value = "";
	}
}
/*======================================*/
function getkey(e)			  			
{								  			
		if (window.event)                                         			
			return window.event.keyCode;                      			
		else if (e)                                               			
			return e.which;                                   			
		else                                                      			
			return null;								
}
/*======================================*/
function LTrim( value ) {
	
	var re = /\s*((\S+\s*)*)/;
	return value.replace(re, "$1");
	
}

/* Removes ending whitespaces*/
function RTrim( value ) {
	
	var re = /((\s*\S+)*)\s*/;
	return value.replace(re, "$1");
	
}

/* Removes leading and ending whitespaces*/
function trim( value ) {
	
	return LTrim(RTrim(value));
	
}
/*======================================*/
function habilitar_campo_historia()
{
	if (confirm('Esta Seguro de querer habilitar todos los campos para la escritura?')){
		boton_guardar.style.display='inline';
		boton_modificar.style.display='none';
		formulario = eval("document.forms.forma_historia");
		for (i = 0; i!=formulario.length ; i++){
			if (formulario[i].name!='cedu'){
				if (formulario[i].type!="hidden")
					formulario[i].readOnly=false;
				if (formulario[i].type=="select-one"){
					formulario[i].disabled=false;
				}
			}
		}
	}
}
/*======================================*/
function deshabilitar_campo_historia()
{
	boton_guardar.style.display='none';
	boton_modificar.style.display='inline';
	formulario = eval("document.forms.forma_historia");
	for (i = 0; i!=formulario.length ; i++)
	{
		if (formulario[i].type!="hidden")
			formulario[i].readOnly=true;
		if (formulario[i].type=="select-one"){
			formulario[i].disabled=true;
		}
	}
}
/*======================================*/
function concatenar_valor_combo (combo)
{
	var cantidad = parseInt(combo.length);
	var valores = "";
	for (pos_mc=0; pos_mc<cantidad ; pos_mc++)
	{
		if (combo.options[pos_mc].selected==true)
		{
			if (valores=="")
				valores = combo.options[pos_mc].value;
			else
				valores += ","+combo.options[pos_mc].value;
		}
	}
	return valores;
}
/*======================================*/
function concatenar_valor_check_by_name (name, opci = "onlyChecked")
{
	var valores = "";

	for (var i = 0; i < document.getElementsByName(name).length; i++) {
		if (document.getElementsByName(name)[i].type == "checkbox") {
			if (document.getElementsByName(name)[i].checked || opci !== "onlyChecked")
			{
				if (valores=="")
					valores = document.getElementsByName(name)[i].value;
				else
					valores += ","+document.getElementsByName(name)[i].value;
			}
		}
	}

	return valores;
}
/*======================================*/
function concatenar_valor_checkbox (checkboxes)
{
	var valores = "";

	for (var i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].type == "checkbox") {
			var isChecked = checkboxes[i].checked;
			if (valores=="")
				valores = checkboxes[i].value;
			else
				valores += ","+checkboxes[i].value;
		}
	}

	return valores;
}
/*======================================*/
function asignar_valor_combo (combo, valor)
{	
	var cantidad = parseInt(combo.length);
	for (pos_mc=0; pos_mc<cantidad ; pos_mc++)
	{
		if (combo.options[pos_mc].value==valor)
		{
			combo.options[pos_mc].selected="true";
			return true;
		}
	}
}
/*======================================*/
function mostrar_hora ()
{
	var res;
	date=new Date();
	res = date.getDate()+"/"+date.getMonth()+"/"+date.getYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
	return res;
}
/*======================================*/
function enviar_tension ()
{
	document.forma.time_tio_1.value = document.getElementById('fech_tio_1').innerHTML;
	document.forma.time_tio_2.value = document.getElementById('fech_tio_2').innerHTML;
	document.forma.time_tio_3.value = document.getElementById('fech_tio_3').innerHTML;
	document.forma.submit();
}
/*======================================*/
function login ()
{				
	if (document.forma.logi.value==""){
		alert('Ingrese su Usuario Por Favor');
		document.forma.logi.focus();
	}
	else if (document.forma.pass.value=="")	{
		alert('Ingrese su password Por Favor');
		document.forma.pass.focus();
	}
	else if (document.forma.recaptcha_response_field.value=="" && !local)
	{
		alert('Ingrese el texto que ve en las imagenes');
		document.forma.recaptcha_response_field.focus ();
	}
	else
		document.forma.submit();
}
/*======================================*/
function enviar_mail ()
{
	if (document.forma.para.value=="")
	{
		alert('Debe de Ingresar la direccion a donde desea enviar la historia medica');
		document.forma.para.focus();
	}
	else
	{
		var cuerpo_final = "";
		cuerpo_final = cuerpo_final + document.getElementById('cuerpo_historia_1').innerHTML;
		cuerpo_final = cuerpo_final + document.getElementById('cuerpo_historia_2').innerHTML;
		cuerpo_final = cuerpo_final + document.getElementById('cuerpo_historia_3').innerHTML;

		document.forma.cuerpo.value = cuerpo_final;

		if (trim(cuerpo_final)=="" && document.forma.alternativo.value=="")
		{
			alert('No puede enviar un mail Vacio. Debe o enviar la historia o un mensaje en texto alternativo');
			return false;
		}
		else
		{
			if (confirm('Esta Seguro que desea enviar este E-Mail?'));
				document.forma.submit();
		}
	}
}
/*======================================*/
function calcular_queratometria ()
{
	try
	{
		document.getElementById('prom_diop_dere').innerHTML = ( parseFloat(document.forma_historia.quer_diop_hori_od.value) + parseFloat(document.forma_historia.quer_diop_vert_od.value) ) / 2;
		document.getElementById('prom_mili_dere').innerHTML = ( parseFloat(document.forma_historia.quer_mili_hori_od.value) + parseFloat(document.forma_historia.quer_mili_vert_od.value) ) / 2;

		document.getElementById('cili_diop_dere').innerHTML = parseFloat(document.forma_historia.quer_diop_hori_od.value) - parseFloat(document.forma_historia.quer_diop_vert_od.value);
		if (parseFloat(document.forma_historia.quer_diop_hori_od.value) < parseFloat(document.forma_historia.quer_diop_vert_od.value))
			document.getElementById('cili_eje_dere').innerHTML = parseFloat(document.forma_historia.quer_eje_hori_od.value);
		else if (parseFloat(document.forma_historia.quer_diop_hori_od.value) > parseFloat(document.forma_historia.quer_diop_vert_od.value))
			document.getElementById('cili_eje_dere').innerHTML = parseFloat(document.forma_historia.quer_eje_vert_od.value);
		else if (parseFloat(document.forma_historia.quer_diop_hori_od.value) == parseFloat(document.forma_historia.quer_diop_vert_od.value))
			document.getElementById('cili_eje_dere').innerHTML = "0";

		document.getElementById('prom_diop_izqu').innerHTML = ( parseFloat(document.forma_historia.quer_diop_hori_oi.value) + parseFloat(document.forma_historia.quer_diop_vert_oi.value) ) / 2;
		document.getElementById('prom_mili_izqu').innerHTML = ( parseFloat(document.forma_historia.quer_mili_hori_oi.value) + parseFloat(document.forma_historia.quer_mili_vert_oi.value) ) / 2;

		document.getElementById('cili_diop_izqu').innerHTML = parseFloat(document.forma_historia.quer_diop_hori_oi.value) - parseFloat(document.forma_historia.quer_diop_vert_oi.value);
		if (parseFloat(document.forma_historia.quer_diop_hori_oi.value) < parseFloat(document.forma_historia.quer_diop_vert_oi.value))
			document.getElementById('cili_eje_izqu').innerHTML = parseFloat(document.forma_historia.quer_eje_hori_oi.value);
		else if (parseFloat(document.forma_historia.quer_diop_hori_oi.value) > parseFloat(document.forma_historia.quer_diop_vert_oi.value))
			document.getElementById('cili_eje_izqu').innerHTML = parseFloat(document.forma_historia.quer_eje_vert_oi.value);
		else if (parseFloat(document.forma_historia.quer_diop_hori_oi.value) == parseFloat(document.forma_historia.quer_diop_vert_oi.value))
			document.getElementById('cili_eje_izqu').innerHTML = "0";

		//2 decimals
		document.getElementById('prom_diop_dere').innerHTML = parseFloat(document.getElementById('prom_diop_dere').innerHTML).toFixed(2);
		document.getElementById('prom_mili_dere').innerHTML = parseFloat(document.getElementById('prom_mili_dere').innerHTML).toFixed(2);

		document.getElementById('prom_diop_izqu').innerHTML = parseFloat(document.getElementById('prom_diop_izqu').innerHTML).toFixed(2);
		document.getElementById('prom_mili_izqu').innerHTML = parseFloat(document.getElementById('prom_mili_izqu').innerHTML).toFixed(2);
	}
	catch(e)
	{
		alert('No se puden calcular las queratometrias, verifique que tenga todos los datos escritos correctamente');
	}
}
/*======================================*/
function asignar_tio (numero)
{
	var nomb_campo = "time_tio_"+numero;
	var campo = eval("document.forma_historia."+nomb_campo);
	campo.value = mostrar_hora();
	document.getElementById(nomb_campo+'_div').innerHTML = mostrar_hora();

}
/*======================================*/
function buscar ()
{
	if (document.forma_busca_hist.tipo_historia[1].checked==true)
	{
		if (document.forma_busca_hist.cedu.value.toUpperCase()=='V0' || document.forma_busca_hist.cedu.value.toUpperCase()=='E0' || document.forma_busca_hist.cedu.value.toUpperCase()=='G0' || document.forma_busca_hist.cedu.value.toUpperCase()=='J0')
			alert('No esta permitido asignar Documento identidad en ceros.Si lo desee agrege por la fecha de nacimiento o bien haga una busqueda masiva');
		else if (document.forma_busca_hist.cedu.value.length<7)
			alert('Los Documento identidad deben tener por lo menos 6 numeros.');
		else
			document.forma_busca_hist.submit();
	}
	else if (document.forma_busca_hist.tipo_historia[0].checked==true)
	{
		if (document.forma_busca_hist.fecha_nacimi.value=="")
			alert('Debe ingresar la fecha de nacimiento');
		else{
			document.forma_busca_hist.action="busqueda_masiva_historia.asp?nino=1";
			document.forma_busca_hist.submit();
		}
	}
	else
		alert('Debe de Seleccionar algun tipo de paciente');
}
/*======================================*/
function asignar_cedula ()
{
	if (document.forma.cedu.value=="0" || document.forma.cedu.value=="")
		alert('Debe de Ingresar un Documento identidad valido');
	else
		document.forma.submit();

	return true;
}
/*======================================*/
function agregar_recordatorio ()
{
	if (document.forma.titulo.value=="")
		alert('Debe de Ingresar el titulo');
	else if (document.forma.mensaje.value=="")
		alert('Debe de Ingresar el mensaje');
	else
		document.forma.submit();
}
/*======================================*/
function buscar_contacto ()
{
	if (document.forma_buscar.nomb.value=="")
		alert('Debde de ingresar algun dato para hacer la busqueda');
	else
		document.foma_buscar.submit();
}
/*======================================*/
function agregar_contacto ()
{
	if (document.forma.nomb.value=="")
		alert('Debde de ingresar por lo menos el nombre');
	else
		document.forma.submit();
}
/*======================================*/
function Solo_caracteresbd (e, longitud_max)
{
	if ( (e.value.length) == (longitud_max) )
		return false;
		
		var caracteresPermitidos = '@&_0123456789QWERTYUIOPLKJHGFDSAZXCVBNMÑqwertyuioplkjhgfdsazxcvbnmñ,.;-()/* ';
		var key, keychar;                                                               
		key = getkey(e);

		if (key == null) return true;

		/* get character*/
		keychar = String.fromCharCode(key);
		keychar = keychar.toLowerCase();
		caracteresPermitidos = caracteresPermitidos.toLowerCase();

		/* chequea si el caracter es un caracter permitido*/
		if (caracteresPermitidos.indexOf(keychar) != -1)
			return true;

		/* control keys*/
			if ( key==null || key==0 || key==8 || key==9 || key==13 || key==27 )
			return true;

		/* else return false*/
		return false;
}
/*======================================*/
function Solo_caracteres_gene (e, longitud_max, caracteres_generales)
{
	if ( (e.value.length) == (longitud_max) )
		return false;

		var caracteresPermitidos = caracteres_generales;
		var key, keychar;
		key = getkey(e);

		if (key == null) return true;

		/* get character*/
		keychar = String.fromCharCode(key);
		keychar = keychar.toLowerCase();
		caracteresPermitidos = caracteresPermitidos.toLowerCase();

		/* chequea si el caracter es un caracter permitido*/
		if (caracteresPermitidos.indexOf(keychar) != -1)
			return true;

		/* control keys*/
			if ( key==null || key==0 || key==8 || key==9 || key==13 || key==27 )
			return true;

		/* else return false*/
		return false;
}
/*======================================*/
function Solo_formula2 (e, longitud_max)
{
	if ( (e.value.length) == (longitud_max) )
		return false;

	var caracteresPermitidos = '0123456789.';
	var key, keychar;
	key = getkey(e);

	if (key == null) return true;

	/* get character*/
	keychar = String.fromCharCode(key);
	keychar = keychar.toLowerCase();
	caracteresPermitidos = caracteresPermitidos.toLowerCase();

	/* chequea si el caracter es un caracter permitido*/
	if (caracteresPermitidos.indexOf(keychar) != -1)
		return true;

	/* control keys*/
	if ( key==null || key==0 || key==8 || key==9 || key==13 || key==27 )
		return true;

	/* else return false*/
	return false;
}
/*======================================*/
function Solo_formula (e, longitud_max)
{
	if ( (e.value.length) == (longitud_max) )
		return false;

	var caracteresPermitidos = '0123456789.+-bpn'
	var key, keychar;
	key = getkey(e);

	if (key == null) return true;

	/* get character*/
	keychar = String.fromCharCode(key);
	keychar = keychar.toLowerCase();
	caracteresPermitidos = caracteresPermitidos.toLowerCase();

	if(e.value.length==0 && keychar!="-" && keychar!="+" && keychar!="p" && keychar!="b" && keychar!="n"){
		alert("Para la Formula debe seleccionar primero el signo (-,+)");
		return false;
	}

	/* chequea si el caracter es un caracter permitido*/
	if (caracteresPermitidos.indexOf(keychar) != -1)
		return true;

	/* control keys*/
	if ( key==null || key==0 || key==8 || key==9 || key==13 || key==27 )
		return true;

	/* else return false*/
	return false;
}
/*======================================*/
function Solo_numeros (e, longitud_max)
{
	try{
		if ( (e.value.length) == (longitud_max) )
			return false;
	} catch (error) {
		if ( (e.innerText.length) == (longitud_max) )
			return false;
	}

		var caracteresPermitidos = '0123456789';
		var key, keychar;
		key = getkey(e);

		if (key == null) return true;

		/* get character*/
		keychar = String.fromCharCode(key);
		keychar = keychar.toLowerCase();
		caracteresPermitidos = caracteresPermitidos.toLowerCase();

		/* chequea si el caracter es un caracter permitido*/
		if (caracteresPermitidos.indexOf(keychar) != -1)
			return true;

		/* control keys*/
			if ( key==null || key==0 || key==8 || key==9 || key==13 || key==27 )
			return true;

		/* else return false*/
		return false;
}
/*======================================*/
function Solo_numeros_coma (e, longitud_max)
{
	if ( (e.value.length) == (longitud_max) )
		return false;

		var caracteresPermitidos = '0123456789,';
		var key, keychar;
		key = getkey(e);

		if (key == null) return true;

		/* get character*/
		keychar = String.fromCharCode(key);
		keychar = keychar.toLowerCase();
		caracteresPermitidos = caracteresPermitidos.toLowerCase();

		/* chequea si el caracter es un caracter permitido*/
		if (caracteresPermitidos.indexOf(keychar) != -1)
			return true;

		/* control keys*/
			if ( key==null || key==0 || key==8 || key==9 || key==13 || key==27 )
			return true;

		/* else return false*/
		return false;
}
/*======================================*/
function calcular_dnpc (campo, nombre_dnpc)
{
	var campo_dnpc = eval ('document.forma_historia.'+nombre_dnpc);
	dnpc_value = parseFloat(campo.value.replace(',','.')) - 2;
	dnpc_value = dnpc_value.toFixed(2);
	campo_dnpc.value = dnpc_value;
}
/*======================================*/
function enviar_password ()
{
	if (document.forma.actual.value=="" || document.forma.nuevo.value=="" || document.forma.nuevo2.value=="")
		alert('Debe de llenar todas la informacion para poder hacer cambio de password');
	else if ( document.forma.nuevo.value!= document.forma.nuevo2.value)
		alert('La contraseña nueva ingresada no coincide con la repeticion.');
	else
		document.forma.submit();
}
/*======================================*/
function buscar_refencia ()
{
	if (document.forma.marca.value != "" && document.forma.refe.value != "") {
		var valor = 'opci=busc_refe&marc=' + escape(document.forma.marca.value) + '&refe=' + escape(document.forma.refe.value) + '&sesion_login_id=' + escape(document.campos_sesion.sesion_login_id.value) ;
		iniciar (valor, '../includes/ejecutar.asp');
	}
}
/*======================================*/
function procesar_resultado (rafaga)
{
//	alert(rafaga)
	arr = rafaga.split("|");
	if (arr[0]=='busc_refe')
	{
		if (arr[1]=='MULTIPLE')
		{
			document.getElementById("mensaje_dinamico").innerHTML = arr[2]
			document.forma.codi.value = document.getElementById("codi_ajax_read").innerHTML;
			mensaje_dinamico.style.visibility= 'visible';
			mensaje_dinamico.style.display = 'inline';
			mensaje_dinamico.style.left=10;
			mensaje_dinamico.style.top=200;
		}
		else
			{
			back_marc = document.forma.marca.value;
			back_refe = document.forma.refe.value;
			document.forma.reset();
			document.forma.codi_existente.value=arr[1];
			document.forma.codi.value=arr[1];
			document.forma.marca.value = back_marc;
			document.forma.refe.value = back_refe;
			tr_cantidad.style.display='none';
			tr_existe_prod.style.display='none';
			tr_existe_prod2.style.display='none';
			expandir_contraer_jquery('#producto_con_iva', 'hidde')
		}
	}
	else if (arr[0]=='busc_refe' && trim(arr[1])=='')
		document.forma.reset();
	else if (arr[0]=='busc_mont')
	{
		document.getElementById("mensaje_dinamico").innerHTML = arr[1];
		mensaje_dinamico.style.visibility= 'visible';
		mensaje_dinamico.style.display = 'inline';
		mensaje_dinamico.style.left=100;
		mensaje_dinamico.style.top=400;

	}
	else if (arr[0]=='busc_prod_vent')
	{
		if (trim(arr[1])!='vacio'){
			document.getElementById("mensaje_dinamico").innerHTML = arr[1]
			mensaje_dinamico.style.visibility= 'visible';
			mensaje_dinamico.style.display = 'inline';
			mensaje_dinamico.style.left=100;
			mensaje_dinamico.style.top=430;
			try{
				$("#ancla_venta").focus();
			}catch (e){}
		}
		else
			alert('Producto no Existe');
	}
	else if (arr[0]=='busc_clie')
	{
		if (arr[1]!="vacio")
		{
			document.forma.nomb.value = decodeURI(arr[2]).replaceAll('+',' ');
			document.forma.dire.value = arr[3];
			document.forma.tele.value = arr[4];
			document.forma.id_pers.value = arr[1];
			document.forma.apel.value = decodeURI(arr[5]).replaceAll('+',' ');
			if (document.forma.java_pais.value === 'chile') {
				buscar_factura_custom();
			} else if (document.forma.java_pais.value === 'guatemala') {
				show_client_gt();
			}
		}
		else
		{
			/*document.forma.nomb.value = "";
			document.forma.dire.value = "";
			document.forma.tele.value = "";
			document.forma.id_pers.value = "";
			document.forma.apel.value = "";*/
			if (document.getElementById('es_optica').value === "1") {
				if ((document.forma.cedu.value.substring(0,1).toLowerCase()=="v" || document.forma.cedu.value.substring(0,1).toLowerCase()=="e") && document.forma.java_id_lice.value!='53' && document.forma.java_id_lice.value!='54')
				{
					if (confirm ('La Persona que acaba de ingresar no existe.\nSi la misma va a comprar Cristales debera crearla previamente para los datos de la orden de trabajo.\nDesea crear a esta persona ahora?'))
						abrir_popup ("historia.asp?step=2&mantener=1&ci="+document.forma.cedu.value+"&fech_naci=&no_tope=1", "nuevo_paciente_venta", 600, 800);
				}
				else if (document.forma.cristales_venta.value!=''){
					if (confirm ('La Persona que acaba de ingresar no existe.\nSi la misma va a comprar Cristales debera crearla previamente para los datos de la orden de trabajo.\nDesea crear a esta persona ahora?'))
						abrir_popup ("historia.asp?step=2&mantener=1&ci="+document.forma.cedu.value+"&fech_naci=&no_tope=1", "nuevo_paciente_venta", 600, 800);
				}
			}
		}
	}
	else if (arr[0]=='busc_fact_cust')
	{
		if (arr[1]!="vacio")
		{
			document.forma.giro_cl.value = arr[1];
			document.forma.ciud_cl.value = arr[2];
			document.forma.comu_cl.value = arr[3];
		}
	}
	else if (arr[0]=='insertar_aplicacion_venta')
	{
		alert('Venta Enviada Con Exito');
		document.forma.boton_enviar.disabled=true;
	}
	else if (arr[0]=='leer_aplicacion_venta')
	{
		var tabla=document.getElementById("ventas_por_cobrar");
		var cant_row = document.getElementById('ventas_por_cobrar').rows.length;
		for (cont=1; cont+1!=arr.length ; cont++ )
		{
			fila=tabla.insertRow(cant_row+(cont-1));
			fila.id ="fila_"+cant_row+(cont-1);
			c1=fila.insertCell(0);
			c1.setAttribute("class","contenido");
			c1.setAttribute("align","center");
			c1.innerHTML=arr[cont];
		}
	}
	else if (arr[0]=='buscar_historia')
	{
		if (arr[1]=='vacio') alert('Error, ha buscado una historia que no existe. Informe al administrador este codigo=111')
		arr_od = arr[3].replace("&deg;","°").split("!");
		arr_oi = arr[4].replace("&deg;","°").split("!");
		ojo = "od";
		for ( i=0 ; i!=2 ; i++ )
		{
			eval("document.forma.form_esfe_"+ojo+"_"+arr[1]+"_"+arr[2]+".value = arr_"+ojo+"[0]");
			eval("document.forma.form_celi_"+ojo+"_"+arr[1]+"_"+arr[2]+".value = arr_"+ojo+"[1]");
			eval("document.forma.form_eje_"+ojo+"_"+arr[1]+"_"+arr[2]+".value = arr_"+ojo+"[2]");
			eval("document.forma.form_add_"+ojo+"_"+arr[1]+"_"+arr[2]+".value = arr_"+ojo+"[3]");
			eval("document.forma.form_dnpl_"+ojo+"_"+arr[1]+"_"+arr[2]+".value = arr_"+ojo+"[4]");
			eval("document.forma.form_dnpc_"+ojo+"_"+arr[1]+"_"+arr[2]+".value = arr_"+ojo+"[5]");
			eval("document.forma.form_altu_"+ojo+"_"+arr[1]+"_"+arr[2]+".value = arr_"+ojo+"[6]");
			eval("document.forma.form_altu_"+ojo+"_"+arr[1]+"_"+arr[2]+".value = arr_"+ojo+"[6]");
			ojo = "oi";
		}
		eval("document.forma.form_obse_"+arr[1]+"_"+arr[2]+".value = arr[5]");
	}
	else if (arr[0].indexOf("captcha")!="-1" || arr[0].indexOf("success")!="-1")
	{
		if (arr[0].substring(0,4)=="true"){
			document.getElementById("td_span").innerHTML = "INCIANDO SESION, ESPERE UN MOMENTO";
			document.forma.submit();
		}
		else if (arr[0].substring(0,5)=="false"){
			alert('Ha escrito de forma incorrecta la imagen');
			Recaptcha.reload();
		}
		else
			alert('ERROR F01-COMUNIQUE AL ADMINISTRADOR')
	}
	else if (arr[0]=='nota_credito' || arr[0]=='nota_credito2')
	{
		if (trim(arr[1])=='vacio'){
			alert('No posee Notas de Credito pendientes por consumir')
			try {
				document.forma.pago_forma[arr[2]].options[0].selected=true;
			} catch (e) {}
		}
		else{
			document.getElementById("lista_nc").innerHTML = arr[1];
			lista_nc.style.visibility= 'visible';
			lista_nc.style.display = 'inline';
			if (arr[0]=='nota_credito'){
				lista_nc.style.left=120
				lista_nc.style.top=850
			}
			else{
				lista_nc.style.left=10
				lista_nc.style.top=10
			}
		}
	}
	else if (arr[0]=="enviar_email_ajax")
	{}
	else if (arr[0]=="cargar_arreglo_ajax_gene")
	{
		try{
			eval("var arr_ajax_" + arr[1]);

			var_var = eval ("arr_ajax_"+arr[1])
			var_var = arr[3].replace(/\'/g,"").split(",")

			$("#"+arr[1]).autocomplete({
				source: var_var,
				select: function(event, ui) {
					if (arr[2]=="producto_venta")
					{
						/*evento se ejecuta solo una vez*/
					}
				}
			});
		}
		catch(e)
		{alert("Error en carga - Contacte al administrador - ERROR AJX-ARR-DINA JS - "+e.message)}
		str_verificar_si_cambia += arr[1];
	}
	else
		alert('Opcion de ajax no validada, rafaga retorno = \n'+rafaga);
}
/*======================================*/
function handleHttpResponse()
{
	if (http.readyState == 4)
	{
		if (http.status == 200)
		{
			if (http.responseText.indexOf('invalid') == -1)
			{
				document.body.style.cursor = "default";
				document.getElementById("mensaje_dinamico").innerHTML = "";
				mensaje_dinamico.style.visibility= 'hidden';
				mensaje_dinamico.style.display = 'none';
				document.body['onmousemove']=''
				enProceso = false;
				procesar_resultado (http.responseText);
			}
		}
	}
}
var veces_ajax = 0
function iniciar(valor_enviado, url)
{
	if (!enProceso && http)
	{
		veces_ajax = 0		
		document.body['onmousemove']=new Function('document.body.style.cursor = "wait";mensaje_dinamico.style.visibility="visible";mensaje_dinamico.style.display="inline";document.getElementById("mensaje_dinamico").innerHTML = "Buscando...<br>Espere un Momento";var x = window.event.x+10+document.body.scrollLeft;var y = window.event.y+document.body.scrollTop;document.getElementById("mensaje_dinamico").style.left = x + "px";document.getElementById("mensaje_dinamico").style.top = y + "px";');

		var valor = valor_enviado.replace("'","");
		//alert(url + '?' +valor)
		http.open("POST", url, true);
		http.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		http.send(valor);
		http.onreadystatechange = handleHttpResponse;
		enProceso = true;
	}
	else{
		if (veces_ajax<50){
			setTimeout("iniciar('"+valor_enviado+"','"+url+"')", 300);
			veces_ajax ++
		}
		else
			alert('Intente nuevamente hacer la busqueda, el servidor se encuentra ocupado y no puede procesar su solicitud. ERROR ('+valor_enviado+')')
	}

}

function getHTTPObject()
{
	var xmlhttp;
	/*@cc_on
	@if (@_jscript_version >= 5)
		try{xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");}
		catch (e){try{xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}catch(e){xmlhttp=false;}}
	@else
		xmlhttp = false;
	@end @*/
	if (!xmlhttp && typeof XMLHttpRequest != 'undefined')
	{
		try {xmlhttp = new XMLHttpRequest();}
		catch(e){xmlhttp=false;}
	}
	return xmlhttp;
}
var enProceso = false; /* lo usamos para ver si hay un proceso activo*/
var http = getHTTPObject(); /* Creamos el objeto XMLHttpRequest*/
/*======================================*/

/*======================================*/
function mostrar_costo_anterior ()
{
	document.getElementById("mensaje_dinamico").innerHTML = "<img style='BACKGROUND-COLOR: #ADD8E6' src='../images/wait.gif'>";
	mensaje_dinamico.style.visibility= 'visible';
	mensaje_dinamico.style.display = 'inline';
	var valor = 'opci=busc_mont&marc=' + document.forma.marca.value + '&refe='+document.forma.refe.value + '&sesion_login_id=' + escape(document.campos_sesion.sesion_login_id.value);
	iniciar (valor, '../includes/ejecutar.asp');
}
/*======================================*/
function calcular_factor(mont_comp, mont_vent, fact_gana)
{
	var mont_comp_n, mont_vent_n, fact_gana_n, res;
	mont_comp_n = limpiar_numero(mont_comp.value);
	fact_gana_n = limpiar_numero(fact_gana.value);
	res = mont_comp_n*fact_gana_n;
	if (isNaN (res))
		res = 0;
	mont_vent.value = formatCurrency(res);
}
/*======================================*/
function calcular_factor_viceversa(mont_comp, mont_vent, fact_gana)
{
	var mont_comp_n, mont_vent_n, fact_gana_n, res;
	mont_comp_n = limpiar_numero(mont_comp.value);
	mont_vent_n = limpiar_numero(mont_vent.value);
	res = mont_vent_n/mont_comp_n;
	if (isNaN (res))
		res = 0;
	fact_gana.value = formatCurrency(res);
}
/*======================================*/
function limpiar_numero (numero_limp)
{
	var res_limp = numero_limp.toString();
	var total_limp = "";
	for (i_limp=0;i_limp!=res_limp.length ; i_limp++ )
	{
		if (res_limp.substring(i_limp,i_limp+1)==".")
		{}
		else if  (res_limp.substring(i_limp,i_limp+1)==",")
			total_limp = total_limp + '.';
		else
			total_limp = total_limp + res_limp.substring(i_limp,i_limp+1);

	}
	total_limp = parseFloat(total_limp);
	return total_limp;
}
/*======================================*/
function formatCurrency(num) 
{
	num = num.toString().replace(/\$|\,/g,'');
		if(isNaN(num))
			num = "0";
			sign = (num == (num = Math.abs(num)));
			num = Math.floor(num*100+0.50000000001);
			cents = num%100;
			num = Math.floor(num/100).toString();
		if(cents<10)
			cents = "0" + cents;
		for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
			num = num.substring(0,num.length-(4*i+3))+'.'+
			num.substring(num.length-(4*i+3));
	return (((sign)?'':'-') + num + ',' + cents);
}
/*======================================*/
function verificar_radio (campo, i, nombre_forma)
{	
	var nomb_aux, retorno = 0;
	nomb_aux = eval ("document."+nombre_forma+"."+campo.name);

	for (pos_vr=0; pos_vr<nomb_aux.length ; pos_vr++)
	{
		if (nomb_aux[pos_vr].checked==true || nomb_aux[pos_vr].getAttribute("alt")=="no_requerido")
		{
			retorno = 1;
			break;
		}
	}
	return retorno;
}
/*======================================*/
function buscar_factura_custom ()
{
	if (document.forma.cedu.value!='')
	{
		var valor = 'opci=busc_fact_cust&c=' + document.forma.cedu.value + '&l=' + escape(document.campos_sesion.sesion_login_id.value);
		iniciar (valor, '../includes/ejecutar.asp');
	}
}
/*======================================*/
function bucar_empleado_venta ()
{
	//gaceta 41052 -  Gaceta Octubre 41239
	//actualizar_totales();

	if (document.forma.cedu.value!='' && val_ente_tribu_response === false)
	{
		var valor = 'opci=busc_clie&cedu=' + document.forma.cedu.value + '&sesion_login_id=' + escape(document.campos_sesion.sesion_login_id.value);
		iniciar (valor, '../includes/ejecutar.asp');
	}
}
/*======================================*/
function agregar_producto_venta ()
{
	var valor = "opci=busc_prod_vent&refe="+document.forma.refe.value + '&sesion_login_id=' + escape(document.campos_sesion.sesion_login_id.value);

	if (trim(document.forma.refe.value) == "") {
		return false;
	}

	var jqxhr = $.get( "../includes/ejecutar.asp?" + valor, function() {
		})
		.done(function(data) {
			result = data;
			arr = result.split("|");

			if (trim(arr[1])!='vacio'){
				document.getElementById("mensaje_dinamico").innerHTML = arr[1]
				mensaje_dinamico.style.visibility= 'visible';
				mensaje_dinamico.style.display = 'inline';
				mensaje_dinamico.style.left=100;
				mensaje_dinamico.style.top=430;
				try{
					$("#ancla_venta").focus();
				}catch (e){}
			}
			else
				alert('Producto no Existe');

		})
		.fail(function() {
			alert( "Error - Intente nuevamente" );
		})
		.always(function() {

		}
	);

}
/*======================================*/
function remover_fila (nombre)
{
	for (i=1; i!=document.getElementById('tabla_venta').rows.length; i++ )
	{
		if (document.getElementById('tabla_venta').rows[i].id == nombre )
		{
			if (document.getElementById('tabla_venta').rows[i].hasAttribute('promo_opt')) {
				promo_id = document.getElementById('tabla_venta').rows[i].getAttribute('promo_opt');
				document.getElementById("tabla_venta").deleteRow(i);
				remover_fila (promo_id);
			} else {
				document.getElementById("tabla_venta").deleteRow(i);
			}

			break;
		}
	}
}
/*======================================*/
function create_tr(codi_inte, id, cost, desc, cant, iva, porcentaje_iva)
{
	if (document.getElementById("fila_"+id)){
		alert('Producto ya fue Agregado');
		return false;
	}

	var round_all = document.forma.round_all.value;
	//cost = formatCurrency(round_field (limpiar_numero(cost), round_all));

	// print iva
	var td_iva = document.getElementById("td_iva").innerHTML.search(porcentaje_iva);
	var td_iva_2 = document.getElementById("td_iva_2").innerHTML.search(porcentaje_iva);
	var td_iva_3 = document.getElementById("td_iva_3").innerHTML.search(porcentaje_iva);
	var td_iva_4 = document.getElementById("td_iva_4").innerHTML.search(porcentaje_iva);
	var nomb_td_iva = "";

	var valor_etiqueta = document.forma.hidd_impuesto.value + ' (' + porcentaje_iva + '%)';

	if (document.getElementById("td_iva").innerHTML == '' || document.getElementById("td_iva").innerHTML == valor_etiqueta ){
		document.getElementById("td_iva").innerHTML = valor_etiqueta;
		nomb_td_iva = "iva_div";
		document.forma.iva.value = porcentaje_iva;
	}
	else if ((td_iva_2==-1 && document.getElementById("td_iva_2").innerHTML=="") || document.getElementById("td_iva_2").innerHTML == valor_etiqueta ){
		document.getElementById("td_iva_2").innerHTML = valor_etiqueta;
		nomb_td_iva = "iva_div_2";
	}
	else if ((td_iva_3==-1 && document.getElementById("td_iva_3").innerHTML=="") || document.getElementById("td_iva_3").innerHTML == valor_etiqueta ){
		document.getElementById("td_iva_3").innerHTML = valor_etiqueta;
		nomb_td_iva = "iva_div_3";
	}
	else if ((td_iva_4==-1 && document.getElementById("td_iva_4").innerHTML=="") || document.getElementById("td_iva_4").innerHTML == valor_etiqueta ){
		document.getElementById("td_iva_4").innerHTML = valor_etiqueta;
		nomb_td_iva = "iva_div_4";
	}
	//

	mostrar_descuento = document.forma.mostrar_descuento_porcentaje.value

	var tabla=document.getElementById("tabla_venta");
	var cant_row = document.getElementById('tabla_venta').rows.length;
	fila=tabla.insertRow(cant_row);

	fila.id ="fila_"+id;
	try {
	fila.title = document.getElementById("price_conversion").title;
	} catch(e) {}

	// set sell tax and div to show tax amount
	fila.setAttribute("iva_vent", porcentaje_iva);
	fila.setAttribute("nomb_td_iva", nomb_td_iva);

	c1=fila.insertCell(0);
	c1.innerHTML=crear_select(id,cant, desc);
	c1.id ="cant_"+id;

	c2=fila.insertCell(1);
	c2.id ="producto_"+id;

	c3=fila.insertCell(2);
	c3.id ="columna_"+id;

	if (document.getElementById("pvp_editable").innerHTML == "1") {
    c3.setAttribute("contenteditable", "true");
    c3.setAttribute("onKeydown", "return(formato_moneda_div(this,'.',',',event,12));");
    c3.setAttribute("onKeyup", "precio_unitario_updated('"+id+"');");
  }

	c4=fila.insertCell(3);
	c4.id ="descuento_"+id;
	c4.innerHTML="<div id='div_descuento' style='display:"+mostrar_descuento+"'><input type=\"text\" maxlength=\"2\" name=\"desc_"+id+"\" size=\"4\" value=0 onblur=\"validar_maximo_descuento(this,"+id+");\" onKeyPress=\"return(Solo_numeros(this,this.maxlength));\" onKeyUp=\"calcular_descuento_venta(this,"+id+");actualizar_totales();return true;\">%</div>";

	c5=fila.insertCell(4);
	c5.id ="subtotal_"+id;
	c5.fer ="subtotal_"+id;

	if (iva.toUpperCase() == "TRUE" && document.forma.java_id_lice.value == "2") {
		pvp_final = limpiar_numero(cost) * ((porcentaje_iva/100) + 1);

		pvp_final_i = formatCurrency(round_field (pvp_final, round_all));
		c3.setAttribute("Onmouseover", "mostrar_msn('PVP Individual ' + pvp_final_i)");
		c3.setAttribute("onmouseout", "ocultar_msn();");

		c5.setAttribute("Onmouseover", "mostrar_msn('PVP Individual ' + pvp_final_i)");
		c5.setAttribute("onmouseout", "ocultar_msn();");
	}

	c6=fila.insertCell(5);
//	c6.innerHTML="<img src=\"../images/delete_peq.gif\" style=\"cursor:hand\" title=\"Click para eliminar producto\" onclick=\"remover_fila('fila_"+id+"');actualizar_totales();\"><div style=\"display:none\" id=\"iva_"+id+"\">"+iva+"</div>";
	c6.innerHTML="<a title=\"Click para eliminar producto\" href='javascript:void(0);' class='a_dinamicos' onclick=\"remover_fila('fila_"+id+"');actualizar_totales();\">[X]</a><div style=\"display:none\" id=\"iva_"+id+"\">"+iva+"</div>";

	c1.setAttribute("class","contenido");
	c2.setAttribute("class","contenido");
	c3.setAttribute("class","contenido hidepresupuesto underline");
	c4.setAttribute("class","contenido hidepresupuesto");
	c5.setAttribute("class","contenido hidepresupuesto");
	c6.setAttribute("class","hidepresupuesto");

	c1.setAttribute("align","center");
	c2.setAttribute("align","center");
	c3.setAttribute("align","center");
	c4.setAttribute("align","center");
	c5.setAttribute("align","center");
	c6.setAttribute("align","center");

/*	t1=document.createTextNode(cant);*/
	t2=document.createTextNode(desc);
	t3=document.createTextNode(cost);
/*	t4=document.createTextNode("fer");*/

/*	c1.appendChild(t1);*/
	c2.appendChild(t2);
	c3.appendChild(t3);
/*	c4.appendChild(t4);*/

	check_promotion(codi_inte, id, cost, desc, cant, iva, porcentaje_iva);
	marcar_cantidad_administrable (id, desc);

	calcular_monto (id);
	actualizar_totales ();
}
/*======================================*/
function marcar_cantidad_administrable (id, desc)
{
	arr_desc = desc.split("-");
	if (arr_desc[2].toUpperCase()=="CRISTALES" || arr_desc[2].toUpperCase()=="LUNAS" || arr_desc[2].toUpperCase()=="LENTES")
	{
		combo_cantidad = eval ("document.forma.cant_"+id);
		asignar_valor_combo (combo_cantidad, document.forma.cristales_venta.value);
		
		formulario = eval("document.forms.forma");
		for (i = 0; i!=formulario.length ; i++)
		{
			if (formulario[i].name.substring(0,5)=="cant_" && formulario[i].type=="select-one")
					id_camp = formulario[i].name.substring(5,formulario[i].name.length);
		}
	}
}
/*======================================*/
function calcular_monto (nombre)
{
	var combo = eval ("document.forma.cant_"+nombre);
	var cant = combo.value;
	var monto = limpiar_numero(document.getElementById("columna_"+nombre).innerHTML);
	document.getElementById("subtotal_"+nombre).innerHTML = formatCurrency(monto * cant);
}
/*======================================*/
function actualizar_totales ()
{
	var nomb_fila = "";
	var total = 0, iva_act = 0, subtotal_act = 0, total_sin_iva = 0, total_con_iva = 0;
	//var round_all = document.forma.round_all.value; //nofunciona, siempre da 1. revisar
	if (document.forma.java_pais.value === 'chile') {
		var round_all = 1
	} else {
		var round_all = 0
	}
	

	if (document.getElementById('tabla_venta').rows.length==1) {
		document.forma.descuento_global.value = 0;
		// clean iva labels
		document.getElementById("td_iva").innerHTML = '';
		document.getElementById("td_iva_2").innerHTML = '';
		document.getElementById("td_iva_3").innerHTML = '';
		document.getElementById("td_iva_4").innerHTML = '';
	}

	// clean iva labels
	document.getElementById("iva_div").innerHTML = '0';
	document.getElementById("iva_div_2").innerHTML = '0';
	document.getElementById("iva_div_3").innerHTML = '0';
	document.getElementById("iva_div_4").innerHTML = '0';

	for (i=1; i!=document.getElementById('tabla_venta').rows.length; i++ )
	{
		nomb_fila = document.getElementById('tabla_venta').rows[i].id;
		iva_vent =  document.getElementById('tabla_venta').rows[i].getAttribute("iva_vent");
		nomb_td_iva =  document.getElementById('tabla_venta').rows[i].getAttribute("nomb_td_iva");
		nomb_fila = nomb_fila.split("_");
		sub_aux = parseFloat(limpiar_numero(document.getElementById("subtotal_"+nomb_fila[1]).innerHTML));

		if (document.getElementById("iva_"+nomb_fila[1]).innerHTML=="False")
		{
			subtotal_act = subtotal_act + sub_aux;
			total_sin_iva +=sub_aux;
		}

		if (document.getElementById("iva_"+nomb_fila[1]).innerHTML=="True")
		{
			total_con_iva += sub_aux;
			iva_prod_actu = parseFloat( ( parseFloat(sub_aux) * parseFloat(iva_vent) ) / 100 );

			iva_act = iva_act + iva_prod_actu;
			subtotal_act = subtotal_act + sub_aux;
			var_nomb_td_iva = limpiar_numero(document.getElementById(nomb_td_iva).innerHTML) + parseFloat(iva_prod_actu);
			//var_nomb_td_iva = round_field (var_nomb_td_iva, round_all);
			document.getElementById(nomb_td_iva).innerHTML = formatCurrency( var_nomb_td_iva );
		}
	}

	if (parseFloat(limpiar_numero(document.forma.descuento_global.value))>0)
	{
		descuento = parseFloat(limpiar_numero(document.forma.descuento_global.value));
		subtotal_general = total_sin_iva + total_con_iva;
		porcentaje_sin_iva = ((total_sin_iva * 100)/ subtotal_general) / 100;
		porcentaje_con_iva = ((total_con_iva * 100)/ subtotal_general) / 100;

		descuento_para_sin_iva = descuento * porcentaje_sin_iva;
		descuento_para_con_iva = descuento * porcentaje_con_iva;

		total_sin_iva = total_sin_iva - descuento_para_sin_iva;
		total_con_iva = total_con_iva - descuento_para_con_iva;

		subtotal_act = total_sin_iva + total_con_iva
		iva_act = parseFloat( ( parseFloat(total_con_iva) * parseFloat(document.forma.iva.value) ) / 100 );
	}

	//subtotal_act = round_field (subtotal_act, round_all);
	document.getElementById("subtotal_div").innerHTML = formatCurrency( subtotal_act );

	var_total_div = subtotal_act + iva_act;
	var_total_div = round_field (var_total_div, round_all);
	document.forma.total_div.value = formatCurrency( var_total_div );

	reconv_bsf = subtotal_act + iva_act;
	reconv_bsf = reconv_bsf/1000;

	total_factura = limpiar_numero (document.forma.total_div.value);

	var_tota_abon_calc = (subtotal_act + iva_act) * (document.forma.porc_abon.value/100);
	var_tota_abon_calc = round_field (var_tota_abon_calc, round_all);
	document.getElementById("tota_abon_calc").innerHTML = formatCurrency( var_tota_abon_calc );

	document.getElementById("recon_total_div").innerHTML = formatCurrency( reconv_bsf );

	calcular_pago_restante ();

	calcular_conversion_moneda (document.getElementById('calculadora_referencial'), document.getElementById('tota_abon_calc').innerHTML, document.getElementById('monto_conversion_ref'))
}
/*======================================*/
function round_field (value_to_round, opci)
{
	if (opci == '1') {
		return Math.round(value_to_round);
		//return Math.floor(value_to_round);
	}

	return value_to_round;
}
/*======================================*/
function calcular_dif_moneda() {

	total_factura = limpiar_numero (document.forma.total_div.value);
	cambio_actual = limpiar_numero (document.forma.tasa_cambio.value);
	total_otra_moneda = total_factura / cambio_actual;

	if (cambio_actual != "1") {
		$('.tr_total_otra').show();
	}

	document.forma.total_venta_otra_moneda.value = formatCurrency( total_otra_moneda );

}
/*======================================*/
// show iva into sale screen
function show_iva (porcentaje, monto)
{

}
/*======================================*/
function actualizar_descuento (campo){

	if (document.getElementById("total_discount_in_pvp").innerHTML == "1") {
		recalcular_descuento_en_producto (campo);
    actualizar_totales();
    return true;
  }

	if (document.forma.hidd_desc_glob.value!="")
	{
		document.forma.descuento_global.value=document.forma.hidd_desc_glob.value;
		actualizar_totales ();

		if (parseFloat(limpiar_numero(campo.value))<0){
			alert('El total de la factura debe ser POSITIVO');
			document.forma.descuento_global.value = 0;
		}
		//else if (document.forma.java_id_lice!=20 && parseFloat(limpiar_numero(document.forma.descuento_global.value))>999.99){
		//	alert('Por restricciones de la impresora Fiscal, los descuentos globales no pueden ser mayores a 999.99');
		//	document.forma.descuento_global.value = 0;
		//}
		else if (parseFloat(limpiar_numero(document.forma.descuento_global.value))<0){
			alert('El descuento global no puede ser NEGATIVO');
			document.forma.descuento_global.value = 0;
		}
		else if (verificar_maximo_descuento(eval('document.forma.descuento_global'))==false)
			document.forma.descuento_global.value = 0;
		else
			document.forma.descuento_global.value=document.forma.hidd_desc_glob.value;

		document.forma.hidd_desc_glob.value="";
	}
	actualizar_totales ();
}
/*======================================*/
/*OJO = Descuento funciona solo cuando en la fact hay un solo descuento*/
function recalcular_descuento_en_producto (campo)
{
  if (document.getElementById('tabla_venta').rows.length <= 1) {
    alert('Ingrese algun producto a la venta');
    return false;
  }
	iva_factura = parseFloat(document.forma.iva.value);
	cant_productos = (document.getElementById('tabla_venta').rows.length - 1);
	total_new = parseFloat(limpiar_numero(campo.value));
	subtota_fact = parseFloat(limpiar_numero(document.getElementById('subtotal_div').innerText));

	new_subt_fact = (total_new / ((iva_factura/100) + 1)).toFixed(2);
	//new_iva_fact = (total_new * ((iva_factura/100) + 1)).toFixed(2);
	//new_subt_fact = (total_new - new_iva_fact).toFixed(2);

	diferencia_subt = subtota_fact - new_subt_fact;

	for (i=1; i!=document.getElementById('tabla_venta').rows.length; i++ )
	{
		nomb_fila = document.getElementById('tabla_venta').rows[i].id;
		nomb_fila = nomb_fila.split("_");
    iva_prim_prod = document.getElementById('tabla_venta').rows[i].getAttribute("iva_vent");

		id_fila_prod = nomb_fila[1];
		cantidad = eval("document.forma.cant_"+id_fila_prod+".value");
		valor_unitario = parseFloat(limpiar_numero(document.getElementById('columna_'+id_fila_prod).innerText));
		subt_linea = parseFloat(limpiar_numero(document.getElementById('subtotal_'+id_fila_prod).innerText));

		if (cantidad == "1") {
			break;
		}
  }

	new_subt_linea = subt_linea - diferencia_subt;
	document.getElementById('subtotal_'+id_fila_prod).innerText = formatCurrency(new_subt_linea);

	new_valor_unitario = (new_subt_linea / cantidad);
	document.getElementById('columna_'+id_fila_prod).innerText = formatCurrency(new_valor_unitario);
	//document.getElementById('subtotal_'+id_primer_prod).innerText = formatCurrency(cantidad + total_prod);

	//total_prod = (total_new / cantidad) / ((iva_factura/100) + 1);
	eval("calcular_monto('"+id_fila_prod+"')");

}


function recalcular_total (campo)
{
	if (document.getElementById("total_discount_in_pvp").innerHTML == "1") {
    //return recalcular_descuento_en_producto (campo);
		return true;
  }

	var nomb_fila = "";
	var total = 0, iva_act = 0, subtotal_act = 0, total_sin_iva = 0, total_con_iva = 0;

	if (document.getElementById('tabla_venta').rows.length==1)
		document.forma.descuento_global.value = 0

	for (i=1; i!=document.getElementById('tabla_venta').rows.length; i++ )
	{
		nomb_fila = document.getElementById('tabla_venta').rows[i].id;
		nomb_fila = nomb_fila.split("_");
		sub_aux = parseFloat(limpiar_numero(document.getElementById("subtotal_"+nomb_fila[1]).innerHTML));

		if (document.getElementById("iva_"+nomb_fila[1]).innerHTML=="False")
		{
			subtotal_act = subtotal_act + sub_aux;
			total_sin_iva +=sub_aux
		}

		if (document.getElementById("iva_"+nomb_fila[1]).innerHTML=="True")
		{
			total_con_iva += sub_aux
			iva_act = iva_act + parseFloat( ( parseFloat(sub_aux) * parseFloat(document.forma.iva.value) ) / 100 );
			subtotal_act = subtotal_act + sub_aux;
		}
	}

	tota_actual = parseFloat(limpiar_numero(document.forma.total_div.value));

	total_simulado = subtotal_act + iva_act;
	porce_V1 = (subtotal_act*100) / total_simulado

	dif_totales = total_simulado - tota_actual;

	desc_tota = dif_totales * (porce_V1/100)

//	if (desc_tota<0)
//		document.forma.hidd_desc_glob.value = formatCurrency( (desc_tota*(-1))/10 );
//	else
		document.forma.hidd_desc_glob.value = formatCurrency(desc_tota);
}
/*======================================*/
function call_validar_NC ()
{
	validar_NC (bck_fila_pago, bck_campo_pago);
}
/*======================================*/
function pagos_por_pais (fila, campo)
{
	if (document.forma.java_pais.value === 'chile') {
		fila++;

		if ($("#pago_banco" + fila).hasClass('ui-autocomplete-input')) {
			$("#pago_banco" + fila).autocomplete("destroy");
			$("#pago_banco" + fila).unbind("keyup");
	 	}

		if (campo.value === 'TC' || campo.value === 'TD') {
			autocomplete_type_select (document.getElementById("java_customarray_banco").value.replace(/'/g, "").split(','), "#pago_banco" + fila);
			$("#pago_banco" + fila).attr("placeholder", "Tipo de tarjeta");
			document.forma.pago_referencia[fila-1].placeholder = "Nro. Tarjeta";
			document.forma.pago_observacion[fila-1].placeholder = "Operacion";

			expandir_contraer_jquery('#cuotas_cl' + fila, 'show');
			expandir_contraer_jquery('#autorizacion_cl' + fila, 'show');
			document.forma.pago_observacion[fila-1].size = "5";
		} else {
			$("#pago_banco" + fila).autocomplete({
				source: ['']
			});

			$("#pago_banco" + fila).attr("placeholder", "");
			document.forma.pago_referencia[fila-1].placeholder = "";
			document.forma.pago_observacion[fila-1].placeholder = "";

			expandir_contraer_jquery('#cuotas_cl' + fila, 'hide');
			expandir_contraer_jquery('#autorizacion_cl' + fila, 'hide');
			document.forma.pago_observacion[fila-1].size = "15";
		}
	}
}
/*======================================*/
var form_pago_ante='';
var bck_fila_pago = "";
var bck_campo_pago = "";
function validar_NC (fila, campo){

	pagos_por_pais (fila, campo);

	if (form_pago_ante=='NC')
		document.forma.pago_referencia[fila].value='';

	if (lista_nc.style.display=='inline')
		document.forma.pago_forma[fila].options[0].selected=true;

	if (campo.value=='NC') {

		bck_fila_pago = fila;
		bck_campo_pago = campo;

		if (document.getElementById("first-screen-credit-note").style.display=='none') {
			document.getElementById("first-screen-credit-note").style.display = 'inline';
			document.getElementById("first-screen-credit-note").style.left=220
 			document.getElementById("first-screen-credit-note").style.top=950
			return true;
		}

		expandir_contraer_jquery('#first-screen-credit-note', 'hiden');
		iniciar ('opci=nota_credito&id_fact='+document.getElementById("credit-number").value+'&id_lice='+document.forma.java_id_lice.value+'&fila='+fila+'&nc0='+document.forma.pago_referencia[0].value+'&nc1='+document.forma.pago_referencia[1].value+'&nc2='+document.forma.pago_referencia[2].value+'&nc3='+document.forma.pago_referencia[3].value, '../includes/ejecutar.asp');

	} else{
		document.forma.pago_referencia[fila].readOnly=false;
		document.forma.pago_banco[fila].readOnly=false;
	}

	actualizar_totales (); //gaceta 41052 -  Gaceta Octubre 41239
}
/*======================================*/
function validar_NC2 (campo){
	if (form_pago_ante=='NC')
		document.forma.pago_referencia.value='';

	if (lista_nc.style.display=='inline')
		document.forma.pago_forma.options[0].selected=true;
	if (campo.value=='NC'){
		resizeTo(600, 700);
		solo_mostrar_ocultar ('tabla_ncs', 'inline')
		document.forma.pago_monto.value='';
		document.forma.pago_monto.readOnly=true;
	}
	else{
		solo_mostrar_ocultar ('tabla_ncs', 'none');
		resizeTo(600, 500);
		document.forma.pago_referencia.readOnly=false;
		document.forma.pago_banco.readOnly=false;
		document.forma.pago_monto.readOnly=false;
	}
}
/*======================================*/
function crear_select (nombre, cantidad, descripcion)
{
	var campo;

	arr_desc = descripcion.split("-");
	if (arr_desc[2].toUpperCase()=="CRISTALES" || arr_desc[2].toUpperCase()=="LUNAS" || arr_desc[2].toUpperCase()=="LENTES")
		campo = "<SELECT NAME=cant_"+nombre+" onchange=\"calcular_monto('"+nombre+"');var desc_a = eval ('document.forma.desc_"+nombre+"');desc_a.value = '0';actualizar_totales();\">";
	else
		campo = "<SELECT NAME=cant_"+nombre+" onchange=\"calcular_monto('"+nombre+"');var desc_a = eval ('document.forma.desc_"+nombre+"');desc_a.value = '0';actualizar_totales();\">";

	for (pos_mc=0; pos_mc<cantidad ; pos_mc++)
		campo += "<option value=\""+(pos_mc+1)+"\">"+(pos_mc+1)+"</option>";

	campo += "</SELECT>";
	return campo;
}
/*======================================*/
function calcular_descuento_venta (campo, id)
{
	if (trim(campo.value)=="")
		campo.value = 0
	else
		campo.value = parseFloat(campo.value)

	if (campo.value=="0" || trim(campo.value)=="")
	{
		calcular_monto (id);
		return false;
	}
	calcular_monto (id);
	var subtotal = 	document.getElementById("subtotal_"+id).innerHTML;
	subtotal = parseFloat(limpiar_numero(subtotal));

	var round_all = document.forma.round_all.value;
	var_subtotal_x = subtotal-((parseFloat(subtotal) * parseInt(campo.value))/100);
	//var_subtotal_x = round_field (var_subtotal_x, round_all);
	document.getElementById("subtotal_"+id).innerHTML = formatCurrency( var_subtotal_x );
}
/*======================================*/
function generar_venta (listo)
{
	if (document.getElementById('tabla_venta').rows.length==1)
		alert('Para generar la venta debe de agregar por lo menos un producto');
	else if (parseFloat(limpiar_numero(document.forma.total_div.value))==0)
		alert('NO PUEDE GENERAR VENTAS CON TOTAL A PAGAR IGUAL A CERO');
	else if (parseFloat(limpiar_numero(document.forma.total_div.value))<0)
		alert('NO PUEDE GENERAR VENTAS CON SALDOS NEGATIVOS');
	else if (document.forma.cedu.value=="" || document.forma.nomb.value=="" || document.forma.apel.value=="" || document.forma.tele.value=="" || document.forma.dire.value=="" )
		alert('Ingrese todos los datos personales');
	else if ( listo==1 && (document.forma.pago_monto[0].value=="" && document.forma.pago_monto[1].value=="" && document.forma.pago_monto[2].value=="" && document.forma.pago_monto[3].value=="") )
		alert('Debe Ingresar por lo menos un pago para poder continuar');
	else if ( listo==1 && ( (document.forma.pago_monto[0].value!="" && document.forma.pago_forma[0].value=="") || (document.forma.pago_monto[1].value!="" && document.forma.pago_forma[1].value=="") || (document.forma.pago_monto[2].value!="" && document.forma.pago_forma[2].value=="") || (document.forma.pago_monto[3].value!="" && document.forma.pago_forma[3].value=="") ) )
		alert('Al Ingresar el pago debe por lo menos ingresar el tipo de pago');
	else if ( listo==1 && ( (document.forma.pago_forma[0].value!="E" && document.forma.pago_forma[0].value!="NC" && document.forma.pago_forma[0].value!="" && document.forma.pago_banco[0].value=="") || (document.forma.pago_forma[1].value!="E" && document.forma.pago_forma[0].value!="NC" && document.forma.pago_forma[1].value!="" && document.forma.pago_banco[1].value=="") || (document.forma.pago_forma[2].value!="E" && document.forma.pago_forma[0].value!="NC" && document.forma.pago_forma[2].value!="" && document.forma.pago_banco[2].value=="")  || (document.forma.pago_forma[3].value!="E" && document.forma.pago_forma[0].value!="NC" && document.forma.pago_forma[3].value!="" && document.forma.pago_banco[3].value=="")) )
		alert('Debe seleccionar el Banco/Punto de Venta para los tipos de pagos :(Cheque, Deposito, Tarjeta de Debito, Tarjeta de Credito)');
	else if (document.forma.java_pais.value=="peru" && parseFloat(limpiar_numero(document.forma.total_div.value))>700 && document.forma.cedu.value.substring(0,1).toLowerCase()=='v')
		alert('Para ventas mayores a 700 soles, debe seleccionar un tipo de documento de identidad diferente a VARIOS');
	else if (document.forma.java_pais.value=="peru" && document.forma.cedu.value.length<4)
		alert('El documento de identidad debe tener por lo menos 3 numeros');
	else
	{
		var id_prod_conc = "", cant_conc = "", valo_tota = "", porc_desc = "", desc_prod = "", prod_con_iva = "";
		for (i=1; i!=document.getElementById('tabla_venta').rows.length; i++ )
		{
			nomb_fila = document.getElementById('tabla_venta').rows[i].id;
			nomb_fila = nomb_fila.split("_");

			if (id_prod_conc=="")
			{
				id_prod_conc = nomb_fila[1];
				cant_conc = eval('document.forma.cant_'+id_prod_conc+'.value');
				valo_tota = limpiar_numero(document.getElementById("subtotal_"+id_prod_conc).innerHTML);
				porc_desc = eval('document.forma.desc_'+id_prod_conc+'.value');
				desc_prod = document.getElementById("producto_"+id_prod_conc).innerHTML;
				prod_con_iva = document.getElementById("iva_"+id_prod_conc).innerHTML;
			}
			else
			{			
				id_prod_conc = id_prod_conc + ',' + nomb_fila[1];
				cant_conc = cant_conc + ',' +  eval('document.forma.cant_'+nomb_fila[1]+'.value');
				valo_tota = valo_tota + ',' +  limpiar_numero(document.getElementById("subtotal_"+nomb_fila[1]).innerHTML);
				porc_desc = porc_desc + ',' +  eval('document.forma.desc_'+nomb_fila[1]+'.value');
				desc_prod = desc_prod + ',' + document.getElementById("producto_"+nomb_fila[1]).innerHTML;
				prod_con_iva = prod_con_iva + ',' + document.getElementById("iva_"+nomb_fila[1]).innerHTML
			}
			if (document.getElementById('tabla_venta').rows.length=="2" && limpiar_numero(porc_desc)>0 && limpiar_numero(document.forma.descuento_global.value)>0)
			{
				alert('No puede dar descuento individual y global con un solo producto')
				return false;
			}
		}

		document.forma.id_prod.value = id_prod_conc;
		document.forma.cant_vend.value = cant_conc;
		document.forma.valo_tota.value = valo_tota;
		document.forma.porc_desc.value = porc_desc;
		document.forma.desc_prod.value = desc_prod;
		document.forma.prod_con_iva.value = prod_con_iva;

		document.forma.iva_1.value = limpiar_numero(document.getElementById("iva_div").innerHTML);
		document.forma.iva_2.value = limpiar_numero(document.getElementById("iva_div_2").innerHTML);
		document.forma.iva_3.value = limpiar_numero(document.getElementById("iva_div_3").innerHTML);
		document.forma.iva_4.value = limpiar_numero(document.getElementById("iva_div_4").innerHTML);

		if (listo==1)
		{	
			monto_adeudado = parseFloat(limpiar_numero(document.getElementById("total_deuda").innerHTML.replace("Total Adeudado = ","")))
			//monto_adeudado = parseFloat(document.getElementById("total_deuda_mont").value);
			if ( monto_adeudado<0 )
			{
				alert('NO puede facturar, ha ingresado un monto mayor al de la factura. Monto sobrante='+monto_adeudado)
				return false
			}
			else{
				document.forma.pago_monto[0].value = limpiar_numero(document.forma.pago_monto[0].value);
				document.forma.pago_monto[1].value = limpiar_numero(document.forma.pago_monto[1].value);
				document.forma.pago_monto[2].value = limpiar_numero(document.forma.pago_monto[2].value);
				document.forma.pago_monto[3].value = limpiar_numero(document.forma.pago_monto[3].value);
			}
		}
		else
			document.forma.pago_monto[0].value = 0;

		document.forma.subtotal_factura.value = limpiar_numero(document.getElementById("subtotal_div").innerHTML);
		//document.forma.iva_factura.value = limpiar_numero(document.getElementById("iva_div").innerHTML);
		document.forma.total_factura.value = limpiar_numero(document.forma.total_div.value);

		document.forma.nomb.value = encodeURI(document.forma.nomb.value);
		document.forma.apel.value = encodeURI(document.forma.apel.value);

		document.forma.listo.value=listo;
		add_wait_button (document.getElementById("boton_guardar"));
		concatenar_valores_forma_pago();

		abrir_popup('about:blank','venta',600,800);
		document.forma.target = 'venta';
		document.forma.submit();

		document.location = 'venta.asp';
	}
}
/*======================================*/
function concatenar_valores_forma_pago ()
{
	for (posObse = 0; posObse < 4; posObse++) {
		posObseDiv = posObse + 1;
		if($('#cuotas_cl' + posObseDiv).is(":visible")){
			document.forma.pago_observacion[posObse].value = "Opera.:" + document.forma.pago_observacion[posObse].value + ' - Cuota:' + $('#cuotas_cl' + posObseDiv).val() + ' - Autor.:' + $('#autorizacion_cl' + posObseDiv).val();
		}
	}
}
/*======================================*/
function calcular_iva (campo)
{
	if (document.forma.iva_calculado.value=="0" && document.forma.comp_iva[0].checked==true)
	{
		document.getElementById("div_iva_calculado").innerHTML = "<font color=red size=1>Iva Calculado al Monto = "+campo.value+"</font>";
		campo.value = formatCurrency(limpiar_numero(campo.value) + ((limpiar_numero(campo.value) * document.forma.iva.value/100)));
		document.forma.iva_calculado.value = 1;
	}
}
/*======================================*/
function calcular_edad(fecha){
	if (fecha=='')
		return 0;

	arr_fecha = fecha.split('/');

	var hoy = new Date();
	var cumpleanos = new Date(arr_fecha[2] + '-' + arr_fecha[1] + '-' + arr_fecha[0]);
	var edad = hoy.getFullYear() - cumpleanos.getFullYear();
	var m = hoy.getMonth() - cumpleanos.getMonth();

	if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
			edad--;
	}

	return edad;
} 
/*======================================*/
function guardar_historia ()
{
	telefono_requerido=true
	email_requerido = document.getElementById("mail_requerido").innerHTML;

	id_lice=document.forma_historia.id_lice.value

	if (document.forma_historia.nomb.value=='')
	{
		alert('Debe de Ingresar el Nombre del Paciente');
		document.forma_historia.nomb.focus();
	}
	else if (document.forma_historia.apel.value=='')
	{
		alert('Debe de Ingresar el Apellido del Paciente');
		document.forma_historia.apel.focus();
	}
	else if (document.forma_historia.pais_naci.value=='')
	{
		alert('Debe de Ingresar el Pais de Nacimiento del Paciente');
		document.forma_historia.pais_naci.focus();
	}
	else if (document.forma_historia.tele_habi.value=='' && telefono_requerido)
	{
		alert('El Telefono Celular Es Obligatorio para el envio de SMS');
		document.forma_historia.tele_habi.focus();
	}
	else if (document.forma_historia.mail.value=='' && email_requerido == "true")
	{
		alert('El Email Es Obligatorio, por favor escribe un email Valido');
		document.forma_historia.mail.focus();
	}
	else if (document.forma_historia.sesion_pais=='' || document.forma_historia.sesion_pais=='venezuela') {
		if (document.forma_historia.tele_habi.value.length!=11 && telefono_requerido)
			alert('El telefono Celular debe contener 11 digitos solo numericos, y ser de la forma 04123991588')
		else if (document.forma_historia.tele_habi.value.substring (0,4)!='0414' && document.forma_historia.tele_habi.value.substring (0,4)!='0424' && document.forma_historia.tele_habi.value.substring (0,4)!='0416' && document.forma_historia.tele_habi.value.substring (0,4)!='0426' && document.forma_historia.tele_habi.value.substring (0,4)!='0412' && telefono_requerido)
			alert('El telefono Celular debe ser de operadores venezolanos, debe empezar por 0414, 0424, 0416, 0426, 0412, y ser de la forma 04123991588')
	}
	else if ( (document.forma_historia.tele_habi.value!='' || !telefono_requerido))
	{
		document.forma_historia.submit();
		solo_mostrar_ocultar ("tbl_btns",'none');
		msn_mouse ("<br>Guardando, Espere un Momento<br>&nbsp;");
	}
}
/*======================================*/
function msn_mouse (msn){
	document.body['onmousemove']=new Function('mensaje_dinamico.style.visibility="visible";mensaje_dinamico.style.display="inline";document.getElementById("mensaje_dinamico").innerHTML = "'+msn+'";var x = window.event.x+10+document.body.scrollLeft;var y = window.event.y+document.body.scrollTop;document.getElementById("mensaje_dinamico").style.left = x + "px";document.getElementById("mensaje_dinamico").style.top = y + "px";');
}
/*======================================*/
function eliminar_producto (id)
{
	if (confirm('Esta seguro de Eliminar por completo el Producto'))
	{
		if (confirm('Se Recomienda no borrar productos de la tabla directamente, use la opcion "Sacar Producto del Invetario" que se encuentra en el menu principal de Acceso.\nESTA SEGURO DE ELIMINAR POR COMPLETO EL PRODUCTO?'))
			document.location = '../includes/acciones.asp?hidd_opci=eliminar_producto_completo'+'&id_prod='+id;
	}
}
/*======================================*/
function generar_presupuesto ()
{
	abrir_popup ("about:blank", 'print_presu', 600, 800)
	document.forma_presupuesto.producto_presupuesto.value = document.getElementById("tabla_venta").innerHTML + document.getElementById("tabla_totales").innerHTML;
	document.forma.action = "imprimir_presupuesto.asp";
	document.forma.target = "print_presu";
	document.forma.submit();	
}
/*======================================*/
function deshabilitar_campo_forma (forma)
{
	boton_guardar.style.display='none';
	boton_modificar.style.display='inline';
	formulario = eval("document.forms."+forma);
	for (i = 0; i!=formulario.length ; i++)
	{
/*alert(formulario[i].name)
		if (formulario[i].type!="hidden")
			formulario[i].readOnly=true
		if (formulario[i].type=="select-one"){
			formulario[i].disabled=true
		}*/
	}
}
/*======================================*/
function calcular_pago_restante ()
{

	//actualiza totales segun otras monedas
	calcular_pago_otra_moneda('1', document.getElementById('pago_mone1'));
	calcular_pago_otra_moneda('2', document.getElementById('pago_mone2'));
	calcular_pago_otra_moneda('3', document.getElementById('pago_mone3'));
	calcular_pago_otra_moneda('4', document.getElementById('pago_mone4'));

	var total_pagado = 0, total_factura = 0;
	if (document.forma.pago_monto[0].value!="") {
		if (document.getElementById('pago_mone1').selectedIndex > 0)
			total_pagado = total_pagado + limpiar_numero (document.forma.mont_mone_loca_1.value);
		else
			total_pagado = total_pagado + limpiar_numero (document.forma.pago_monto[0].value);
	}
	if (document.forma.pago_monto[1].value!="") {
		if (document.getElementById('pago_mone2').selectedIndex > 0)
			total_pagado = total_pagado + limpiar_numero (document.forma.mont_mone_loca_2.value);
		else
			total_pagado = total_pagado + limpiar_numero (document.forma.pago_monto[1].value);
	}
	if (document.forma.pago_monto[2].value!="") {
		if (document.getElementById('pago_mone3').selectedIndex > 0)
			total_pagado = total_pagado + limpiar_numero (document.forma.mont_mone_loca_3.value);
		else
			total_pagado = total_pagado + limpiar_numero (document.forma.pago_monto[2].value);
	}
	if (document.forma.pago_monto[3].value!="") {
		if (document.getElementById('pago_mone4').selectedIndex > 0)
			total_pagado = total_pagado + limpiar_numero (document.forma.mont_mone_loca_4.value);
		else
			total_pagado = total_pagado + limpiar_numero (document.forma.pago_monto[3].value);
	}

	total_factura = limpiar_numero (document.forma.total_div.value);

	document.getElementById("total_cancelar").innerHTML = 'Total Pagado = '+formatCurrency (total_pagado);
	document.getElementById("total_deuda").innerHTML = 'Total Adeudado = '+formatCurrency (total_factura-total_pagado);
}
/*======================================*/
function enviar_caja (){
	var cobrar = 'Comprador : '+document.forma.cedu.value+'   '+document.getElementById("total_cancelar").innerHTML;
	iniciar ('opci=insertar_aplicacion_venta&valor='+cobrar,'../includes/ejecutar.asp');
}
/*======================================*/
function buscar_ventas_espera (){
	iniciar ('opci=leer_aplicacion_venta','../includes/ejecutar.asp');
}
/*======================================*/
function cambiar_estatus_orden (boton){
	if (document.forma2.esta.value=="")
		alert('Debe seleccionar un nuevo estatus');
	else if (document.forma2.obse.value=="")
	{
		if (confirm ('No ha ingresado ninguna observacion, desea ingresar el estatus de todas manera?'))
			document.forma2.submit();
			boton.disabled="true";
	}
	else{
		document.forma2.submit();boton.disabled=true;}
}
/*======================================*/
function aumentar_letra (div){
	div.style.color='blue';
}
/*======================================*/
function agregar_fila_monto ()
{


}
/*======================================*/
function anexar_pago (boton,monto_faltante)
{
	// FIX 20 8 2020 - Delete parameter on function
	monto_faltante = parseFloat(limpiar_numero(document.getElementById("label_total_deuda").innerHTML))
	if (monto_faltante < 0) {
		alert('Esta orden tiene un error, ha recibido posiblemente pagos demas. Favor indique este codigo al administrador para solucionar el error. CODIGO: PAG-EXE1');
		return false;
	}

	if (document.forma.mont_mone_loca.value !== '') {
		total_pagado = parseFloat(limpiar_numero(document.forma.mont_mone_loca.value));
	} else {
		total_pagado = parseFloat(limpiar_numero(document.forma.pago_monto.value));
	}

	if (total_pagado == 0) {
		alert('No estan permitidos pagos en cero');
		return false;
	}

	if (parseFloat(total_pagado) > parseFloat(monto_faltante))
	{
		alert('Ha ingresado un monto mayor al de la venta. El total sobrante es de : ' + formatCurrency(vuelto))
		document.forma.pago_monto.value = formatCurrency(monto_faltante.replace(",","."))
		return false;
	}
	if (document.forma.pago_forma.value=='NC' &&document.forma.pago_monto.value!='' && document.forma.pago_referencia.value!=''){
		boton.disabled=true;
		add_wait_button(document.getElementById('td_pay'));
		document.forma.submit();
		return true;
	}
	else if (document.forma.pago_forma.value=='NC')
		alert('Para las notas de credito debe rellenar por lo menos el campo de monto.')
	if (document.forma.pago_forma.value!='E')
	{
		if (verificar_formulario('forma')){
			boton.disabled=true;
			add_wait_button(document.getElementById('td_pay'));
			document.forma.submit();
		}
	}
	else if (document.forma.pago_forma.value=='E'){
		boton.disabled=true;
		add_wait_button(document.getElementById('td_pay'));
		document.forma.submit();
	}
}
/*======================================*/
function eliminar_recibo (id_fact)
{
	if (confirm('Esta seguro que desea eliminar por completo este recibo de pago?'))
		document.location = '../includes/acciones.asp?hidd_opci=eliminar_recibo&id_fact='+id_fact;
	return true;
}
/*======================================*/
function tamano(mas) {
var signo = (mas)? 1 : -1; /* Para sumar o restar el porcentaje*/
/* Obtenemos el objeto que contiene el texto*/
var obj=document.getElementById("contenido");
/* Obtenemos el tamano de letra y lo modificamos*/
var fontsize = obj.style.fontSize;
fontsize = parseInt(fontsize.replace(/%/g, ''));
fontsize += signo*10;
if (fontsize > 0 && fontsize < 0) {
obj.style.fontSize = fontsize+"%";
}
}
/*======================================*/
function agregar_mas_campo_busqueda()
{
	tabla_bus = eval('document.getElementById("tabla_parametro")')
	id_fila_nuevo = (tabla_bus.rows.length) + 1;

	fila_nueva = crear_fila ('tabla_parametro', 'fila_marca_'+id_fila_nuevo);

	crear_columnas (fila_nueva, 0, '<div class=titulo_contenido>Marca</div>');
	crear_columnas (fila_nueva, 1, '<div align=left><input type="text" size="30" AUTOCOMPLETE=OFF maxLength="40" name="marca" id="marca_'+id_fila_nuevo+'" onfocus="javascript:actb(document.getElementById(\'marca_'+id_fila_nuevo+'\'),customarray_marca);"></div>');
}
/*======================================*/
/*== crea filas en la tabla especificada*/
/*======================================*/
function crear_fila (ubic_tabla, id){
	var tabla = eval (ubic_tabla);
	var cant_row = tabla.rows.length;
	var fila=tabla.insertRow(cant_row);
	fila.id ="fila_"+id;
	fila.setAttribute("class","mt-5");
	return fila;
}
/*======================================*/
/*== crea columna con objetos en las filas enviadas*/
/*======================================*/
function crear_columnas (fila, cantidad_fila, objetos){
	c1=fila.insertCell(cantidad_fila);
 	c1.innerHTML = objetos;
	c1.setAttribute("class","contenido_borde");
	return c1;
}
/*======================================*/
function validar_maximo_descuento (campo,id)
{
	var maximo_permitido = document.forma.descuento.value;
	if (campo.value==0)
		campo.value='0'

	if (limpiar_numero(campo.value)>parseInt(maximo_permitido))
	{
		if (document.forma.login_tipo.value!="1" && document.forma.login_tipo.value!="5")	/*administrador o gerente*/
		{
			campo.value='';
			calcular_descuento_venta (campo,id)
			actualizar_totales();
			alert('Usted no esta autorizado para dar un descuento mayor a '+maximo_permitido+'%');
			campo.focus();
		}
		else
			alert('Esta superando el descuento maximo permitido por producto ('+maximo_permitido+'%). Debido a que tiene una Sesion ADMINISTRADOR/GERENTE esto sera permitido.');
	}
}
/*======================================*/
function anular_factura (id_fact)
{
	var motivo = "";
	try
	{
		motivo = document.getElementById("motivo").value;
	}
	catch (error)
	{ }

	if (document.getElementById("nume_fact_impr")!=null)
	{
		if (document.getElementById("nume_fact_impr").value=="")
		{
			alert('Debe completar el numero de factura que aparece en la factura impresa');
			document.getElementById("nume_fact_impr").focus();
			return false;
		}
		variables_extras_enviar = "&nume_fact_impr="+document.getElementById("nume_fact_impr").value;
	}
	else
		variables_extras_enviar = "";

	if (confirm('Esta Seguro de Eliminar esta factura?'))
	{
		if (confirm('EL PROCESO ES IRREVERSIBLE, ESTA SEGURO?'))
		{
			add_wait_button(document.getElementById("botones"));
			document.location = "../includes/acciones.asp?hidd_opci=anular_factura&id_fact="+id_fact+variables_extras_enviar+'&motivo='+motivo;
		}
	}
}
/*======================================*/
function marcar_radio(radio, valor)
{
	valor = trim(valor);
	if (valor=='True') valor = 1
	if (valor=='False') valor = 0

	for (pos=0; pos<radio.length ; pos++)
	{
		if (trim(radio[pos].value)==valor)
		{
			radio[pos].checked="true";
			break;
			return true;
		}
	}
}
/*======================================*/
function ingresar_conteo (campo_input, nomb_text)
{
	var key;
	key = getkey(campo_input);

	if (key==13 && trim(campo_input.value)!="")
	{
		var campo = eval ("document."+nomb_text);
		if (campo.value=="")
			campo.value = campo_input.value;
		else
			campo.value = campo.value + "," + campo_input.value;

		campo_input.value = "";
	}

	campo.value = "";
	campo.focus();
}
/*======================================*/
function validar_tecla (campo)
{
	tecla = getkey(campo);
	if (tecla==27)
		ocultar_msn();

	document.forma.refe.focus();

	return true;
}
/*======================================*/
function calcular_iva_referencial ()
{
	document.forma.monto_con_iva.value = formatCurrency( limpiar_numero(document.forma.mont_vent.value) + (limpiar_numero(document.forma.mont_vent.value) * (document.forma.iva.value/100)) );
}
/*======================================*/
function calcular_factor_iva ()
{
	precio_iva = limpiar_numero(document.forma.monto_con_iva.value);
	iva = document.forma.iva.value;

	if (iva=="") {
		iva = document.forma.iva_bck.value;
	}

	document.forma.mont_vent.value = formatCurrency ( precio_iva/(1+(iva/100)) );

	document.getElementById("div_iva_modif").innerHTML = iva;
	document.getElementById("div_iva_modif2").innerHTML = document.getElementById("div_iva_modif").innerHTML;
	
	calcular_factor_viceversa(document.forma.mont_comp,document.forma.mont_vent,document.forma.fact_gana);
}
/*======================================*/
function FormatoCedulaFer (campo)
{
	valor = campo.value.toUpperCase();
	letra_primera = false;
	key = getkey(campo);
	keychar = String.fromCharCode(key);
	keychar = trim(keychar.toUpperCase());

	if ( key==32 )
			return false;

	if (valor.length==0)
	{
		if (keychar=="E" || keychar=="J" || keychar=="V" || keychar=="P" || keychar=="G")
			letra_primera = true;
	}
	else if (valor.length>10)
		return false;
	else
	{
		primera_letra = campo.value.substring(0,1);
		primera_letra = primera_letra.toUpperCase();

		if (primera_letra=="E" || primera_letra=="J" || primera_letra=="V" || primera_letra=="P" || primera_letra=="G")
			letra_primera = true;
	}

	if (!letra_primera)
		return false;

	if (valor.length==0 && letra_primera)
		return true;
	else if (valor.length==0 && !letra_primera)
		return false;
	else if (valor.length>0 && letra_primera)
	{
		var caracteresPermitidos = '0123456789';

		/* chequea si el caracter es un caracter permitido*/
		if (caracteresPermitidos.indexOf(keychar) != -1)
			return true;

		/* control keys*/
			if ( key==null || key==0 || key==8 || key==9 || key==13 || key==27 )
			return true;

		 else return false;
		return false;
	}
}
/*======================================*/
function previsualizar_faltas ()
{
	if (document.forma_crear.ingreso.value==""){
		alert('Para Previsualizar debe por lo menos ingresar un producto');
		document.forma_crear.codigo.focus();
	}
	else{
		document.forma_crear.enviar.value=1;
		document.forma_crear.submit();
	}
}
/*======================================*/
function guardar_inventario()
{
	if (confirm('Esta Seguro de Guardar este inventario?. La accion no es reversible.'))
	{
		faltante = '<%=cont_faltante%>';
		sobrante = '<%=cont_sobrante%>';
		if ( (faltante!=0 || sobrante!=0) && document.forma_crear.explicacion.value=="" )
		{
			alert('Debido a que el Inventario no ha sido cuadrado debe especificar su causa.');
			solo_mostrar_ocultar ('explicacion', 'inline');
			document.forma_crear.explicacion.focus();
		}
		else{
		document.forma_crear.action="../includes/acciones.asp?hidd_opci=ingresar_inventario";
		document.forma_crear.submit();
		}
	}
}
/*======================================*/
var fila_cierre_caja = 0;
function cierre_agregar (nombre_tabla, nombre_campo)
{
	fila_new = crear_fila ('document.getElementById("'+nombre_tabla+'")', fila_cierre_caja);
	let contador = parseInt(document.getElementById('contador_campos').value) + 1;
	document.getElementById('contador_campos').value = contador;

	objeto_columna = "<input AUTOCOMPLETE=OFF class='fs-12 color-black' opt-id='"+contador+"'' type='text' name='tota_"+nombre_campo+"' size='18' alt='sumar' maxlength='18' onKeydown=\"return(formato_moneda(this,'.',',',event,this.maxLength));\"  onkeyup='calcular_cierre_caja ()'>";
	objeto_columna += " <select class='fs-12 color-black' id='mone"+contador+"' name='moneda_"+nombre_campo+"'  onchange='calcular_cierre_caja();'>" + document.getElementById("combo_moneda_html").value + "</select>";
	columna_new = crear_columnas (fila_new, 0, objeto_columna);
	columna_new.setAttribute("width","33%");
	columna_new.setAttribute("align","left");

	objeto_columna = "<input AUTOCOMPLETE=OFF class='fs-12 color-black' type='text' name='banco_"+nombre_campo+"' onfocus='javascript:actb(this,customarray_banco);'>";
	columna_new = crear_columnas (fila_new, 1, objeto_columna);
	columna_new.setAttribute("width","33%");
	columna_new.setAttribute("align","left");

	objeto_columna = "<input value='Eliminar Fila' type='image' class='no-border' data-toggle='tooltip' data-placement='top' title='Eliminar fila' onclick=\"remover_fila_gene('"+nombre_tabla+"','fila_"+fila_cierre_caja+"'); calcular_cierre_caja ();\" src='../images/delete_peq.gif'>";
	columna_new = crear_columnas (fila_new, 2, objeto_columna);
	columna_new.setAttribute("width","33%");
	columna_new.setAttribute("align","left");

	fila_cierre_caja ++;
}
/*======================================*/
function remover_fila_gene (id_tabla, id_fila)
{
	tabla = document.getElementById(id_tabla);
	for (i=0; i!=tabla.rows.length; i++ )
	{
		if (tabla.rows[i].id == id_fila )
		{
			tabla.deleteRow(i);
			break;
		}
		if (i==50){alert('ERROR en tabla, maximo de filas superado'); break;}
	}
}
/*======================================*/
function calcular_cierre_caja ()
{
	formulario = eval("document.forms.forma");
	sumatoria = 0;
	for (i = 0; i!=formulario.length ; i++)
	{
		if (formulario[i].getAttribute("alt")=="sumar" && formulario[i].value!="") {
			let id_select_moneda = formulario[i].getAttribute("opt-id");
			if (!id_select_moneda || document.getElementById("mone" + id_select_moneda).selectedIndex === 0) {
				sumatoria += limpiar_numero(formulario[i].value);
			} else {
				let combo_moneda = document.getElementById("mone" + id_select_moneda);
				let tasa_cambio = parseFloat(combo_moneda.options[combo_moneda.selectedIndex].getAttribute("opt-tasa"));
				sumatoria += parseFloat(limpiar_numero(formulario[i].value)) * tasa_cambio;
			}
		}
	}
	document.getElementById("tota_decl").innerHTML = formatCurrency(sumatoria);
	total_ventas = document.forma.faltante.value;
	faltante = parseFloat(total_ventas) - parseFloat(sumatoria);
	document.getElementById("tota_falt").innerHTML = formatCurrency(faltante);
	document.forma.declarado.value = sumatoria;
}
/*======================================*/
function generar_cierre ()
{
	if (parseInt(document.forma.id_empl.value)==parseInt(document.forma.id_empl2.value))
		if (!confirm('Va a Cerrar caja donde la misma persona que Entrega es la que Recibe, esta seguro de esto?'))
			return false;

	if (limpiar_numero(document.getElementById("tota_falt").innerHTML)!=0 && document.forma.obse.value=="")
		alert('En caso que el cierre de caja no cuadre, es obligatorio el llenar el campo de observacion.');
	else if (confirm('Esta seguro de realizar este cierre?'))
	{
		var deposito_lleno = false, cheque_lleno = false, debito_lleno = false, credito_lleno = false, notacredito_lleno = false
		formulario = eval("document.forms.forma");
		for (i = 0; i!=formulario.length ; i++)
		{
			if (formulario[i].name=="tota_deposito" && formulario[i].value!='')
				deposito_lleno = true
			if (formulario[i].name=="tota_cheque" && formulario[i].value!='')
				cheque_lleno = true
			if (formulario[i].name=="tota_debito" && formulario[i].value!='')
				debito_lleno = true
			if (formulario[i].name=="tota_credito" && formulario[i].value!='')
				credito_lleno = true
			if (formulario[i].name=="tota_notacredito" && formulario[i].value!='')
				notacredito_lleno = true

			if (deposito_lleno && formulario[i].name=="banco_deposito" && formulario[i].value==""){
				alert('Para continuar debe ingresar el banco de todos los depositos declarados')
				formulario[i].focus();
				return false;
			}
			if (cheque_lleno && formulario[i].name=="banco_cheque" && formulario[i].value==""){
				alert('Para continuar debe ingresar el banco de todos los cheque declarados')
				formulario[i].focus();
				return false;
			}
			if (debito_lleno && formulario[i].name=="banco_debito" && formulario[i].value==""){
				alert('Para continuar debe ingresar el banco de todas las tarjetas de debito declaradas')
				formulario[i].focus();
				return false;
			}
			if (credito_lleno && formulario[i].name=="banco_credito" && formulario[i].value==""){
				alert('Para continuar debe ingresar el banco de todas las tarjetas de credito declaradas')
				formulario[i].focus();
				return false;
			}
			if (notacredito_lleno && formulario[i].name=="banco_notacredito" && formulario[i].value==""){
				alert('Para continuar debe ingresar el numero de factura que genero la nota de credito')
				formulario[i].focus();
				return false;
			}
		}
		if (document.forma.gasto.value!="" && document.forma.obse_gasto.value==""){
			alert('Debe ingresar el motivo del gasto declarado')
			document.forma.obse_gasto.focus();
			return false;
		}

		formulario = eval("document.forms.forma");
		for (i = 0; i!=formulario.length ; i++)
		{
			if (formulario[i].getAttribute("alt")=="sumar" && formulario[i].value!="")
				formulario[i].value = limpiar_numero(formulario[i].value);
		}
		document.forma.boton_cierre.disabled = true;
		document.forma.boton_cierre.value = "ESPERE UN MOMENTO, SE ESTA GENERANDO EL CIERRE.";
		document.forma.submit();
	}
}
/*======================================*/
function formato_moneda_eliminar_mascara (campo)
{
	var aux = "";
	string = campo.value;

	for (pos_eli_mas=0; pos_eli_mas!=string.length; pos_eli_mas++)
	{
		if (string.charAt(pos_eli_mas)!=".")
			aux += string.charAt(pos_eli_mas);

		if (pos_eli_mas==200)
		{
			alert('problema');
			break;
			return false;
		}
	}
	string_final = aux.replace(",",".");
	campo.value = formatCurrency(string_final);
}
/*======================================*/
function formato_moneda (fld, milSep, decSep, e, maximo_entero)
	{
		var campo;
		var sep = 0;
		var key = '';
		var i = j = 0;
		var len = len2 = 0;
		var strCheck = '0123456789';
		var aux = aux2 = '';
		var whichCode = (window.Event) ? e.which : e.keyCode;
		if (whichCode == 13) return true;  /* Enter*/

		if (whichCode == 9)   /* tabulacion*/
			tabulacion (fld.form, fld);

		if (whichCode == 8)   /* Borrar*/
		{
			if (fld.value=='0,0' || fld.value=='0,00' || fld.value=='')
			{
				fld.value = '';
				return true;
			}

			if (fld.value.substr(fld.value.length-2,fld.value.length)==',0')
				fld.value = fld.value.substr(0,fld.value.length-3);
			else
				fld.value = fld.value.substr(0,fld.value.length-1);

			formato_moneda_eliminar_mascara (fld);
			formatCurrency(fld.value);
			return true;
		}

		if (whichCode>=96 && whichCode<=105)	/*valido el teclado numerico*/
			key = whichCode - 96;
		else
			key = String.fromCharCode(whichCode);  /* Get key value from key code*/

		if (strCheck.indexOf(key) == -1) return false;  /* Not a valid key*/
		len = fld.value.length;

		if (fld.value.substr(fld.value.length-2,fld.value.length)==',0')
				fld.value = fld.value.substr(0,fld.value.length-1);

		var fer_valor="";
		fer_valor = fld.value;
		fer_valor = fer_valor.split(",");
		fer_valor = fer_valor[0].replace(".","");

		if (fer_valor.length>maximo_entero)
			return false;
		
		campo = fld.value;

		for(i = 0; i < len; i++)
			if ((fld.value.charAt(i) != '0') && (fld.value.charAt(i) != decSep)) break;
		aux = '';
		for(; i < len; i++)
			if (strCheck.indexOf(fld.value.charAt(i))!=-1) aux += fld.value.charAt(i);
		aux += key;
		len = aux.length;
		if (len == 0) fld.value = '';
		if (len == 1) fld.value = '0'+ decSep + '0' + aux;
		if (len == 2) fld.value = '0'+ decSep + aux;
		if (len > 2) {
			aux2 = '';
			for (j = 0, i = len - 3; i >= 0; i--) {
				if (j == 3) {
					aux2 += milSep;
					j = 0;
				}
			aux2 += aux.charAt(i);
			j++;
			}
			fld.value = '';
			len2 = aux2.length;
			for (i = len2 - 1; i >= 0; i--)
				fld.value += aux2.charAt(i);
			fld.value += decSep + aux.substr(len - 2, len);
		}
		return false;
	}
/*======================================*/
function tabulacion(form,field)
{
	var next=0, found=false;

	// Loop through each field in the form
	for (var i = 0; i < form.elements.length; i++) {

		if(field.name == form.elements[i].name)
		{
			next=i+1;
			found=true;
			break;
		}
	}

	while(found)
	{
		if( form.elements[next].disabled==false && form.elements[next].type!='hidden')
		{
			form.elements[next].focus();
			break;
		}
		else
		{
			if(next<form.elements.length-1)
				next=next+1;
			else
				break;
		}
	}
} 
/*======================================*/
function llenar_combo (nombre_forma, nombre_combo, valores, limpiar_combo, separador)
{

	formulario = eval("document.forms."+nombre_forma);
	for (i = 0; i!=formulario.length ; i++)
	{
		if (formulario[i].name==nombre_combo && formulario[i].type=="select-one")
		{
			var combo = formulario[i];
			var arr_valores = valores.split(separador);

			if (limpiar_combo)
				combo.length  = 0;

			tamanio_actual = combo.length;
			combo.length  += arr_valores.length;

			pos_arr = 0;
			for (pos=tamanio_actual; pos!= combo.length ; pos++)
			{
				combo.options[pos].value = arr_valores[pos_arr];
				combo.options[pos].text = arr_valores[pos_arr];
				pos_arr++;
			}
			combo.options[0].selected="true";
		}
	}	
	return true;
}
/*======================================*/
function buscar_datos_historia (id_hist, nombre_campo)
{
	var valor = 'opci=buscar_historia&id_hist='+id_hist+'&nomb_camp='+nombre_campo;
	if (id_hist!="" && nombre_campo!="")
		iniciar (valor, '../includes/ejecutar.asp');
}
/*======================================*/
function asignar_persona_orden (valor, id_pers)
{
	campo = eval ('opener.document.forma.'+document.getElementById("nomb_camp").value);
	campo.value = valor;
	opener.asignar_valor_combo ( eval("opener.document.forma."+document.getElementById("nomb_camp").value.replace("paci","tipo_cris")), "m" );
	opener.calcular_formula ( eval("opener.document.forma.tipo_cris_"+document.getElementById("nomb_camp").value.replace("paci_","")+".value") , document.getElementById("nomb_camp").value.replace("paci_","") );
	window.close();
}
/*======================================*/
var global_atajo
function mostrar_atajo(mostrar_atajo)
{
	global_atajo = mostrar_atajo
	eval("atajo"+mostrar_atajo+".style.visibility= 'visible'");
	eval("atajo"+mostrar_atajo+".style.display = 'inline'");
	eval("atajo"+mostrar_atajo+".style.left=document.body.scrollLeft+event.clientX");
	eval("atajo"+mostrar_atajo+".style.top=document.body.scrollTop+event.clientY-15");
}
/*======================================*/
function asignar_persona_orden_rapido (valor, id_pers, nomb_camp)
{
	campo = eval ('document.forma.'+nomb_camp);
	campo.value = valor;
	asignar_valor_combo ( eval("document.forma."+nomb_camp.replace("paci","tipo_cris")), "m" );
	calcular_formula ( eval("document.forma.tipo_cris_"+nomb_camp.replace("paci_","")+".value") , nomb_camp.replace("paci_","") );
	expandir_contraer('atajo'+global_atajo);
}
/*======================================*/
function ocultar_mostrar_ojos (valor, ojo)
{
	$('.oi_'+ojo).show();
	$('.od_'+ojo).show();

	if (valor=="d")
		$('.oi_'+ojo).hide();
	else if (valor=="i")
		$('.od_'+ojo).hide();
}
/*======================================*/
function calcular_formula (valor, ojo)
{
	if (valor=="m" || valor=="b" || valor=="i")
	{
		arr_paci = document.forms["forma"].elements["paci_"+ojo].value.split("-");
		buscar_datos_historia (trim(arr_paci[0]), 'paci_'+ojo );
		$('.div_esf_'+ojo).show();
		$('.div_cil_'+ojo).show();
		$('.div_eje_'+ojo).show();
		$('.div_add_'+ojo).show();
		$('.div_dnpc_'+ojo).show();
		$('.div_dnpl_'+ojo).show();
		$('.div_alt_'+ojo).show();
	}
	if (valor=="l")
	{
		arr_paci = document.forms["forma"].elements["paci_"+ojo].value.split("-");
		buscar_datos_historia (trim(arr_paci[0]), 'paci_'+ojo );
		$('.div_esf_'+ojo).show();
		$('.div_cil_'+ojo).show();
		$('.div_eje_'+ojo).show();
		$('.div_add_'+ojo).hide();
		$('.div_dnpc_'+ojo).show();
		$('.div_dnpl_'+ojo).show();
		$('.div_alt_'+ojo).hide();
	}
	else if (valor=="c")
	{
		if (document.forms["forma"].elements["form_esfe_od_"+ojo].value=="")
			document.forms["forma"].elements["form_esfe_od_"+ojo].value = 0
		if (document.forms["forma"].elements["form_esfe_oi_"+ojo].value=="")
			document.forms["forma"].elements["form_esfe_oi_"+ojo].value = 0
		if (document.forms["forma"].elements["form_add_od_"+ojo].value=="")
			document.forms["forma"].elements["form_add_od_"+ojo].value = 0
		if (document.forms["forma"].elements["form_add_oi_"+ojo].value=="")
			document.forms["forma"].elements["form_add_oi_"+ojo].value = 0

		if ( (!isNaN(parseFloat(document.forms["forma"].elements["form_esfe_od_"+ojo].value.replace("plano","0")))) && (!isNaN(parseFloat(document.forms["forma"].elements["form_add_od_"+ojo].value))) )
			document.forms["forma"].elements["form_esfe_od_"+ojo].value = parseFloat(document.forms["forma"].elements["form_add_od_"+ojo].value) + parseFloat(document.forms["forma"].elements["form_esfe_od_"+ojo].value.replace("plano","0"));
		if ( (!isNaN(parseFloat(document.forms["forma"].elements["form_esfe_oi_"+ojo].value.replace("plano","0")))) && (!isNaN(parseFloat(document.forms["forma"].elements["form_add_oi_"+ojo].value))) )
			document.forms["forma"].elements["form_esfe_oi_"+ojo].value = parseFloat(document.forms["forma"].elements["form_esfe_oi_"+ojo].value.replace("plano","0")) + parseFloat(document.forms["forma"].elements["form_add_oi_"+ojo].value);
		$('.div_esf_'+ojo).show();
		$('.div_cil_'+ojo).show();
		$('.div_eje_'+ojo).show();
		$('.div_add_'+ojo).hide();
		$('.div_dnpc_'+ojo).show();
		$('.div_dnpl_'+ojo).show();
		$('.div_alt_'+ojo).hide();
	}
}
/*======================================*/
function animacion_campo(obj2){
	obj = eval (obj2);
	color=["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
	for(t=0;t<color.length;t++){
		colorVar="#FF"+color[t]+""+color[t]+""+color[t]+""+color[t];
		setTimeout("obj.style.backgroundColor='"+colorVar+"'",t*150);
	}
	obj.style.backgroundColor='';
	obj.focus();
}
/*======================================*/
function deshabilitar_seguro_pagina ()
{
	try
	{
		document.getElementById('body_principal').onbeforeunload='';
	}
	catch (e)
	{
	}
}
/*======================================*/
var efec_tras_od = false, efec_tras_oi = false
function trasposicion(campo, ojo)
{
	esfera = eval("document.forma_historia.form_esfe_"+ojo);

	if (esfera.value.toUpperCase()=="PLANO" || esfera.value.toUpperCase()=="NEUTRO" || esfera.value.toUpperCase()=="PLANO." || esfera.value.toUpperCase()=="PL." || esfera.value.toUpperCase()=="PL")
		esfera.value = "0.00"

	if (campo.value!="" && esfera.value!="" && isNaN(esfera.value)==false)
	{
		if (parseFloat(campo.value)>0)
		{
			esfera.value = parseFloat(esfera.value) + parseFloat(campo.value);
			if( esfera.value.substring(0,1)!="-" && esfera.value.substring(0,1)!="+")
				esfera.value = "+"+esfera.value;
			campo.value = campo.value * (-1);
			eje = eval("document.forma_historia.form_eje_"+ojo);

			if(parseInt(limpiar_numero(eje.value))==90 || parseInt(limpiar_numero(eje.value))<90)
				eje.value = limpiar_numero(eje.value) + 90 + "°";
			else if(limpiar_numero(eje.value)>90)
				eje.value = limpiar_numero(eje.value) - 90 + "°";
			
			eval ('efec_tras_'+ojo+'=true');
		}
		else
			eval ('efec_tras_'+ojo+'=false');
	}
	else
		eval ('efec_tras_'+ojo+'=false');

}
/*======================================*/
function trasposicion2 (campo, ojo)
{
	activo = eval("efec_tras_"+ojo);
	if (activo)
	{
		eje = eval("document.forma_historia.form_eje_"+ojo);

		if(parseInt(limpiar_numero(eje.value))==90 || parseInt(limpiar_numero(eje.value))<90)
			eje.value = limpiar_numero(eje.value) + 90 + "°";
		else if(limpiar_numero(eje.value)>90)
			eje.value = limpiar_numero(eje.value) - 90 + "°";

		eval ('efec_tras_'+ojo+'=false');
	}
}
/*======================================*/
function validar_cedula (campo)
{
	if (campo.value!="")
	{
		if (campo.value.length<4){
			alert('No puede Ingresar un Documento identidad de menos de 3 Numeros')
			campo.value = '';
		}
		else{
			if (campo.value.substring(0,1).toLowerCase()!="g" &&campo.value.substring(0,1).toLowerCase()!="v" && campo.value.substring(0,1).toLowerCase()!="e" && campo.value.substring(0,1).toLowerCase()!="j"&& campo.value.substring(0,1).toLowerCase()!="p" || isNaN(campo.value.substring(1,campo.value.length))==true)
			{
				alert("Ha ingresado un formato de Documento identidad incorrecto");
				campo.focus();
				return false;
			}
			else
				return true;
		}
	}
}
/*======================================*/
function tranferir_masiva ()
{
	if (document.forma.tran_masi_lice.value=="" || document.forma.tran_masi_come.value=="")
		alert('Debe ingresar un comentario y seleccionar la sucursal a donde seran enviados todos los productos mostrados')
	else
		document.location = '../includes/acciones.asp?hidd_opci=transferir_masivo&tran_masi_lice='+document.forma.tran_masi_lice.value+'&tran_masi_come='+escape(document.forma.tran_masi_come.value)+'&sql='+escape(document.forma.sql.value)
}
/*======================================*/
function verificar_maximo_descuento(campo)
{
	if ( parseFloat(limpiar_numero(campo.value))>parseFloat(limpiar_numero(document.forma.descuento_cant.value)) )
	{
		if (document.forma.login_tipo.value!="1" && document.forma.login_tipo.value!="5")	/*administrador o gerente*/
		{
			alert('Ha superado el monto maximo ['+formatCurrency(document.forma.descuento_cant.value)+']')
			campo.focus();
			return false;
		}
		else
			alert('Esta superando el descuento GLOBAL maximo permitido por producto ('+formatCurrency(document.forma.descuento_cant.value)+'). Debido a que tiene una Sesion ADMINISTRADOR/GERENTE esto sera permitido.');
	}
	return true;
}
/*======================================*/
function rechazar_transferencia (url)
{
	document.forma.url_enviar.value = url
	document.forma.motivo_rechazo.value= ""
	rechazo_almacen.style.visibility= 'visible';
	rechazo_almacen.style.display = 'inline';
	rechazo_almacen.style.left=document.body.scrollLeft+event.clientX-300;
	rechazo_almacen.style.top=document.body.scrollTop+event.clientY-15;
}
/*======================================*/
function transferir_seleccionados ()
{
	formulario = eval("document.forms.forma");
	existe_marcado = false;
	id_marcado = "";
	for (i = 0; i!=formulario.length ; i++)
	{
		if (formulario[i].name.substring(0,5)=="tran_" && formulario[i].checked==true){
			existe_marcado = true;
			arr_nomb = formulario[i].name.split ("_");
			if (id_marcado=="")
				id_marcado = arr_nomb[1];
			else
				id_marcado += "," + arr_nomb[1];
		}
	}

	if (existe_marcado){
		expandir_contraer_jquery ($('.div_tran_masi'),'none', 0);
		expandir_contraer_jquery ($('.transferir_unidad'), 'show');
		document.forma.sql_trans_masi.value = id_marcado;
	}
	else
		alert('Para transferir por favor seleccione al menos un producto');
}
/*======================================*/
function tranferir_masiva_unidad ()
{
	if (document.forma.tran_masi_lice2.value=="" || document.forma.tran_masi_come2.value=="")
		alert('Debe ingresar un comentario y seleccionar la sucursal a donde seran enviados todos los productos mostrados');
	else{
		document.forma.action="../includes/acciones.asp?hidd_opci=transferir_masivo_unidad";
		document.forma.submit();
	}
}
/*======================================*/
function agregar_prod_obse (campo, nombre_obse)
{	
	obse = eval ("document.forma."+nombre_obse)
	if (campo.checked==true)
			obse.value += campo.value
	else{
		if (obse.value.indexOf(campo.value)!="-1")
			obse.value = obse.value.replace(campo.value,"")

	}
}
/*======================================*/
function trans_masi (boton)
{
	formulario = eval("document.forms.forma_masiva");
	existe_marcado = false
	id_marcado = ""
	for (i = 0; i!=formulario.length ; i++)
	{
		if (formulario[i].name.substring(0,10)=="acep_masi_" && formulario[i].checked==true){
			existe_marcado = true
			arr_nomb = formulario[i].name.split ("_")
			if (id_marcado=="")
				id_marcado = arr_nomb[2]
			else
				id_marcado += "," + arr_nomb[2]
		}
	}
	if (!existe_marcado)
		alert('Para hacer envios masivos debe seleccionar primero algun producto')
	else{
		document.forma_masiva.produ_marcadas.value = id_marcado
		boton.disabled=true;
		document.getElementById("botones_reci").innerHTML = "Espere un momento, recibiendo informacion"
		document.forma_masiva.submit();
	}
}
/*======================================*/
function marcar_almacen ()
{
	formulario = eval("document.forms.forma_masiva");
	existe_marcado = false
	id_marcado = ""
	if (formulario.length>50){
		total = 50;
		alert('Para evitar la SobreCarga del servidor es recomendable las transferencias muy grandes hacerlas por pedazos.\nFueron marcados 50 registros.')
	}
	else
		total = formulario.length;

	for (i = 0; i!=total ; i++)
	{
		if (formulario[i].type=="checkbox")
			formulario[i].checked =true
	}
}
/*======================================*/
function comp_mail(campo){	
    var b=/^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/
		if (((b.test(campo.value))==false) && campo.value!=""){
			alert('E-mail no valido. Introduzca uno valido.')
			campo.value = '';
			campo.focus();
		}
}
/*======================================*/
function enviar_sms (sele)
{
	try{
		if (sele.value=='3') {
			expandir_contraer_jquery('#sms', 'show')
			document.forma2.sms.checked=true
		} 
		else {
			expandir_contraer_jquery('#sms', 'hide')
			document.forma2.sms.checked=false
		}
	}catch (e)
	{
		document.body['onmousemove']=new Function('mensaje_dinamico.style.visibility="visible";mensaje_dinamico.style.display="inline";document.getElementById("mensaje_dinamico").innerHTML = "Tiene Deshabilitado el servicio de SMS<img src=../images/nuevo.gif><br>Escribenos por SUGERENCIAS para consultar mas acerca de este servicio de informacion automatica a los clientes<br>Este mensaje se ocultara en 10 Seg";var x = window.event.x+10+document.body.scrollLeft;var y = window.event.y+document.body.scrollTop;document.getElementById("mensaje_dinamico").style.left = x + "px";document.getElementById("mensaje_dinamico").style.top = y + "px";');
		setTimeout("ocultar_msn(); document.body['onmousemove']='';", 10000);
	}
}
/*======================================*/
function terminar_grafica (nomb, maxi, form)
{
	ele = eval ("document.forma."+nomb)
	for (i = 0; i!=ele.length ; i++)
	{
		tama_actu = ele[i].getAttribute("alt")
		ele[i].setAttribute( "width", (100*parseFloat(tama_actu)) / parseFloat(maxi) );
	}
}
/*======================================*/
function asignar_valor_conjunto (campo, nombre)
{
     thisSec = eval(nombre);

     if (thisSec != null){
          if (thisSec.length){
                    for (var i=0;i<thisSec.length;i++)
						thisSec[i].innerHTML = campo.value;
          }
          else
              thisSec.innerHTML = campo.value;
     }
}
/*======================================*/
function consulta_prod (boton){

	var procesar = false;

	java_marca = ""
	try{java_marca = document.forma.marca.value}catch(e){}
	try{java_marca = document.forma.marca[0].value}catch(e){}

	if (java_marca!='')
		procesar = true;

	formulario = eval("document.forms.forma");
	for (i = 0; i!=formulario.length ; i++)
	{
		if (formulario[i].getAttribute("alt")=="Obligatorio" && formulario[i].value!=''){
			procesar = true;
			break;
		}
	}

	if (procesar)
		document.forma.submit();
	else
		alert('Para consultar debe completar alguno de los campos marcados con asteriscos (*)')
}
/*======================================*/
function validar_monto_nc (campo, fila){
	if (document.forma.pago_forma[fila].value=="NC" && parseFloat(limpiar_numero(document.forma.pago_monto[fila].value))>parseFloat(document.forma.hidd_maximo_nc[fila].value) )	{
		alert('Ha excedido el monto maximo ('+formatCurrency(document.forma.hidd_maximo_nc[fila].value)+') de la Nota de Credito. Verifique el monto y vuelva a escribirlo')
		campo.value='';
		campo.focus();
	}
	if (document.forma.pago_forma[fila].value=="NC" && parseFloat(limpiar_numero(campo.value))==0){
		alert('Para Notas de Credito debe escribir montos superiores a CERO')
		campo.value='';
	}
	if (document.forma.pago_forma[fila].value=="NC" && document.forma.hidd_maximo_nc[fila].value==''){
		alert('Debe seleccionar primero una nota de credito')
		campo.value='';
	}
}
/*======================================*/
function validar_monto_nc2 (campo){
	if (document.forma.pago_forma.value=="NC" && parseFloat(limpiar_numero(document.forma.pago_monto.value))>parseFloat(document.forma.hidd_maximo_nc.value) )	{
		alert('Ha excedido el monto maximo ('+formatCurrency(document.forma.hidd_maximo_nc.value)+') de la Nota de Credito. Verifique el monto y vuelva a escribirlo')
		campo.value='';
		campo.focus();
	}
	if (document.forma.pago_forma.value=="NC" && parseFloat(limpiar_numero(campo.value))==0){
		alert('Para Notas de Credito debe escribir montos superiores a CERO')
		campo.value='';
	}
	if (document.forma.pago_forma.value=="NC" && document.forma.hidd_maximo_nc.value==''){
		alert('Debe seleccionar primero una nota de credito')
		campo.value='';
	}
}
/*======================================*/
function imprimir_pagina_optol (){
	try{solo_mostrar_ocultar('impresion_pagina','none');}catch(e){}
	try{solo_mostrar_ocultar('columna_recordatorio','none');}catch(e){}
	try{solo_mostrar_ocultar('topbar','none');}catch(e){}
	try{solo_mostrar_ocultar('mensaje_dinamico_aux','none');}catch(e){}
	try{solo_mostrar_ocultar('div_nombre_sesion','none');}catch(e){}
	try{solo_mostrar_ocultar('fin_tabl','none');}catch(e){}
	window.print();
	try{solo_mostrar_ocultar('impresion_pagina','inline');}catch(e){}
	try{solo_mostrar_ocultar('columna_recordatorio','inline');}catch(e){}
	try{solo_mostrar_ocultar('topbar','inline');}catch(e){}
	try{solo_mostrar_ocultar('mensaje_dinamico_aux','inline');}catch(e){}
	try{solo_mostrar_ocultar('div_nombre_sesion','inline');}catch(e){}
	try{solo_mostrar_ocultar('fin_tabl','inline');}catch(e){}
}
/*======================================*/
function click_cita (dia)
{
	try{
		if (document.forma.radio_seleccionado.value!="")
			expandir_contraer_jquery('.'+document.forma.radio_seleccionado.value, "hide");
	}
	catch(e){}

	document.forma.radio_seleccionado.value = 'fila_'+dia;

	if (document.getElementById('fila_'+dia)!=null)
		expandir_contraer_jquery('.fila_'+dia, "show");

}
/*======================================*/
var is_ready_carga_productos = false;
function cargar_arreglo_ajax (session, id, sub_opci)
{
	if (!is_ready_carga_productos){

		var data = "opci=cargar_arreglo_ajax_gene&sub_opci="+sub_opci+"&id="+id+"&l="+session;
		document.body['onmousemove']=new Function('document.body.style.cursor = "wait";mensaje_dinamico.style.visibility="visible";mensaje_dinamico.style.display="inline";document.getElementById("mensaje_dinamico").innerHTML = "Buscando...<br>Espere un Momento";var x = window.event.x+10+document.body.scrollLeft;var y = window.event.y+document.body.scrollTop;document.getElementById("mensaje_dinamico").style.left = x + "px";document.getElementById("mensaje_dinamico").style.top = y + "px";');
	
		$.post( "../includes/ejecutar.asp", data)
			.fail(function() {
				alert( "Error - Intente nuevamente - CADX" );
			})
			.always(function() {
				hide_message_cursor();
			})
			.done(function( data ) {
				is_ready_carga_productos = true;
				result = data;
				arr = result.split("|");

				try{
					eval("var arr_ajax_" + arr[1]);

					var_var = eval ("arr_ajax_"+arr[1])
					var_var = arr[3].replace(/\'/g,"").split(",")

					$("#"+arr[1]).autocomplete({
						source: var_var,
						select: function(event, ui) {
							if (arr[2]=="producto_venta")
							{
								/*evento se ejecuta solo una vez*/
							}
						}
					});
				}
				catch(e)
				{alert("Error en carga - Contacte al administrador - ERROR AJX-ARR-DINA JS - "+e.message)}
				str_verificar_si_cambia += arr[1];
			});
	}
}
/*======================================*/
function automemoria_ajax (tipo_a_consultar, arreglo, campo)
{
	if (campo.value=="")
	{
		$.ajax({
		  url: "../includes/ejecutar.asp",
		  method: "POST",
		  data: { opci: "arreglo_dinamico_general_async", session: document.campos_sesion.sesion_login_id.value, metodo: tipo_a_consultar },
		  beforeSend: function( xhr ) {
			document.body['onmousemove']=new Function('document.body.style.cursor = "wait";mensaje_dinamico.style.visibility="visible";mensaje_dinamico.style.display="inline";document.getElementById("mensaje_dinamico").innerHTML = "Buscando...<br>Espere un Momento";var x = window.event.x+10+document.body.scrollLeft;var y = window.event.y+document.body.scrollTop;document.getElementById("mensaje_dinamico").style.left = x + "px";document.getElementById("mensaje_dinamico").style.top = y + "px";');
		  }
		})
		  .done(function( data ) {
				document.body.style.cursor = "default";
				mensaje_dinamico.style.visibility="hidden";
				document.getElementById("mensaje_dinamico").innerHTML = "";
				document.body['onmousemove']='';

				salida = data.split("|")[0];

				arreglo = eval("new Array ("+salida+")");

				//actb(campo,arreglo);
				$("#" + campo.id).autocomplete({
					source: arreglo
				});

		  });
	}
}
/*======================================*/
function check_enter_venta (e, send)
{
	if (e.keyCode == 13 || send)
	{
		document.forma.refe.value=document.forma.campo_busque_rapi.value.split('-')[0];
		agregar_producto_venta();
		document.forma.campo_busque_rapi.value='';		
	}
}
/*======================================*/
function marcar_iva_venta (monto) {
	if (monto!=null && monto!="")
	{
		document.getElementById("iva_venta").innerHTML = monto;
		document.forma.iva.value = monto;
	} else {
		document.getElementById("iva_venta").innerHTML = "0";
		document.forma.iva.value = "0";
	}
}
/*======================================*/
function FormatoDocumentoPeru (campo)
{
	valor = campo.value.toUpperCase();
	letra_primera = false;
	key = getkey(campo);
	keychar = String.fromCharCode(key);
	keychar = trim(keychar.toUpperCase());

	if ( key==32 )
			return false;

	if (valor.length==0)
	{
		if (keychar=="R" || keychar=="D" || keychar=="V" || keychar=="E" || keychar=="P" || keychar=="C")
			letra_primera = true;
	}
	else if (valor.length>10)
		return false;
	else
	{
		primera_letra = campo.value.substring(0,1);
		primera_letra = primera_letra.toUpperCase();

		if (primera_letra=="R" || primera_letra=="D" || primera_letra=="V" || primera_letra=="E" || primera_letra=="P" || primera_letra=="C")
			letra_primera = true;
	}

	if (!letra_primera)
		return false;

	if (valor.length==0 && letra_primera)
		return true;
	else if (valor.length==0 && !letra_primera)
		return false;
	else if (valor.length>0 && letra_primera)
	{
		var caracteresPermitidos = '0123456789';

		/* chequea si el caracter es un caracter permitido*/
		if (caracteresPermitidos.indexOf(keychar) != -1)
			return true;

		/* control keys*/
			if ( key==null || key==0 || key==8 || key==9 || key==13 || key==27 )
			return true;

		 else return false;
		return false;
	}
}
/*======================================*/
function validar_tipo_moneda ()
{
	document.forma.tasa_cambio.value = $('option:selected', '#tipo_moneda').attr('tasaCamb');
	expandir_contraer_jquery ('#tr_tipo_cambio', 'show');
}
/*======================================*/
function validar_tipo_documento_peru (field) {

	if (document.forma.cedu.value.substring(0,1).toLowerCase()=="r" && field.value.length!=12) {
		alert('Debe ingresar mas de 11 caracteres'); 
		field.value='';
	} else if (document.forma.cedu.value.substring(0,1).toLowerCase()=="d" && field.value.length!=9) {
		alert('Debe ingresar 8 caracteres');
		field.value='';
	} else if (document.forma.cedu.value.substring(0,1).toLowerCase()=="v" && field.value.length>16) {
		alert('Debe ingresar maximo 15 caracteres'); 
		field.value='';
	} else if (document.forma.cedu.value.substring(0,1).toLowerCase()=="e" && field.value.length>13) {
		alert('Debe ingresar maximo 12 caracteres'); 
		field.value='';
	} else if (document.forma.cedu.value.substring(0,1).toLowerCase()=="p" && field.value.length>13) {
		alert('Debe ingresar maximo 12 caracteres'); 
		field.value='';
	} else if (document.forma.cedu.value.substring(0,1).toLowerCase()=="c" && field.value.length!=9) {
		alert('Debe ingresar mas de 8 caracteres'); 
		field.value='';
	} else if (field.value!='') {
		bucar_empleado_venta();
	}
}
/*======================================*/
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}
/*======================================*/
function add_total_pay(tipo = 'total') {
	if (tipo  === 'total'){
		document.getElementById("pago1").value = document.forma.total_div.value;
	} else {
		document.getElementById("pago1").value = formatCurrency(limpiar_numero(document.getElementById("tota_abon_calc").innerHTML));
	}
	$("#pago1").trigger("keyup");
	$("#pago1").focus();
}
/*======================================*/
function calcular_pago_otra_moneda (numero_pago, tipo_moneda) {
	if (document.getElementById("pago" + numero_pago).value !== '') {
		tasa = parseFloat(limpiar_numero(tipo_moneda.options[tipo_moneda.selectedIndex].getAttribute("alt")));
		monto_pag = parseFloat(limpiar_numero(document.getElementById("pago" + numero_pago).value));
		document.getElementsByName("mont_mone_loca_" + numero_pago)[0].value = formatCurrency(tasa * monto_pag);
	}
	if (tipo_moneda.selectedIndex === 0) {
		document.getElementsByName("mont_mone_loca_" + numero_pago)[0].value = '';
		$('#mont_mone_loca_' + numero_pago).hide();
	} else {
		$('#mont_mone_loca_' + numero_pago).show();
	}
}
/*======================================*/
function calcular_conversion_moneda (select_moneda, monto_convertir, campo_destino, tipo = 'dividir') {
	if (select_moneda.options[select_moneda.selectedIndex].value !== "") {
		tasa = parseFloat(limpiar_numero(select_moneda.options[select_moneda.selectedIndex].getAttribute("alt")));
		if (tipo === 'dividir')
			campo_destino.value = (parseFloat(limpiar_numero(monto_convertir)) / tasa).toFixed(4).replace('.',',');
		else
			campo_destino.value = (parseFloat(limpiar_numero(monto_convertir)) * tasa).toFixed(4).replace('.',',');
	}
}
/*======================================*/
function anexar_pago_monedas () {
	if (document.getElementById("tipo_moneda").selectedIndex === 0) {
		document.getElementById("mont_mone_loca").value = '';
		$('.td_conversion_moneda').hide(200);
	} else {
		$('.td_conversion_moneda').show(200);
		calcular_conversion_moneda (document.getElementById("tipo_moneda"), document.forma.pago_monto.value, document.getElementById("mont_mone_loca"), 'multiplicar')
		document.getElementById("mont_mone_loca").value = formatCurrency(document.getElementById("mont_mone_loca").value.replace(',','.'));
	}
}
/*======================================*/
function actualizar_moneda (id_mone) {
	let url = '../includes/acciones.asp?hidd_opci=actu_mone&i=' + id_mone + '&md=' + document.getElementById("mone_dest-" + id_mone).value
	url += '&tc=' + document.getElementById("tasa_camb-" + id_mone).value
	url += '&a=' + document.getElementById("acti-" + id_mone).value
	document.location = url;
}
/*======================================*/
var Fn = {
	// Valida el rut con su cadena completa "XXXXXXXX-X"
	validaRut : function (rutCompleto) {
		if (rutCompleto === '000') {
			return true;
		}

		rutCompleto = rutCompleto.replace("‐","-");
		if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
			return false;
		var tmp 	= rutCompleto.split('-');
		var digv	= tmp[1]; 
		var rut 	= tmp[0];
		if ( digv == 'K' ) digv = 'k' ;
		
		return (Fn.dv(rut) == digv );
	},
	dv : function(T){
		var M=0,S=1;
		for(;T;T=Math.floor(T/10))
			S=(S+T%10*(9-M++%6))%11;
		return S?S-1:'k';
	}
}
/*======================================*/
function calcular_ultimo_digito_chile (T) {
	var M=0,S=1;
	for(;T;T=Math.floor(T/10))
		S=(S+T%10*(9-M++%6))%11;
	return S?S-1:'k';
}
/*======================================*/
function formato_documentos_chile (campo) {
	campo.value = campo.value.toUpperCase();
	valor = campo.value;
	key = getkey(campo);
	keychar = String.fromCharCode(key);
	keychar = trim(keychar.toUpperCase());

	if (key == 32)
			return false;
		/* control keys*/
	if ( key==null || key==0 || key==8 || key==9 || key==13 || key==27 )
		return true;

	var caracteresPermitidos = '0123456789-K';

	if (caracteresPermitidos.indexOf(keychar) == -1)
		return false;

	if (valor.length>11)
		return false;

	if ((valor.length == 7 || valor.length == 8) && keychar == '-') {
		ultimo_digito = calcular_ultimo_digito_chile (campo.value);
		posible_rut = campo.value + keychar + ultimo_digito;

		if (Fn.validaRut(posible_rut)) {
			campo.value = posible_rut;
			return false;
		}
	}
}
/*======================================*/
function asignar_laboratorio_propio(id_labo, cont_labo)
{
	document.getElementById("labo_" + id_labo + "_" + cont_labo).value = document.getElementById("laboratorio-name_" + id_labo + "_" + cont_labo).innerHTML;
}
/*======================================*/
function validar_cambios_requerido (field)
{
	id_field = field.id.split('_')[1];

	prod_field = document.getElementById("prod_" + id_field);
	cant_field = document.getElementById("cant_" + id_field);
	valo_field = document.getElementById("valo_" + id_field);
	iva_field = document.getElementById("iva_" + id_field);

	if (trim(field.value) === "") {
		prod_field.setAttribute("alt","no_requerido");
		cant_field.setAttribute("alt","no_requerido");
		valo_field.setAttribute("alt","no_requerido");
		iva_field.setAttribute("alt","no_requerido");
	} else {
		prod_field.setAttribute("alt","");
		cant_field.setAttribute("alt","");
		valo_field.setAttribute("alt","");
		iva_field.setAttribute("alt","");
	}

}
/*======================================*/
function add_tables (selector)
{
	$(document).ready( function () {
		$(selector).DataTable({
				"language": {
					"url": "../v2/script/Spanish.json"
				}
			}
		);
} );
}
/*======================================*/
function add_wait_button (objecto)
{
	try{
		objecto.innerHTML = '<div class="fa-2x"><i class="fas fa-cog fa-spin"></i>	Procesando</div>';
		objecto.disabled = true;
	} catch(e) {}
}
/*======================================*/
function autocomplete_type_select(array_to_show, element)
{
	$(element).autocomplete({
		source: array_to_show,
		autoFocus: true,
	}).keyup(function() {
    var isValid = false;
    for (i in array_to_show) {
        if (array_to_show[i].toLowerCase().match(this.value.toLowerCase())) {
            isValid = true;
        }
    }
    if (!isValid) {
        this.value = previousValue
    } else {
        previousValue = this.value;
    }
	});
}
/*======================================*/
var menus_link_accesos;
function search_menu(textbox)
{
	menus_descripciones = [];
	menus_link_accesos= [];
	cont_me_se = 0;
	$("a[opt-desc]").each(function(index, value){
		menus_link_accesos.push(this.href);
		menus_descripciones.push(cont_me_se + '-' + this.getAttribute("opt-desc"));
		cont_me_se++;
	});

	autocomplete_type_select (menus_descripciones, "#" + textbox.id);
}
/*======================================*/
function ir_pagina_busqueda ()
{
	if (document.getElementById("menu-text-search").value == '') {
		return false;
	}
	id = document.getElementById("menu-text-search").value.split('-')[0];

	if (menus_link_accesos[id] === undefined) {
		return false;
	}
	document.forma_busc_opci.action = menus_link_accesos[id];
	document.forma_busc_opci.submit();
}
/*======================================*/
function send_marketing (field)
{
	document.forma.explanation.value = document.getElementById("explanation").innerHTML;
	add_wait_button(field);
	document.forma.submit();
}
/*======================================*/
function cargar_masivo (boton)
{
	if (verificar_formulario('forma')) {
		if (confirm('Esta Seguro de procesar los productos cargados?')){
			boton.disabled = true;
			boton.value = "Espere por favor, no cierre esta ventana. Puede demorar unos segundos.";
			document.forma.submit();
		}
	}
}
/*======================================*/
function saveCustomLabel ()
{
	var labelCustom = concatenar_valor_check_by_name ('labelCustom');
	var exdays = 10;
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value= (labelCustom)  + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie= "labelCustom=" + c_value + ";path=/";

	$('#confModalCenter').modal('hide');
	labelShowOnlySelected();
}
/*======================================*/
function labelShowOnlySelected ()
{
	allLabels = concatenar_valor_check_by_name ('labelCustom', 'all');
	arr_allLabels = allLabels.split(',');

	for (i=0; i<arr_allLabels.length; i++) {
		expandir_contraer_jquery('.div_'+arr_allLabels[i], 'hide', 0);
		$('#'+arr_allLabels[i]).prop('checked', false);
	}

	var labelSelected = $.cookie("labelCustom");
	if (typeof labelSelected == 'undefined') {
		labelSelected = 'id,marc,refe,codi,pvp';
	}


	arr_label = labelSelected.split(',');
	for (i=0; i<arr_label.length; i++) {
		expandir_contraer_jquery('.div_'+arr_label[i], 'show', 0);
		$('#CK'+arr_label[i]).prop('checked', true);
	}
}
/*======================================*/
function add_round_field ()
{
	document.forma.round_all.value = "1";
}
/*======================================*/
function search_pacient (campo_input)
{
	var key;
	key = getkey(campo_input);

	if (key==13 && trim(campo_input.value)!="")
	{
		buscar();
	}
}
/*======================================*/
function print_zebra (total)
{
	if ($( "input[type$='search']" ).val() !=="") {
		alert('Elimine el filtro para poder imprimir etiquetas. Total de etiquetas a imprimir: '+total);
		$( "input[type$='search']" ).focus();
		$( "input[type$='search']" ).css("background-color", "yellow");

	} else {
		abrir_popup('etiquetar_vertical.asp?total='+total,'etiqueta',350,450);
	}
}
/*======================================*/
var val_ente_tribu_response = false;
function validar_nic_gt(nic)
{
	if (nic == "") {
		document.forma.nomb.value = "";
		document.forma.apel.value = "";
		return true;
	}

	document.body['onmousemove']=new Function('document.body.style.cursor = "wait";mensaje_dinamico.style.visibility="visible";mensaje_dinamico.style.display="inline";document.getElementById("mensaje_dinamico").innerHTML = "Buscando...<br>Espere un Momento";var x = window.event.x+10+document.body.scrollLeft;var y = window.event.y+document.body.scrollTop;document.getElementById("mensaje_dinamico").style.left = x + "px";document.getElementById("mensaje_dinamico").style.top = y + "px";');

	var jqxhr = $.get( "https://login.optolapp.com/optol/ws/facturacion/guatemala/validar_nit.php?nit=" + nic, function() {
		})
		.done(function(data) {
			result = decodeURI(data).replace( /\+/g, ' ' );
			result = result.replace('%2C',',');
			result = result.replace('%26','&');
			val_ente_tribu_response = true;

			if (result.substring(0, 5) === 'ERROR') {
				alert('NIT invalido');
				document.forma.cedu.value = "";
				document.forma.nomb.value = "";
				document.forma.apel.value = "";
			} else {
				response_arr = result.split("|");
				document.forma.nomb.value = response_arr[1];
				document.forma.apel.value = response_arr[2];
				document.forma.tele.focus();

				bucar_empleado_venta();
			}
		})
		.fail(function() {
			alert( "Error - Intente nuevamente" );
		})
		.always(function() {
			hide_message_cursor();
		}
	);
}
/*======================================*/
function setSelectedValue(selectObj, valueToSet) {
	for (var i = 0; i < selectObj.options.length; i++) {
			if (selectObj.options[i].text.toUpperCase() == valueToSet.toUpperCase()) {
					selectObj.options[i].selected = true;
					return;
			}
	}
}
/*======================================*/
function show_options_label (valor)
{
	if (valor === 'yes') {
		expandir_contraer_jquery('#print_any_copy', 'hidde');
	} else {
		expandir_contraer_jquery('#print_any_copy', 'show');
	}
}
/*======================================*/
function hide_message_cursor ()
{
	document.body['onmousemove']='';				document.body.style.cursor = "default";
	document.getElementById("mensaje_dinamico").innerHTML = "";
	mensaje_dinamico.style.visibility= 'hidden';
	mensaje_dinamico.style.display = 'none';
	document.body['onmousemove']='';
}
/*======================================*/
function show_client_gt ()
{
	if (document.forma.cedu.value!='')
	{
		data = 'opci=busc_fact_cust&c=' + document.forma.cedu.value + '&l=' + escape(document.campos_sesion.sesion_login_id.value);

		$.post( "../includes/ejecutar.asp", data)
			.fail(function() {
				alert( "Error - Intente nuevamente - SCGT" );
			})
			.always(function() {

			})
			.done(function( data ) {
				result = data;
				arr = result.split("|");
				if (arr[1]!="vacio")
				{
					document.forma.codi_gt.value = arr[1];
					document.forma.muni_gt.value = arr[2];
					document.forma.depa_gt.value = arr[3];
				}

			});

	}
}
/*======================================*/
function show_by_client_cl (campo)
{
  atributo =  $('option:selected', '#tipo_docu_cl').attr('alt');

	if (campo === 'factura') {
		if (getUrlVars()["doc_iden"] !== undefined) {
			document.forma.cedu.value = getUrlVars()["doc_iden"];
			$('#nroDocumento').blur();
		} else {
			document.forma.cedu.value = '';
			document.forma.nomb.value = '';
			document.forma.apel.value = '';
			document.forma.dire.value = '';
			document.forma.tele.value = '';
	
			document.forma.giro_cl.value = '';
			document.forma.ciud_cl.value = '';
			document.forma.comu_cl.value = '';
		}
		expandir_contraer_jquery(".client_info", "show");
	} else if (campo === 'boleta' && atributo=='pe' ) {
		expandir_contraer_jquery(".client_info", "show",0);
		if (getUrlVars()["doc_iden"] !== undefined) {
			document.forma.cedu.value = getUrlVars()["doc_iden"];
			document.forma.giro_cl.value = 'personal';
			$('#nroDocumento').blur();
		} else {
			document.forma.cedu.value = '';
			document.forma.nomb.value = '';
			document.forma.apel.value = '';
			document.forma.dire.value = '';
			document.forma.tele.value = '';
	
			document.forma.giro_cl.value = 'personal';
			document.forma.ciud_cl.value = '';
			document.forma.comu_cl.value = '';
		}
	} else {
		expandir_contraer_jquery(".client_info", "hide",0);
		document.forma.cedu.value = '55555555-5';
		document.forma.nomb.value = 'cliente';
		document.forma.apel.value = 'final';
		document.forma.dire.value = 'chile';
		document.forma.tele.value = '123456';

		document.forma.giro_cl.value = 'personal';
		document.forma.ciud_cl.value = 'chile';
		document.forma.comu_cl.value = 'chile';
	}

}
/*======================================*/
function getUrlVars() // getUrlVars()["me"]
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
/*======================================*/
function ajuste_masivo ()
{
	var data = $('textarea[name=excel_data_import]').val();
	data = replaceAll(data, 'P', '');
	var rows = data.split("\n");
	var products_delete = '';
	var products;
	var quantity;
	for(var row_id in rows) {
			var cells = rows[row_id].split("\t");
			if(!$.isEmptyObject(cells)){
					if (isPositiveInteger(cells[1]) && isPositiveInteger(cells[0])) {
						if (products_delete === '') {
							products_delete = cells[0] + '-' + cells[1];
							products = cells[0];
							quantity = cells[1];
						} else {
							products_delete = products_delete + '|' + cells[0] + '-' + cells[1];
							products = products + ',' + cells[0];
							quantity = quantity + ',' + cells[1];
						}
					}
			}
	}

	if (products_delete !== '') {
		document.forma_buscar.masivo_prod.value = products;
		document.forma_buscar.masivo_cant.value = products_delete;
		document.forma_buscar.submit();
		add_wait_button (document.getElementById("button_search"));
	} else {
		alert('Favor verificar que fueron copiados y pegados todos los datos desde el Excel modelo');
	}
}
/*======================================*/
function isPositiveInteger(n) {
	return n >>> 0 === parseFloat(n);
}
/*======================================*/
function consumidor_final_gt () {
	document.forma.cedu.value = 'CF';
	document.forma.nomb.value = 'Consumidor';
	document.forma.apel.value = 'Final.';
	document.forma.dire.value = 'CIUDAD';
	document.forma.tele.value = '000000';
	document.forma.codi_gt.value = '01010';
	document.forma.muni_gt.value = 'GUATEMALA';
	document.forma.depa_gt.value = 'GUATEMALA';
}
/*======================================*/
function trans_masiva_excel ()
{
	if (document.forma_buscar.desde.value == document.forma_buscar.hasta.value) {
		alert('La sucursal destino y origen debe ser diferente');
		return false;
	}
	if (document.forma_buscar.excel_data_import.value!='') {
    document.forma_buscar.nomb_desde.value = $('select[name="desde"] option:selected').text();
		ajuste_masivo();
	} else {
		alert ('Debe de Ingresar al menos un id y su cantidad');
	}
}
/*======================================*/
function finalizar_transferencia ()
{
	if (verificar_formulario('forma')){
		add_wait_button(document.getElementById("boton_send"));
		document.forma.submit();
	}
}
/*======================================*/
function formato_moneda_div (fld, milSep, decSep, e, maximo_entero)
	{
		var campo;
		var sep = 0;
		var key = '';
		var i = j = 0;
		var len = len2 = 0;
		var strCheck = '0123456789';
		var aux = aux2 = '';
		var whichCode = (window.Event) ? e.which : e.keyCode;
		if (whichCode == 13) return true;  /* Enter*/

		if (whichCode == 8)   /* Borrar*/
		{
			if (fld.innerText=='0,0' || fld.innerText=='0,00' || fld.innerText=='')
			{
				fld.innerText = '';
				return true;
			}

			if (fld.innerText.substr(fld.innerText.length-2,fld.innerText.length)==',0') {
				fld.innerText = fld.innerText.substr(0,fld.innerText.length-3);
        return true;
      } else if (fld.innerText.substr(fld.innerText.length-2,fld.innerText.length)=='00') {
				fld.innerText = fld.innerText.substr(0,fld.innerText.length-3);
        fld.innerText = formatCurrency(limpiar_numero(fld.innerText) / 10);
        return true;
      } else if (fld.innerText.substr(fld.innerText.length-1,fld.innerText.length)=='0') {
				fld.innerText = fld.innerText.substr(0,fld.innerText.length-1);
        fld.innerText = formatCurrency(limpiar_numero(fld.innerText) );
        fld.innerText = fld.innerText.substr(0,fld.innerText.length-1);
        return true;
      }	else {
				fld.innerText = fld.innerText.substr(0,fld.innerText.length-1);
      }

			formato_moneda_eliminar_mascara_div (fld);
			return true;
		}

		if (whichCode>=96 && whichCode<=105)	/*valido el teclado numerico*/
			key = whichCode - 96;
		else
			key = String.fromCharCode(whichCode);  /* Get key value from key code*/

		if (strCheck.indexOf(key) == -1) return false;  /* Not a valid key*/
		len = fld.innerText.length;

		if (fld.innerText.substr(fld.innerText.length-2,fld.innerText.length)==',0')
				fld.innerText = fld.innerText.substr(0,fld.innerText.length-1);

		var fer_valor="";
		fer_valor = fld.innerText;
		fer_valor = fer_valor.split(",");
		fer_valor = fer_valor[0].replace(".","");

		if (fer_valor.length>maximo_entero)
			return false;
		
		campo = fld.innerText;

		for(i = 0; i < len; i++)
			if ((fld.innerText.charAt(i) != '0') && (fld.innerText.charAt(i) != decSep)) break;
		aux = '';
		for(; i < len; i++)
			if (strCheck.indexOf(fld.innerText.charAt(i))!=-1) aux += fld.innerText.charAt(i);
		aux += key;
		len = aux.length;
		if (len == 0) fld.innerText = '';
		if (len == 1) fld.innerText = '0'+ decSep + '0' + aux;
		if (len == 2) fld.innerText = '0'+ decSep + aux;
		if (len > 2) {
			aux2 = '';
			for (j = 0, i = len - 3; i >= 0; i--) {
				if (j == 3) {
					aux2 += milSep;
					j = 0;
				}
			aux2 += aux.charAt(i);
			j++;
			}
			fld.innerText = '';
			len2 = aux2.length;
			for (i = len2 - 1; i >= 0; i--)
				fld.innerText += aux2.charAt(i);
			fld.innerText += decSep + aux.substr(len - 2, len);
		}
		return false;
	}
/*======================================*/
function formato_moneda_eliminar_mascara_div (campo)
{
	var aux = "";
	string = campo.innerText;

	for (pos_eli_mas=0; pos_eli_mas!=string.length; pos_eli_mas++)
	{
		if (string.charAt(pos_eli_mas)!=".")
			aux += string.charAt(pos_eli_mas);

		if (pos_eli_mas==200)
		{
			alert('problema');
			break;
			return false;
		}
	}
	string_final = aux.replace(",",".");
	campo.innerText = formatCurrency(string_final);
}
/*======================================*/
function precio_unitario_updated (id)
{
  unitario = limpiar_numero(document.getElementById("columna_"+id).innerText);
  cantidad = eval("document.forma.cant_"+id+".value");
  document.getElementById("subtotal_"+id).innerText = formatCurrency(unitario * cantidad);
  eval("calcular_monto('"+id+"')");
  actualizar_totales();
}
/*======================================*/
function autompleteOnlyValues(campo_auto, arreglo_valores) {
  if ( !arreglo_valores.includes(campo_auto.value) && campo_auto.value!='') {
    alert('Este valor debe ser uno de los seleccionados de la lista, no esta permitido modificarlo');
    campo_auto.value = '';
    return false;
  }
  return true;
}
/*======================================*/
//cuando campo prod_ cambie debe borrarse las cantidades de la fila para evitar errores FALTA
function verifyQuantity(id, campo) {
	id = parseInt(id);

  if (campo.value == '0' || campo.value < 0 || campo.value.substring(0, 1)=='e') {
    campo.value = '';
    return false;
  }

  if (document.getElementById("disp_"+id).value == '' || document.getElementById("prod_"+id).value == '') {
    alert('Debe seleccionar primero un producto de la lista');
    campo.value='';
    return false;
  }

	disponible = parseInt(document.getElementById("disp_"+id).value);

  total_transferido = 0;
	$(".line-"+id).each(function() {
    total_transferido += ($(this).val()=='') ? 0 : parseInt($(this).val());
	});

  if (total_transferido > disponible) {
    alert('No tiene suficiente existencia');
    campo.value = '';
  }
}
/*======================================*/
function cleanAllFieldsTransfer (id)
{
	$(".line-"+id).each(function() {
    $(this).val('');
	});
}
/*======================================*/
function checkBeforeTransfer ()
{
	if (document.forma.come.value=="") {
		alert('Debe ingresar un concepto para la transferencia');
		return false;
	}

	haveInfo = false;
	$(".quantity").each(function() {
		if ($(this).val() != '') {
			haveInfo = true;
			return false;
		}
	});
	if (haveInfo) {
		document.forma.submit();
		add_wait_button (document.getElementById("sendBtn"));
	} else {
		alert('Debe seleccionar algun producto para poder transferir');
	}
}
/*======================================*/
function check_promotion (codi_inte,id, cost, desc, cant, iva, porcentaje_iva)
{
	$('.promociones').each(function(i, obj) {
    if ( $(this).attr('codi_opt').split(',').includes(codi_inte) ) {
			id_prom = $(this).attr('id_opt');
			desc_opt = $(this).attr('desc_opt');
			porc_desc_opt = $(this).attr('porc_desc_opt');
			fila_producto = document.getElementById("fila_"+id);
			fila_producto.setAttribute("promo_opt","fila_"+id_prom);

			field_porc_desc = eval('document.forma.desc_'+id);
			field_porc_desc.value = porc_desc_opt;

			field_subt = document.getElementById("subtotal_"+id).innerHTML

			if (! $('#fila_'+id_prom).length ) {
				setTimeout(
					function(){
						cost_prom = 0;

						if (document.forma.java_pais.value == 'guatemala') {
							descripcion = desc_opt+'('+limpiar_numero(cost)+' menos '+porc_desc_opt+' %)';
						} else {
							descripcion = desc_opt;
						}

						create_tr(codi_inte,id_prom, cost_prom, descripcion.replace(',','.') , 1, 'True', 0);
						calcular_descuento_venta(field_porc_desc, id);
						actualizar_totales();

						field_porc_desc_prom = eval('document.forma.desc_'+id_prom);
						field_porc_desc_prom.value = 0;
					},
					500
				);
			}
		}
	});
}
/*======================================*/
function change_license (fileld)
{
	page = window.location.href;
	document.location = page+'?l='+concatenar_valor_check_by_name('licencias_checked')+'#div_opciones';
	add_wait_button(fileld);
}
/*======================================*/
function citas (campo)
{
	expandir_contraer_jquery('.doc-sele', 'hide',0);
	expandir_contraer_jquery('.'+campo.value, 'show');
	if (campo.value=="interno") {
		$(".radio_legacy").attr( "alt", "no_requerido" );
		$(".radio_new").attr( "alt", "" );
	} else {
		$(".radio_legacy").attr( "alt", "" );
		$(".radio_new").attr( "alt", "no_requerido" );
	}
}
/*======================================*/
function enviar_mail_recibo (campo)
{
	if (verificar_formulario ('forma')) {
    document.getElementById('imagen_top').innerHTML = document.getElementById('bck_sesion_nomb_lice').value;
    document.forma.cuerpo.value = document.getElementById('body_email').innerHTML;
    document.forma.submit();
		add_wait_button(campo);
	}
}
/*======================================*/
function guias_transporte (campo, maximo_fila)
{
	if ($('#tabla_res').find('tbody tr').length > (maximo_fila-1) ) {
		alert('Puede enviar maximo <%=maximo_filas%> filas y tiene ' + ($('#tabla_res').find('tbody tr').length)-1);
	} else { 
		if (verificar_formulario('forma')) { 
			document.forma.submit(); 
			add_wait_button(campo);
		} 
	}
}
/*======================================*/

/*======================================*/

/*======================================*/

/*======================================*/

/*======================================*/

/*======================================*/

/*======================================*/

/*======================================*/

/*======================================*/
