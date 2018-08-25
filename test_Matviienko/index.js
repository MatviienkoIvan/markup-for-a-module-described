$(function () {

  const citroen = ["pictures/car/citroen/минимальный.jpg","pictures/car/citroen/стандарт.jpg", "pictures/car/citroen/стандарт+.jpg", "pictures/car/citroen/стандарт++.jpg", "pictures/car/citroen/стандарт+++.jpg", "pictures/car/citroen/целиком.jpg", "pictures/car/citroen/чистый.jpg", "pictures/car/citroen/оптика.jpg","pictures/car/citroen/пороги-внутренние.jpg", "pictures/car/citroen/пороги-наружные.jpg", "pictures/car/citroen/двери.jpg", "pictures/car/citroen/задние-крылья.jpg", "pictures/car/citroen/капот.jpg", "pictures/car/citroen/передний-бампер.jpg", "pictures/car/citroen/задний-бампер.jpg"],
  mazda = ["pictures/car/mazda/минимальный.jpg","pictures/car/mazda/стандарт.jpg", "pictures/car/mazda/стандарт+.jpg", "pictures/car/mazda/стандарт++.jpg", "pictures/car/mazda/стандарт+++.jpg", "pictures/car/mazda/целиком.jpg", "pictures/car/mazda/чистая.jpg", "pictures/car/mazda/оптика.jpg","pictures/car/mazda/пороги-внутренние.jpg", "pictures/car/mazda/пороги-наружные.jpg", "pictures/car/mazda/двери.jpg", "pictures/car/mazda/задние-крылья.jpg", "pictures/car/mazda/капот.jpg", "pictures/car/mazda/передний-бампер.jpg", "pictures/car/mazda/задний-бампер.jpg"],
  mercedes = ["pictures/car/mercedes/минимальный.jpg","pictures/car/mercedes/стандарт.jpg", "pictures/car/mercedes/стандарт+.jpg", "pictures/car/mercedes/стандарт++.jpg", "pictures/car/mercedes/стандарт+++.jpg", "pictures/car/mercedes/целиком.jpg", "pictures/car/mercedes/чистый.jpg", "pictures/car/mercedes/оптика.jpg","pictures/car/mercedes/пороги-внутренние.jpg", "pictures/car/mercedes/пороги-наружные.jpg", "pictures/car/mercedes/двери.jpg", "pictures/car/mercedes/задние-крылья.jpg", "pictures/car/mercedes/капот.jpg", "pictures/car/mercedes/передний-бампер.jpg", "pictures/car/mercedes/задний-бампер.jpg"],
  part = [{"pictures/parts/пороги-внутренние.png":"пороги внутренние","pictures/parts/тоцы-дверей.png":"тоцы дверей","pictures/parts/полка-заднего-бампера.png":"полка заднего бампера","pictures/parts/зеркала.png":"зеркала","pictures/parts/фары.png":"фары","pictures/parts/ручки.png":"ручки"},
          {"pictures/parts/часть-капота.png":"часть капота","pictures/parts/часть-крыльев.png":"часть крыльев","pictures/parts/передний-бампер.png":"передний бампер", "pictures/parts/зеркала.png":"зеркала","pictures/parts/фары.png":"фары","pictures/parts/ручки.png":"ручки","pictures/parts/противотуманки.png":"противотуманки"},
          {"pictures/parts/капот-полностью.png":"капот полностью","pictures/parts/часть-крыльев.png":"часть крыльев","pictures/parts/передний-бампер.png":"передний бампер","pictures/parts/зеркала.png":"зеркала","pictures/parts/фары.png":"фары","pictures/parts/ручки.png":"ручки","pictures/parts/противотуманки.png":"противотуманки"},
          {"pictures/parts/капот-полностью.png":"капот полностью","pictures/parts/крылья-полностью.png":"крылья полностью","pictures/parts/передний-бампер.png":"передний бампер","pictures/parts/зеркала.png":"зеркала","pictures/parts/фары.png":"фары","pictures/parts/ручки.png":"ручки","pictures/parts/противотуманки.png":"противотуманки"},
          {"pictures/parts/капот-полностью.png":"капот полностью","pictures/parts/крылья-полностью.png":"крылья полностью","pictures/parts/задний-бампер.png":"задний бампер","pictures/parts/зеркала.png":"зеркала","pictures/parts/фары.png":"фары","pictures/parts/ручки.png":"ручки","pictures/parts/противотуманки.png":"противотуманки","pictures/parts/передний-бампер.png":"передний бампер"}
  ];
  let carType,
  planIndex,
  focusImg,
  activeLi;

  $(".header-topMenu-menu li a").click(function page(e){
    e.preventDefault();
    $("#section-main").css("display", "flex");
    $(".header-topMenu-menu li").find("a.active").removeClass("active");
    $(e.target).parent().find("a").addClass("active");
    activeLi = 3;
    carType = $(".header-topMenu-menu li").find("a.active").attr("machine-type");
    carMain(carType, activeLi);
  });

  $(".right-bar-menu li").mouseover(function mouseMove(e){
    e.preventDefault();
    planIndex = $(".right-bar-menu li").index($(e.target));
    carMain(carType, planIndex);
  });

  $(".right-bar-menu").mouseleave(function mouseMove(e){
    e.preventDefault();
    carMain(carType, activeLi);
  });

  $(".right-bar-menu li").click(function mouseClick(e){
    e.preventDefault();
    if( $(e.target).attr("id") == "parts"){
      $(".right-bar-menu-element").toggle("slow");
    }
    else{
      $(".right-bar-menu li").index($(e.target))
    }
  })

  function carMain(type, index) {
    switch(type){
      case "0":
      $("#main-picture-car").attr("src", `${citroen[index]}`);
      break;
      case "1":
      $("#main-picture-car").attr("src", `${mazda[index]}`);
      break;
      case "2":
      $("#main-picture-car").attr("src", `${mercedes[index]}`);
      break;
    };
    partsPicture(index);
  }

  function partsPicture(index) {
    $('table.car-table').empty();
    let trImg = $('<tr>');
    let trName = $('<tr>' )
    $.each(part[index], function(key, value){
        let picture = $('<img>').attr('src', `${key}`);
        let tdImg = $('<td>');
        let tdName = $('<td>'+ value + '</td>');
        trImg.append(tdImg.append(picture));
        trName.append(tdName);
    });
    $('table.car-table').append(trImg, trName)
  }
});
