window.addEventListener('load', function() {
  // arrays de las promociones: alumnas
  var arr4Chile = ['anais-araya', 'andrea-miranda', 'berenisse-rios', 'caterina-da-silva', 'daniela-sanchez', 'francisca-ojeda', 'katerine-sandoval'];
  var arr5Lima = ['andrea-cabrera', 'ariadna-izaguirre', 'carito-juarez', 'cristy-castro', 'karol-orrillo', 'paola-ortiz', 'teresa-lara'];
  var arr6Lima = ['arantza-burga', 'daguiana-revoredo', 'elizabeth-condori', 'grecia-rayme', 'janine-vega', 'michelle-more', 'mishel-velasquez', 'rosario-felix'];

  var container = document.getElementById('container');
  // console.log(container);
  var select = document.getElementById('selection');

  function dibujar(promo) {
    container.textContent = '';
    if (promo === '4' || promo === 'all') {
      arr4Chile.forEach(function(nombreDeImagen) {
        var div = document.createElement('div');
        div.classList.add('box');
        var img = document.createElement('img');
        img.setAttribute('src', 'assets/images/4-chile/' + nombreDeImagen + '.jpg');
  
        div.appendChild(img);
        container.appendChild(div);
      });
    }
    if (promo === '5' || promo === 'all') {
      arr5Lima.forEach(function(nombreDeImagen) {
        var div = document.createElement('div');
        div.classList.add('box');
        var img = document.createElement('img');
        img.setAttribute('src', 'assets/images/5-lima/' + nombreDeImagen + '.jpg');
  
        div.appendChild(img);
        container.appendChild(div);
      });
    }
    if (promo === '6' || promo === 'all') {
      arr6Lima.forEach(function(nombreDeImagen) {
        var div = document.createElement('div');
        div.classList.add('box');
        var img = document.createElement('img');
        img.setAttribute('src', 'assets/images/6-lima/' + nombreDeImagen + '.jpg');
  
        div.appendChild(img);
        container.appendChild(div);
      });
    }
    

  }

  dibujar('all');

  select.addEventListener('change', function() {
    dibujar(select.value);
  });
});