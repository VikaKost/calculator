let num1;
let num2;
let ost;
$(document).ready(function () {
  $("#calc").click(function () {
    let num1 = $("#i1").val();
    let num2 = $("#i2").val();
    let ost = $("#i3").val();
    let temp1 = num2 / num1;
    let o = ost - temp1;
    $("#res1").text(temp1);
    $("#res2").text(o);
  });
});
function result(num1, num2, ost) {
  let temp1 = num2 / num1;
  let o = ost - temp1;
  console.log(temp1);
  console.log("остаток", o);
}

//result(25, 0.3, 3.25);
