// 1. Palindrome Check
function pallindrome(num){
  let rev=0;
 let n=num;
 while(num>0){
  let d= num%10;
  rev=rev*10 +d;
  num=Math.floor(num/10);

 }
 if(n== rev){
   console.log("pallindrome");
 }
 else {
   console.log(" not pallindrome");
 }
}

// 2. Even Or Odd
function oddEven(n){
  
  if( n % 2==0){
    console.log("EVEN number");
  }
  else{
    console.log("Odd number");
  }
}


// 3. Fibonacci Sequence
function Fibonacci(a){
  let n1=0;
  let n2=1;
  console.log(n1);
  console.log(n2);
  for(i=2;i<=a;i++){
    let n3=n1+n2;
    console.log(n3);
    n1=n2;
    n2=n3;
  }
}

// 4. Factorial of a number
function factorial(b){
 let fact=1;
  for (let i = 1; i <= b; i++) {
    fact *= i;
  }
  return fact;
}

// 5. Reverse a string
function reverseString(str){
  let rev=" ";
 for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}
// 6. Maximum in Array
function arr(ar)
{
  let max= ar[0];
  for(let i=0;i<=ar.length;i++)
  {
   if(ar[i]>max)
    {
      max = ar[i];
    }
  } 
return max;
}

// 7. Count vowels in string
function vowel(str)
{
 let count=0;
 let vowels="aeiouAEIOU";
 for(i=str.length-1;i>=0;i--)
 {
   if(vowels.includes(str[i]))
   {
    count++;
   }
 }
 return count;
}

// 8. Sum of digits
function sum(sum)
{
 let sum1=0;
 let digit;
 while(sum>0)
 {
  digit=sum%10;
  sum1=sum1+digit;
  sum=Math.floor(sum/ 10);
 }
 return sum1;
}

// 9. Prime Number
function primeNumber(p)
{
 if (p <= 1) {
    return false;  
  }

  for (let i = 2; i < p; i++) 
    {   
    if (p % i === 0) 
    {
      return "not prime number";  
    }
  }
  return "prime number";   
}

// 10. Remove Duplicates from Array 
function duplicate(arr){
 let res=[];
 for(let i = 0; i < arr.length; i++)
 {
  if(!res.includes(arr[i]))
  {
     res.push(arr[i]);
  }
 }
 return res;
}