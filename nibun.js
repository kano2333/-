const board1 = JXG.JSXGraph.initBoard('jxgbox', {
  boundingbox: [-5, 5, 5, -5], axis: true
});
document.getElementById("span4").textContent = 0;
document.getElementById("span5").textContent = 0;
//関数選択//
function clickbutton6() {
  const board1 = JXG.JSXGraph.initBoard('jxgbox', {
    boundingbox: [-5, 5, 5, -5], axis: true
  });
  if (document.getElementById("curve").value == "1") {
    var c1 = board1.create('functiongraph', [function func_y1(x) { return Math.pow(x, 3.0) + x - 1.0; }], { strokeColor: '#a6d7c8' });
    document.getElementById("span").textContent = "(~0.6)";
    document.getElementById("span2").textContent = "(0.7~)";
  }
  if (document.getElementById("curve").value == "2") {
    var c1 = board1.create('functiongraph', [function func_y2(x) { return Math.pow(x, 2.0) - x - 3.0; }], { strokeColor: '#a6d7c8' });
    document.getElementById("span").textContent = "(~-1.4)or(~2.3)";
    document.getElementById("span2").textContent = "(-1.3~)or(2.4~)";
  }
  if (document.getElementById("curve").value == "3") {
    var c1 = board1.create('functiongraph', [function func_y3(x) { return Math.pow(x, 3.0) - 2.0 * x - 2.0; }], { strokeColor: '#a6d7c8' });
    document.getElementById("span").textContent = "(~1.7)";
    document.getElementById("span2").textContent = "(1.8~)";
  }
}
//aの値//
function clickbutton() {
  const board1 = JXG.JSXGraph.initBoard('jxgbox', {
    boundingbox: [-5, 5, 5, -5], axis: true
  });
  if (document.getElementById("curve").value == "1") {
    var c1 = board1.create('functiongraph', [function func_y1(x) { return Math.pow(x, 3.0) + x - 1.0; }], { strokeColor: '#a6d7c8' });
  }
  if (document.getElementById("curve").value == "2") {
    var c1 = board1.create('functiongraph', [function func_y2(x) { return Math.pow(x, 2.0) - x - 3.0; }], { strokeColor: '#a6d7c8' });
  }
  if (document.getElementById("curve").value == "3") {
    var c1 = board1.create('functiongraph', [function func_y3(x) { return Math.pow(x, 3.0) - 2.0 * x - 2.0; }], { strokeColor: '#a6d7c8' });
  }
  const number = document.getElementById("number");
  document.getElementById("span").textContent = number.value;
  console.log(number.value);
  let a = Number(number.value);
  var l1 = board1.create('line', [[a, 0.0], [a, 1.0]], { strokeColor: '#efeccc' });
}
//bの値//
function clickbutton2() {
  const board1 = JXG.JSXGraph.initBoard('jxgbox', {
    boundingbox: [-5, 5, 5, -5], axis: true
  });
  if (document.getElementById("curve").value == "1") {
    var c1 = board1.create('functiongraph', [function func_y1(x) { return Math.pow(x, 3.0) + x - 1.0; }], { strokeColor: '#a6d7c8' });
  }
  if (document.getElementById("curve").value == "2") {
    var c1 = board1.create('functiongraph', [function func_y2(x) { return Math.pow(x, 2.0) - x - 3.0; }], { strokeColor: '#a6d7c8' });
  }
  if (document.getElementById("curve").value == "3") {
    var c1 = board1.create('functiongraph', [function func_y3(x) { return Math.pow(x, 3.0) - 2.0 * x - 2.0; }], { strokeColor: '#a6d7c8' });
  }
  const number2 = document.getElementById("number2");
  document.getElementById("span2").textContent = number2.value;
  console.log(number2.value);
  const number = document.getElementById("number");
  document.getElementById("span").textContent = number.value;
  let a = Number(number.value);
  let b = Number(number2.value);
  var l1 = board1.create('line', [[a, 0.0], [a, 1.0]], { strokeColor: '#efeccc' });
  var l2 = board1.create('line', [[b, 0.0], [b, 1.0]], { strokeColor: '#c5b4f4' });
}
//start//
function clickbutton4() {
  const board1 = JXG.JSXGraph.initBoard('jxgbox', {
    boundingbox: [-5, 5, 5, -5], axis: true
  });
  if (document.getElementById("curve").value == "1") {
    var c1 = board1.create('functiongraph', [function func_y1(x) { return Math.pow(x, 3.0) + x - 1.0; }], { strokeColor: '#a6d7c8' });
    const EPS = 0.0001; // constは定数の定義

    //2分法による根の計算
    function main() {
      let a = Number(number.value);
      let b = Number(number2.value);
      console.log("x^3 + x - 1 の2分法による数値計算");
      console.log("a=" + a);
      console.log("b=" + b);
      let x = nibun(a, b); // 解
      console.log("近似解 x = " + x);
      document.getElementById("span5").textContent = x;
      var p1 = board1.create('point', [x, 0.0], { strokeColor: '#efc0d5' });
      var l1 = board1.create('line', [[a, 0.0], [a, 1.0]], { strokeColor: '#efeccc' });
      var l2 = board1.create('line', [[b, 0.0], [b, 1.0]], { strokeColor: '#c5b4f4' });
    }

    //実際の計算部分 @param {number} a 計算範囲 @param {number} b 計算範囲 @return {number} 近似解
    function nibun(a, b) {
      let c, count = 0;
      do {
        c = (a + b) / 2.0; // 2分計算
        console.log(c);
        if (func_y1(c) * func_y1(a) < 0) b = c, count++; // 式(1.2)
        else a = c, count++; // 式(1.3)
      } while (Math.abs(a - b) > EPS); // 収束判別　式(1.4)の変形
      document.getElementById("span4").textContent = count;
      return c;
    }
    //根を求めたい関数 @param {number} x X座標 @return {number} Y座標
    function func_y1(x) {
      return Math.pow(x, 3.0) + x - 1.0;
    }
    main();
  }
  if (document.getElementById("curve").value == "2") {
    var c1 = board1.create('functiongraph', [function func_y2(x) { return Math.pow(x, 2.0) - x - 3.0; }], { strokeColor: '#a6d7c8' });
    const EPS = 0.0001; // constは定数の定義

    //2分法による根の計算
    function main() {
      let a = Number(number.value);
      let b = Number(number2.value);
      console.log("x^3 + x - 1 の2分法による数値計算");
      console.log("a=" + a);
      console.log("b=" + b);
      let x = nibun(a, b); // 解
      console.log("近似解 x = " + x);
      document.getElementById("span5").textContent = x;
      var p1 = board1.create('point', [x, 0.0], { strokeColor: '#efc0d5' });
      var l1 = board1.create('line', [[a, 0.0], [a, 1.0]], { strokeColor: '#efeccc' });
      var l2 = board1.create('line', [[b, 0.0], [b, 1.0]], { strokeColor: '#c5b4f4' });
    }

    //実際の計算部分 @param {number} a 計算範囲 @param {number} b 計算範囲 @return {number} 近似解
    function nibun(a, b) {
      let c, count = 0;
      do {
        c = (a + b) / 2.0; // 2分計算
        console.log(c);
        if (func_y2(c) * func_y2(a) < 0) b = c, count++; // 式(1.2)
        else a = c, count++; // 式(1.3)
      } while (Math.abs(a - b) > EPS); // 収束判別　式(1.4)の変形
      document.getElementById("span4").textContent = count;
      return c;
    }

    //根を求めたい関数 @param {number} x X座標 @return {number} Y座標
    function func_y2(x) {
      return Math.pow(x, 2.0) - x - 3.0;
    }
    main();
  }
  if (document.getElementById("curve").value == "3") {
    var c1 = board1.create('functiongraph', [function func_y3(x) { return Math.pow(x, 3.0) - 2.0 * x - 2.0; }], { strokeColor: '#a6d7c8' });
    const EPS = 0.0001; // constは定数の定義

    //2分法による根の計算
    function main() {
      let a = Number(number.value);
      let b = Number(number2.value);
      console.log("x^3 + x - 1 の2分法による数値計算");
      console.log("a=" + a);
      console.log("b=" + b);
      let x = nibun(a, b); // 解
      console.log("近似解 x = " + x);
      document.getElementById("span5").textContent = x;
      var p1 = board1.create('point', [x, 0.0], { strokeColor: '#efc0d5' });
      var l1 = board1.create('line', [[a, 0.0], [a, 1.0]], { strokeColor: '#efeccc' });
      var l2 = board1.create('line', [[b, 0.0], [b, 1.0]], { strokeColor: '#c5b4f4' });
    }

    //実際の計算部分 @param {number} a 計算範囲 @param {number} b 計算範囲 @return {number} 近似解
    function nibun(a, b) {
      let c, count = 0;
      do {
        c = (a + b) / 2.0; // 2分計算
        console.log(c);
        if (func_y3(c) * func_y3(a) < 0) b = c, count++; // 式(1.2)
        else a = c, count++; // 式(1.3)
      } while (Math.abs(a - b) > EPS); // 収束判別　式(1.4)の変形
      document.getElementById("span4").textContent = count;
      return c;
    }

    //根を求めたい関数 @param {number} x X座標 @return {number} Y座標
    function func_y3(x) {
      return Math.pow(x, 3.0) - 2.0 * x - 2.0;
    }
    main();
  }
}
function clickbutton7() {
  const board1 = JXG.JSXGraph.initBoard('jxgbox', {
    boundingbox: [-5, 5, 5, -5], axis: true
  });
  document.getElementById("span4").textContent = 0;
  document.getElementById("span5").textContent = 0;
}
