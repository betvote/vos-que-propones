function MostrarContenedor(tipo)
{
	var template = null;
	switch(tipo)
	{
		case contenedores.PARTIDOS:
			template = 
			"<a class='twitterButton' onclick='javascript:CompartirInicio(0)'>Compartí en Twitter</a>"
			+"<a class='facebookButton' onclick='javascript:CompartirInicio(1)'>Compartí en Facebook</a>"
			+"<div class='partidosContainer'><div class='title'>Partidos Políticos y Frentes</div></div> ";
			break;
		case contenedores.CANDIDATOS:
			template = "<div class='candidatosContainer'>"+
            	"<div class='title'>Candidatos a Jefe de Gobierno</div>"+
				"</div> ";
			break;
		case contenedores.PROPUESTAS:
			template = "<div class='propuestasContainer'>"+
					"<div class='title' onclick='javascript:ToggleCategoriaBarra(this)'>Propuestas</div>"+
					"<div class='tipo'>"+
						"<div class='title' onclick='javascript:ToggleCategoriaBarra(this)' ><img src='IMG/temas/salud.png' height='50' width='50' /><span style='color:"+temas.SALUD.color+";'>Salud</span><div class='arrowButton down'></div><span class='quantityList'>0</span></div>"+
					"<div id='salud' class='contPropuestas'></div> </div>"+
					"<div class='tipo'>"+
						"<div class='title' onclick='javascript:ToggleCategoriaBarra(this)'><img src='IMG/temas/vivienda.png' height='50' width='50' /><span style='color:"+temas.VIVIENDA.color+";'>Vivienda</span><div class='arrowButton down'></div><span class='quantityList'>0</span></div>"+
					"<div id='vivienda' class='contPropuestas'></div></div>"+
					"<div class='tipo'>"+
						"<div class='title' onclick='javascript:ToggleCategoriaBarra(this)'><img src='IMG/temas/sociedad.png' height='50' width='50' /><span style='color:"+temas.SOCIEDAD.color+";'>Sociedad</span><div class='arrowButton down'></div><span class='quantityList'>0</span></div>"+
					"<div id='sociedad' class='contPropuestas'></div></div>"+
					"<div class='tipo'>"+
						"<div class='title' onclick='javascript:ToggleCategoriaBarra(this)'><img src='IMG/temas/institucional.png' height='50' width='50' /><span style='color:"+temas.INSTITUCIONAL.color+";'>Institucionalidad</span><div class='arrowButton down'></div><span class='quantityList'>0</span></div>"+
					"<div id='institucional' class='contPropuestas'></div></div>"+
					"<div class='tipo'>"+
						"<div class='title' onclick='javascript:ToggleCategoriaBarra(this)'><img src='IMG/temas/planificacionUrbana.png' height='50' width='50' /><span style='color:"+temas.PLANEAMIENTO_URBANO.color+";'>Planeamiento Urbano</span><div class='arrowButton down'></div><span class='quantityList'>0</span></div>"+
					"<div id='planeamientoUrbano' class='contPropuestas'></div></div>"+
					"<div class='tipo'>"+
						"<div class='title' onclick='javascript:ToggleCategoriaBarra(this)'><img src='IMG/temas/seguridad.png' height='50' width='50' /><span style='color:"+temas.SEGURIDAD.color+";'>Seguridad</span><div class='arrowButton down'></div><span class='quantityList'>0</span></div>"+
					"<div id='seguridad' class='contPropuestas'></div></div>"+
					"<div class='tipo'>"+
						"<div class='title' onclick='javascript:ToggleCategoriaBarra(this)'><img src='IMG/temas/medioAmbiente.png' height='50' width='50' /><span style='color:"+temas.MEDIO_AMBIENTE.color+";'>Medio Ambiente</span><div class='arrowButton down'></div><span class='quantityList'>0</span></div>"+
					"<div id='medioAmbiente' class='contPropuestas'></div></div>"+
					"<div class='tipo'>"+
						"<div class='title' onclick='javascript:ToggleCategoriaBarra(this)'><img src='IMG/temas/economia.png' height='50' width='50' /><span style='color:"+temas.ECONOMIA.color+";'>Economía</span><div class='arrowButton down'></div><span class='quantityList'>0</span></div>"+
					"<div id='economia' class='contPropuestas'></div></div>"+
					"<div class='tipo'>"+
						"<div class='title' onclick='javascript:ToggleCategoriaBarra(this)'><img src='IMG/temas/internacional.png' height='50' width='50' /><span style='color:"+temas.INTERNACIONAL.color+";'>Asuntos Internacionales</span><div class='arrowButton down'></div><span class='quantityList'>0</span></div>"+
					"<div id='internacional' class='contPropuestas'></div></div>"+
					"<div class='tipo'>"+
						"<div class='title' onclick='javascript:ToggleCategoriaBarra(this)'><img src='IMG/temas/educacion.png' height='50' width='50' /><span style='color:"+temas.EDUCACION.color+";'>Educación</span><div class='arrowButton down'></div><span class='quantityList'>0</span></div>"+
					"<div id='educacion' class='contPropuestas'></div></div>"+
					"<div class='tipo'>"+
						"<div class='title' onclick='javascript:ToggleCategoriaBarra(this)'><img src='IMG/temas/transporte.png' height='50' width='50' /><span style='color:"+temas.TRANSPORTE.color+";'>Transporte</span><div class='arrowButton down'></div><span class='quantityList'>0</span></div>"+
					"<div id='transporte' class='contPropuestas'></div></div>"+
					"<div class='tipo'>"+
						"<div class='title' onclick='javascript:ToggleCategoriaBarra(this)'><img src='IMG/temas/derechosHumanos.png' height='50' width='50' /><span style='color:"+temas.DERECHOS_HUMANOS.color+";'>Derechos Humanos</span><div class='arrowButton down'></div><span class='quantityList'>0</span></div>"+
					"<div id='derechosHumanos' class='contPropuestas'></div></div>"+
				"</div> ";
			break;
	};
	return template;
}

function CompartirInicio(tipo)
{
	if(tipo == 0)
	  window.open('https://twitter.com/intent/tweet?'+
	  'related=PartidodelaRed&'+
	  'text='+ '%23yvosquepropones las propuestas de todos los candidatos para CABA en un solo lugar queproponen.com.ar', 'tweet', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
	else
	  window.open('http://www.facebook.com/dialog/feed?app_id=825676227513877' +
        '&link=http://queproponen.com.ar' +
        '&picture=http:%2F%2Fqueproponen.com.ar%2Fvosquepropones%2FIMG%2FshareLogo.png' +
        '&name=' + 'Todas las propuestas de los candidatos en un solo lugar' +
        '&caption=' + 'via queproponen.com.ar - Partido de la Red' +
        '&description=' + 'Conocé todas las propuestas de los candidatos a Jefe de Gobierno de CABA y discutilas directamente con los ellos.' +
        '&redirect_uri=' + 'http://queproponen.com.ar/close.html' +
        '&display=popup'
		, 'Compartí todas las propuestas', 'tweet', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
}

function HeaderPartido(part)
{
	var container = document.createElement('div');
	$(container).attr('id', part.nombre);
	$(container).addClass('partidoContainer');
	$(container).css('display', 'block').css('width', '100%');
	
	var imagen = document.createElement('div');
	$(imagen).addClass('imagenPartido_Header');
	$(imagen).css('background-image', 'url(IMG/partidos/' + part.imagen + ')');
	$(container).append(imagen);
	
	var nombre = document.createElement('div');
	$(nombre).addClass('item').addClass('nombre_Header');
	$(nombre).css('color', part.color).css('background-color', '#fff');
	$(nombre).html(part.nombre);
	$(container).append(nombre);
	
	var tweet = document.createElement('a');
	$(tweet).addClass('twitterButton');
	$(tweet).html('Compartí sus propuestas en twitter');
	$(tweet).click(function(e) {
		//makeShort(container, window.location.origin + window.location.pathname + '#partido/'+part.nombre.split(' ').join('-'), function(){
		window.open('https://twitter.com/intent/tweet?'+
		'url=http%3A%2F%2Fqueproponen.com.ar%2F'+'%23partido%2F'+part.nombre.split(' ').join('-')+'&'+
		'related=PartidodelaRed&'+
		'text='+ '%23yvosquepropones Mirá las propuestas para CABA de ' + part.nombre, 'tweet', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
		//});
	});
	$(nombre).append(tweet);

	var facebook = document.createElement('a');
	$(facebook).addClass('facebookButton');
	$(facebook).html('Compartí sus propuestas en facebook');
	$(facebook).click(function(e) {
		window.open(
		'http://www.facebook.com/dialog/feed?app_id=825676227513877' +
        '&link=' + escape(window.location.href) +
        '&picture=http:%2F%2Fqueproponen.com.ar%2Fvosquepropones%2FIMG%2FshareLogo.png' +
        '&name=' + 'Todas las propuestas de ' + part.nombre +
        '&caption=' + 'via queproponen.com.ar - Partido de la Red' +
        '&description=' + 'Conocé todas sus propuestas y la de todos los candidatos a Jefe e Gobierno en la Ciudad' +
        '&redirect_uri=' + 'http://queproponen.com.ar/close.html' +
        '&display=popup'
		, 'Compartí todas las propuestas del partido', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
	});
	$(nombre).append(facebook);

	var candidatosDIV = document.createElement('div');
	$(candidatosDIV).addClass('item').addClass('candidatos_Header');
	$(candidatosDIV).html(candidatos.filter(function(a){return a.partido == part.codigo}).length);
	$(container).append(candidatosDIV);

	
	var propuestasDIV = document.createElement('div');
	$(propuestasDIV).addClass('item').addClass('propuestas_Header');
	var cantPropuestas = 0;
	cantPropuestas = propuestas.filter(function(a){return a.partido == part.codigo}).length;
	$(propuestasDIV).html(cantPropuestas);
	if(cantPropuestas == 0)
	    $(propuestasDIV).addClass('numeroNoPropuestas');
	$(container).append(propuestasDIV);
	
	return container;
}

function HeaderCandidato(cand)
{
	var container = document.createElement('div');
	$(container).attr('id', cand.nombre);
	$(container).addClass('candidatoContainer_Header');
	
	var imagen = document.createElement('div');
	$(imagen).addClass('imagenCandidato');
	$(imagen).css('background-image', 'url(IMG/candidatos/' + cand.imagen + ')');
	$(container).append(imagen);
	
	var cont = document.createElement('div');
	$(cont).css('display', 'inline-block');
	$(cont).css('vertical-align', 'top');
	$(cont).css('margin', '6px 0');
	
	var nombre = document.createElement('div');
	$(nombre).addClass('nombreCandidato');
	$(nombre).html(cand.nombre);
	$(cont).append(nombre);
	
	var part = partidos.filter(function(e){return e.codigo == cand.partido;})[0];
	var color = document.createElement('div');
	$(color).addClass('colorCandidato');
	$(color).css('background-color', part.color);
	$(color).html(part.nombre);
	$(cont).append(color);
	
	var lista = document.createElement('div');
	$(lista).addClass('listaCandidato');
	$(lista).html(cand.lista);
	$(cont).append(lista);
	
	$(container).append(cont);

	var tweet = document.createElement('a');
	$(tweet).addClass('twitterButton');
	$(tweet).html('Compartilo en twitter');
	$(tweet).click(function(e) {
		//makeShort(container, window.location.origin + window.location.pathname + '#candidato/'+cand.nombre.split(' ').join('-'), function(){
		window.open('https://twitter.com/intent/tweet?'+
		'url=http%3A%2F%2Fqueproponen.com.ar%2F'+'%23candidato%2F'+cand.nombre.split(' ').join('-')+'&'+
		'related=PartidodelaRed&'+
		'text='+ '%23yvosquepropones Mirá las propuestas para CABA de ' + cand.nombre, 'tweet', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
		//});
	});
	$(container).append(tweet);
	
	var facebook = document.createElement('a');
	$(facebook).addClass('facebookButton');
	$(facebook).html('Compartilo en facebook');
	$(facebook).click(function(e) {
		window.open(
		'http://www.facebook.com/dialog/feed?app_id=825676227513877' +
        '&link=' + escape(window.location.href) +
        '&picture=http:%2F%2Fqueproponen.com.ar%2Fvosquepropones%2FIMG%2FshareLogo.png' +
        '&name=' + 'Todas las propuestas de ' + cand.nombre +
        '&caption=' + 'via queproponen.com.ar - Partido de la Red' +
        '&description=' + 'Conocé todas sus propuestas y la de todos los candidatos a Jefe e Gobierno en la Ciudad' +
        '&redirect_uri=' + 'http://queproponen.com.ar/close.html' +
        '&display=popup'
		, 'Compartí todas las propuestas del partido', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
	});
	$(container).append(facebook);

	var propuestasDIV = document.createElement('div');
	$(propuestasDIV).addClass('item').addClass('propuestas_Header');
	$(propuestasDIV).html(propuestas.filter(function(a){return a.candidato == cand.codigo && a.partido == cand.partido}).length);
	if(propuestas.filter(function(a){return a.candidato == cand.codigo && a.partido == cand.partido}).length == 0)
	    $(propuestasDIV).addClass('numeroNoPropuestas');
	$(container).append(propuestasDIV);
	
	return container;
}

function MostrarVolver(tipo, cosa)
{
	var cont = document.createElement('div');
	$(cont).addClass('atrasContainer');
	$(cont).append(flecha);
	
	var flecha = document.createElement('div');
	$(flecha).addClass('flechaAtras');
	$(cont).append(flecha);
	
	var texto = document.createElement('div');
	$(texto).addClass('textoAtras');
	if(cosa == null)
		$(texto).html('Volver al inicio ');
	else
		$(texto).html('Volver a ' + cosa.nombre);
		
	$(cont).click(function(e) {
		if(cosa == null)
			CargaInicial();
		else if(cosa.propuestas == undefined)
			MostrarPartido(1, cosa);
		else
			MostrarCandidato(1, cosa);
    });	
		
	$(cont).append(texto);
	
	return cont;
}

function CargarAbout()
{
	var icono = document.createElement('div');
	$(icono).addClass('iconoAbout');
	$('body').append(icono);
	$(icono).click(function(e) {
        $('.aboutContainer').animate({marginLeft:'0px'},300);
    });
	
	var about = document.createElement('div');
	$(about).addClass('aboutContainer');
	$(about).html("La metodología de recopilación de la información se realizó investigando los medios sociales de los candidatos, frentes y partidos. <br/><br/> Se considera una propuesta a aquellas consignas cuyo destinatario sea una política pública a realizar en caso de que el candidato sea electo, NO a bases de acción política o manifiestos políticos. <br/><br/> La carga de los datos se hace en orden aleatorio.");
	$('body').append(about);
	$(about).click(function(e) {
        $('.aboutContainer').animate({marginLeft: '-'+$(this).outerWidth() +'px'},300);
    });
}