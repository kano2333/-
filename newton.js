const board2 = JXG.JSXGraph.initBoard('jxgbox2', {
  boundingbox: [-5, 5, 5, -5], axis: true
});
document.getElementById("span6").textContent = 0;
document.getElementById("span7").textContent = 0;
//関数選択//
function clickbutton8() {
  const board2 = JXG.JSXGraph.initBoard('jxgbox2', {
    boundingbox: [-5, 5, 5, -5], axis: true
  });
  if (document.getElementById("curve2").value == "4") {
    var c2 = board2.create('functiongraph', [function func_y1(x) { return Math.pow(x, 3.0) + x - 1.0; }], { strokeColor: '#a6d7c8' });
    //document.getElementById("span3").textContent=number3.value;
  }
  if (document.getElementById("curve2").value == "5") {
    var c2 = board2.create('functiongraph', [function func_y2(x) { return Math.pow(x, 2.0) - x - 3.0; }], { strokeColor: '#a6d7c8' });
    //document.getElementById("span3").textContent=number3.value;
  }
  if (document.getElementById("curve2").value == "6") {
    var c2 = board2.create('functiongraph', [function func_y3(x) { return Math.pow(x, 3.0) - 2.0 * x - 2.0; }], { strokeColor: '#a6d7c8' });
    //document.getElementById("span3").textContent=number3.value;
  }
}
//cの値//
function clickbutton3() {
  const board2 = JXG.JSXGraph.initBoard('jxgbox2', {
    boundingbox: [-5, 5, 5, -5], axis: true
  });
  if (document.getElementById("curve2").value == "4") {
    var c2 = board2.create('functiongraph', [function func_y1(x) { return Math.pow(x, 3.0) + x - 1.0; }], { strokeColor: '#a6d7c8' });
    //document.getElementById("span3").textContent=number3.value;
  }
  if (document.getElementById("curve2").value == "5") {
    var c2 = board2.create('functiongraph', [function func_y2(x) { return Math.pow(x, 2.0) - x - 3.0; }], { strokeColor: '#a6d7c8' });
    //document.getElementById("span3").textContent=number3.value;
  }
  if (document.getElementById("curve2").value == "6") {
    var c2 = board2.create('functiongraph', [function func_y3(x) { return Math.pow(x, 3.0) - 2.0 * x - 2.0; }], { strokeColor: '#a6d7c8' });
    //document.getElementById("span3").textContent=number3.value;
  }
  const number3 = document.getElementById("number3");
  document.getElementById("span3").textContent = number3.value;
  console.log(number3.value);
  c = Number(number3.value);
  var l3 = board2.create('line', [[c, 0.0], [c, 1.0]], { strokeColor: '#f3d7c1' });
}

//start//
function clickbutton5() {
  const board2 = JXG.JSXGraph.initBoard('jxgbox2', {
    boundingbox: [-5, 5, 5, -5], axis: true
  });
  if (document.getElementById("curve2").value == "4") {
    var c2 = board2.create('functiongraph', [function func_y1(x) { return Math.pow(x, 3.0) + x - 1.0; }], { strokeColor: '#a6d7c8' });
    //document.getElementById("span3").textContent=number3.value;
    const EPS2 = 0.0001; // 許容誤差

    //ニュートン法による根の計算
    function main2() {
      console.log("x^3 + x - 1 のニュートン法による数値計算");
      let a = Number(number3.value);
      let b, count2 = 0;
      console.log("c=" + a);


      while (1) {
        b = a - func_y1(a) / func_z1(a); // 式(1.9)
        console.log(b), count2++;
        if (Math.abs(a - b) < EPS2) break;  // 収束判定
        else a = b;
      }
      console.log("近似解 x = " + b);
      document.getElementById("span7").textContent = b;
      document.getElementById("span6").textContent = count2;
      var p2 = board2.create('point', [b, 0.0], { strokeColor: '#efc0d5' });
      var l3 = board2.create('line', [[c, 0.0], [c, 1.0]], { strokeColor: '#f3d7c1' });
    }

    //根を求めたい関数 @param {number} x X座標 @return {number} Y座標
    function func_y1(x) {
      return Math.pow(x, 3.0) + x - 1.0;
    }

    //根を求めたい関数の微分関数 @param {number} x X座標 @return {number} Y座標
    function func_z1(x) {
      return 3.0 * Math.pow(x, 2.0) + 1.0;
    }

    main2();
  }
  if (document.getElementById("curve2").value == "5") {
    var c2 = board2.create('functiongraph', [function func_y2(x) { return Math.pow(x, 2.0) - x - 3.0; }], { strokeColor: '#a6d7c8' });
    //document.getElementById("span3").textContent=number3.value;
    const EPS2 = 0.0001; // 許容誤差

    //ニュートン法による根の計算
    function main2() {
      console.log("x^3 + x - 1 のニュートン法による数値計算");
      let a = Number(number3.value);
      let b, count = 0;
      console.log("c=" + a);

      while (1) {
        b = a - func_y2(a) / func_z2(a); // 式(1.9)
        console.log(b), count2++;
        if (Math.abs(a - b) < EPS2) break;  // 収束判定
        else a = b;
      }
      console.log("近似解 x = " + b);
      document.getElementById("span7").textContent = b;
      document.getElementById("span6").textContent = count2;
      var p2 = board2.create('point', [b, 0.0], { strokeColor: '#efc0d5' });
      var l3 = board2.create('line', [[c, 0.0], [c, 1.0]], { strokeColor: '#f3d7c1' });
    }

    //根を求めたい関数 @param {number} x X座標 @return {number} Y座標
    function func_y2(x) {
      return Math.pow(x, 2.0) - x - 3.0;
    }

    //根を求めたい関数の微分関数 @param {number} x X座標 @return {number} Y座標
    function func_z2(x) {
      return 2.0 * x - 1.0;
    }

    main2();
  }
  if (document.getElementById("curve2").value == "6") {
    var c2 = board2.create('functiongraph', [function func_y3(x) { return Math.pow(x, 3.0) - 2.0 * x - 2.0; }], { strokeColor: '#a6d7c8' });
    //document.getElementById("span3").textContent=number3.value;
    const EPS2 = 0.0001; // 許容誤差

    //ニュートン法による根の計算
    function main2() {
      console.log("x^3 + x - 1 のニュートン法による数値計算");
      let a = Number(number3.value);
      let b, count2 = 0;
      console.log("c=" + a);

      while (1) {
        b = a - func_y3(a) / func_z3(a); // 式(1.9)
        console.log(b), count2++;
        if (Math.abs(a - b) < EPS2) break;  // 収束判定
        else a = b;
      }
      console.log("近似解 x = " + b);
      document.getElementById("span7").textContent = b;
      document.getElementById("span6").textContent = count2;
      var p2 = board2.create('point', [b, 0.0], { strokeColor: '#efc0d5' });
      var l3 = board2.create('line', [[c, 0.0], [c, 1.0]], { strokeColor: '#f3d7c1' });
    }

    //根を求めたい関数 @param {number} x X座標 @return {number} Y座標
    function func_y3(x) {
      return Math.pow(x, 3.0) - 2.0 * x - 2.0;
    }

    //根を求めたい関数の微分関数 @param {number} x X座標 @return {number} Y座標
    function func_z3(x) {
      return 3.0 * Math.pow(x, 2.0) - 2.0;
    }

    main2();
  }
}
function clickbutton9() {
  const board2 = JXG.JSXGraph.initBoard('jxgbox2', {
    boundingbox: [-5, 5, 5, -5], axis: true
  });
  document.getElementById("span6").textContent = 0;
  document.getElementById("span7").textContent = 0;
}