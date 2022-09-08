const { template } = require('@babel/core')

function concatArray(array1, array2) {
  a=array1;
  b=array2;
  if((a==null||a==undefined) && (b==null ||b==undefined)){
  return undefined;
  }else if(b==null ||b==undefined){
  return a;
  }else if(a==null||a==undefined){
  return b;
  }else{
    c=a.concat(b);
    return c;
  }
  
  
}
module.exports = concatArray

//console.log(concatArray(undefined, [2, 4, 6, 7]));