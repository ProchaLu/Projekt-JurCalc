var arrTP1 = [3.10,4.30];

var arrTP2 = [13.30,19.70,26,28.70];

var arrTP3a = [26,39,51.80];

var arrTP3b = [32.50,48.60];

var arrTP3c = [39,58.40,77.70];

function calc()
  {
    var n1=parseFloat(document.getElementById("st").value);
    var op=document.getElementById("tp").value;
    
    if (n1 <= 40) { //werte -40
    if (op === "tp1") {
    document.getElementById("result").value = arrTP1[0];
    document.getElementById("ust").value = (arrTP1[0]/100*20).toFixed(2);
    document.getElementById("gesamt").value = arrTP1[0] + (arrTP1[0]/100*20);
    }
    if (op === "tp2") {
      document.getElementById("result").value = arrTP2[0];
      document.getElementById("ust").value = (arrTP2[0]/100*20).toFixed(2);
      document.getElementById("gesamt").value = arrTP2[0] + (arrTP2[0]/100*20);
      }
    if (op === "tp3a") {
      document.getElementById("result").value = arrTP3a[0];
      document.getElementById("ust").value = (arrTP3a[0]/100*20).toFixed(2);
      document.getElementById("gesamt").value = arrTP3a[0] + (arrTP3a[0]/100*20);
      }  
    if (op === "tp3b") {
      document.getElementById("result").value = arrTP3b[0];
      document.getElementById("ust").value = (arrTP3b[0]/100*20).toFixed(2);
      document.getElementById("gesamt").value = arrTP3b[0] + (arrTP3b[0]/100*20);
      }
    if (op === "tp3c") {
      document.getElementById("result").value = arrTP3c[0];
      document.getElementById("ust").value = (arrTP3c[0]/100*20).toFixed(2);
      document.getElementById("gesamt").value = arrTP3c[0] + (arrTP3c[0]/100*20);
      }
    }
    if (n1 >= 41 && n1 <= 70) { //werte 41-70
      if (op === "tp1") {
      document.getElementById("result").value = arrTP1[1];
      document.getElementById("ust").value = (arrTP1[1]/100*20).toFixed(2);
      document.getElementById("gesamt").value = arrTP1[1] + (arrTP1[1]/100*20);
      }
      if (op === "tp2") {
        document.getElementById("result").value = arrTP2[1];
        document.getElementById("ust").value = (arrTP2[1]/100*20).toFixed(2);
        document.getElementById("gesamt").value = arrTP2[1] + (arrTP2[1]/100*20);
        }
      if (op === "tp3a") {
        document.getElementById("result").value = arrTP3a[1];
        document.getElementById("ust").value = (arrTP3a[1]/100*20).toFixed(2);
        document.getElementById("gesamt").value = arrTP3a[1] + (arrTP3a[1]/100*20);
        }  
      if (op === "tp3b") {
        document.getElementById("result").value = arrTP3b[1];
        document.getElementById("ust").value = (arrTP3b[1]/100*20).toFixed(2);
        document.getElementById("gesamt").value = arrTP3b[1] + (arrTP3b[1]/100*20);
        }
      if (op === "tp3c") {
        document.getElementById("result").value = arrTP3c[1];
        document.getElementById("ust").value = (arrTP3c[1]/100*20).toFixed(2);
        document.getElementById("gesamt").value = arrTP3c[1] + (arrTP3c[1]/100*20);
        }
      }    
    if (n1 >= 36340 && n1 <= 363360) {
    if (op === "tp1")
      {
        document.getElementById("result").value = parseFloat((n1*0.1)/1000 + 78.166).toFixed(2);
        document.getElementById("ust").value = parseFloat(document.getElementById("result").value/100*20).toFixed(2); 
        var result = ((n1*0.1)/1000 + 78.166) + (((n1*0.1)/1000 + 78.166)/100*20);
        document.getElementById("gesamt").value = result.toFixed(2);
      }

    if (op === "tp2")
      {
        document.getElementById("result").value = parseFloat((n1*0.5)/1000 + 350.43).toFixed(2);
        document.getElementById("ust").value = parseFloat(document.getElementById("result").value/100*20).toFixed(2);
        var result = ((n1*0.5)/1000 + 350.43) + (((n1*0.5)/1000 + 350.43)/100*20);
        document.getElementById("gesamt").value = result.toFixed(2);
      }

    if (op === "tp3a")
      {
        document.getElementById("result").value = parseFloat((n1)/1000 + 689.46).toFixed(2);
        document.getElementById("ust").value = parseFloat(document.getElementById("result").value/100*20).toFixed(2);
        var result = ((n1)/1000 + 689.46) + (((n1)/1000 + 689.46)/100*20);
        document.getElementById("gesamt").value = result.toFixed(2);
      }
    if (op === "tp3b")
      {
        document.getElementById("result").value = parseFloat((n1*1.25)/1000 + 861.875).toFixed(2);
        document.getElementById("ust").value = parseFloat(document.getElementById("result").value/100*20).toFixed(2);
        var result = ((n1*1.25)/1000 + 861.875) + (((n1*1.25)/1000 + 861.875)/100*20); 
        document.getElementById("gesamt").value = result.toFixed(2);
      }
    if (op === "tp3c")
      {
        document.getElementById("result").value = parseFloat((n1*1.5)/1000 + 1034.09).toFixed(2);
        document.getElementById("ust").value = parseFloat(document.getElementById("result").value/100*20).toFixed(2);
        var result = ((n1*1.5)/1000 + 1034.09) + (((n1*1.5)/1000 + 1034.09)/100*20);
        document.getElementById("gesamt").value = result.toFixed(2);
      }
}
else if (n1 > 363360) {
  if (op === "tp1")
    {
      document.getElementById("result").value = parseFloat((n1*0.05)/1000 + 96.332).toFixed(2);
      document.getElementById("ust").value = parseFloat(document.getElementById("result").value/100*20).toFixed(2);
      var result = ((n1*0.05)/1000 + 96.332) + (((n1*0.05)/1000 + 96.332)/100*20);
      document.getElementById("gesamt").value = result.toFixed(2);
    }
  if (op === "tp2")
    {
      document.getElementById("result").value = parseFloat((n1*0.25)/1000 + 441.26).toFixed(2);
      document.getElementById("ust").value = parseFloat(document.getElementById("result").value/100*20).toFixed(2);
      var result = ((n1*0.25)/1000 + 441.26) + (((n1*0.25)/1000 + 441.26)/100*20);
      document.getElementById("gesamt").value = result.toFixed(2);
    }
  if (op === "tp3a")
    {
      document.getElementById("result").value = parseFloat((n1*0.5)/1000 + 871.12).toFixed(2);
      document.getElementById("ust").value = parseFloat(document.getElementById("result").value/100*20).toFixed(2);
      var result = ((n1*0.5)/1000 + 871.12) + (((n1*0.5)/1000 + 871.12)/100*20);
      document.getElementById("gesamt").value = result.toFixed(2);
    }
  if (op === "tp3b")
    {
      document.getElementById("result").value = parseFloat((n1*0.625)/1000 + 1089).toFixed(2);
      document.getElementById("ust").value = parseFloat(document.getElementById("result").value/100*20).toFixed(2);
      var result = ((n1*0.625)/1000 + 1089) + (((n1*0.625)/1000 + 1089)/100*20);
      document.getElementById("gesamt").value = result.toFixed(2);
    }
  if (op === "tp3c")
    {
      document.getElementById("result").value = parseFloat((n1*0.75)/1000 + 1306.58).toFixed(2);
      document.getElementById("ust").value = parseFloat(document.getElementById("result").value/100*20).toFixed(2);
      var result = ((n1*0.75)/1000 + 1306.58) + (((n1*0.75)/1000 + 1306.58)/100*20);
      document.getElementById("gesamt").value = result.toFixed(2);
    }
}
}



