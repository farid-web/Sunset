function desplegar() {
  var intro = document.getElementById('navlinks');
  if (intro.style.display == 'table')
    intro.style.display = 'none';
  else
    intro.style.display = 'table';
}

function cargar(nom,correo,ocupacion,departamento,estado){
  window.modal3.showModal();
  var n = document.getElementById(nom);
  var c = document.getElementById(correo);
  var o = document.getElementById(ocupacion);
  var d = document.getElementById(departamento);
  var est = document.getElementById(estado);
  const boton = document.getElementById('bot');
  boton.onclick = function(){
    var nom2 = document.getElementsByClassName('nuevoN')[0].value;
    var cor2 = document.getElementsByClassName('nEma')[0].value;
    var ocu2 = document.getElementsByClassName('ocupacion')[0].value;
    var dep2 = document.getElementsByClassName('departa')[0].value;
    
    if (document.getElementById('nuevoN').value=='') {
      alert('introdusca un nombre');
      document.modales.nuevoN.focus();
    }else if(document.getElementById('nEma').value=='') {
      alert('introdusca un correo');
      document.modales.nuevoN.focus();
    }else if(document.getElementById('ocupacion').value=='') {
      alert('introdusca una ocupacion');
      document.modales.nuevoN.focus();
    }else if(document.getElementById('departa').value=='') {
      alert('introdusca un lugar de departament de trabajo');
      document.modales.nuevoN.focus();
    }
    else{
      n.innerText = nom2;
      c.innerText = cor2;
      o.innerText = ocu2;
      d.innerText = dep2;
    }
    var es3 = document.getElementById('esta').value;
    est.innerText = es3;
    if(es3=='Activo')
      est.style.backgroundColor= 'limegreen';
    else if (es3 =='Incorporandose')
      est.style.backgroundColor= '#4EBDE2';
    else if(es3=='Desconectado')
      est.style.backgroundColor= 'indianred';
    else if(es3 =='Desconocido')
      est.style.backgroundColor= 'black';
    document.getElementById('nuevoN').value='';
    document.getElementById('nEma').value='';
    document.getElementById('ocupacion').value='';
    document.getElementById('departa').value='';
    window.modal3.close();
    }
  }