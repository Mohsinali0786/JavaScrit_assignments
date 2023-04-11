// Ques 1:

// function closureFunc(){
//     return function(num){
//         return num+5
//     }
// }

// let ans=closureFunc()
// console.log(ans(3))


// Ques 2:

// let arr=[2,6,42,8,9]

// let i=0
// function recursionSearch(num){
//         i++
//          if(arr[i-1] === num){
//             return true
                       
//         }
//         else{
//             recursionSearch(num)
//         }

// }
// let res=recursionSearch(6)
// console.log(res)


// Ques 3:

// let arrStr=[]
// function addString(addnewString) {
//     let elem=document.getElementById('main')
//     arrStr.push(addnewString)
//     elem.innerHTML=arrStr
// }

// addString('Kalim')
// addString('Ahmed')



// Question 4:

// let ulodr=document.getElementById('ullst')
// function addString(addnewString) {
//     let elem=document.createElement('li')
//     let text=document.createTextNode(addnewString)
//     elem.appendChild(text)
//     ulodr.appendChild(elem)
// }

// addString('Kalim')
// addString('Ahmed')


// Question 5

// function giveColorBg(ref,col){
//     ref.innerHTML="Hello World"
//     ref.style.backgroundColor=col
// }
// let elem=document.getElementById('main')
// giveColorBg(elem,'red')



// Question 6

// function saveData(key,obj){
//     localStorage.setItem(key,obj)
// }

// let obj={
//     name:'Mohsin',
//     MobileNo:00003533332
// }
// obj=JSON.stringify(obj)
// saveData('student',obj)


// Question 7

// function getData(key){
//     let data=localStorage.getItem('student')
//     data=JSON.parse(data)
//     return data
// }
// let result=getData('student')
// console.log(result)


// Question 8
function saveRec(key,val){
    localStorage.setItem(key,val)
    let data=localStorage.getItem(key)
    return{
        [key]:data
    }
    }

console.log(saveRec('name','Ai'))
console.log(saveRec('class',9))
