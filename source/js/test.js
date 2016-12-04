var list= [1,3,5,7,9,];
sum(list);

// 配列の合計を返す
function sum(arr) {
  var total = 0,
      len = arr.length;
  for (var i=0; i<len; i++) {
    total += arr[i];
  }
  return total;
}
