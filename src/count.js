function Count(a){
  console.log(typeof a)
  let result = []
  for(let i=0; i<a; i++){
    if(i<=a){
      result[i] = i
    }
    else{
      result[i]= result[i-1]+1
    }
  }
  return result
}
console.log(Count(2))
console.log(Date())
console.log(new Date())
console.log(new Date().toLocaleTimeString())
