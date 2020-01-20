fecha=new Date(2020,2,24);
hoy=new Date();

toDay=0;
toHour=0;
toMinute=0;
toSecond=0;


diferencia=(fecha-hoy + 1000)/1000
        
	toSecond = Math.floor(diferencia % 60)
        toMinute = Math.floor(diferencia / 60 % 60)
        toHour = Math.floor(diferencia / 3600 % 24)
        toDay = Math.floor(diferencia / (3600 * 24))-31



//variables que determinan el total de horas, minutos y segundos para la cuenta atras


//cuenta atras

function countDown()

{

	toSecond=toSecond-1;

	if(toSecond<0)

	{

		toSecond=59;

		toMinute=toMinute-1;

	}

	document.getElementById("Segundos").innerHTML = toSecond;

	if(toMinute<0)

	{

		toMinute=59;

		toHour=toHour-1;

	}

		document.getElementById("Minutos").innerHTML = toMinute;

		document.getElementById("Horas").innerHTML = toHour;
	

	if(toHour<0)

	{
	
		toHour=23;
			
		toDay = toDay-1;	

	}

		document.getElementById("Minutos").innerHTML = toMinute;

		document.getElementById("Horas").innerHTML = toHour;
		
		document.getElementById("Dias").innerHTML = toDay;

	if(toDay<0)

	{

		//final

		document.getElementById("Segundos").innerHTML = 0;

		document.getElementById("Minutos").innerHTML = 0;

		document.getElementById("Horas").innerHTML = 0;
		
		document.getElementById("Dias").innerHTML = 0;

	}else{

		setTimeout("countDown()",1000);

	}

}