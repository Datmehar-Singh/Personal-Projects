window.onload = function(){
    var answer = 0;
    var document = window.document;
    var flag = 0;
    let flagd=0;
    var body = document.body;
    var plus = document.querySelector(".plus");
    var minus = document.querySelector(".minus");
    var multiply = document.querySelector(".multiply");
    var divide = document.querySelector(".divide");
    var equal = document.querySelector(".equal");
    var decimal = document.querySelector(".decimal");
    const numbs = document.querySelectorAll('.grid-item');
    var textar = document.querySelector('#result');
    var clear = document.querySelector('.cc');
    var operator = 'P';
    let tar = 'num';
    textar.innerText="0";

    var i = 0;
    
    //For Number Keys
    numbs.forEach(numb => numb.addEventListener('click',function(e){
        if(i<20)
        {
        if(textar.innerText=='0' || tar!='num')
        {
            textar.innerText="";
            flagd=0;
        }
        textar.insertAdjacentText('beforeend',numb.innerText);
        i++; 
        tar='num';
        }
        else if(i==20)
        {
        textar.insertAdjacentText('beforeend','e');
        i++;
        }
    }));

    //For + operator
    plus.addEventListener('click', function()
    {
        
        console.log("plus");
        if(flag==0)
        {
        firstAnswer();
        }
        else
        {
        equality();
        }
        operator ='P';
        flag++;
        tar = 'op';
        
    });

    //For - operator
    minus.addEventListener('click', function()
    {
        console.log("minus");
        if(flag==0)
        {
        firstAnswer();
        }
        else
        {
        equality();
        }
        operator = 'M';
        flag++;
        tar = 'op';
        
    });

    //For * operator
    multiply.addEventListener('click', function()
    {
        console.log("multiply");
        if(flag==0)
        {
        firstAnswer();
        }
        else
        {
        equality();
        }
        operator = 'O';
        flag++;
        tar = 'op';

    });

    //For / operator
    divide.addEventListener('click', function()
    {
        console.log("divide");
        if(flag==0)
        {
        firstAnswer();
        }
        else
        {
        equality();
        }
        operator = 'D';
        flag++;
        tar = 'op';
    }
    );

    //For = operator
    equal.addEventListener('click', function()
    {
        console.log("equal");
        tar = 'eq';
        equality();
        

    });

    //For Decimals
    decimal.addEventListener('click', function(){
        console.log("decimal");
        if(tar!='num')
        {
            flagd=0;
        }
        console.log(flagd)
        if(flagd==0)
        {
            textar.insertAdjacentText('beforeend','.');
        }
        flagd++; 
    });
    
    //For CC
    clear.addEventListener('click', function()
    {
        textar.innerText='0';
        i=0;
        flag=0;
    });
    
    
    //Functions
    function firstAnswer()
    {
        answer = parseFloat(textar.innerText);
    }
    function equality()
    {
        if(operator=='P')
        {
         answer += parseFloat(textar.innerText);
         console.log(answer);
         dispAnswer();
        }
        if(operator=='M')
        {
         answer -= parseFloat(textar.innerText);
         console.log(answer);
         dispAnswer();
        }
        if(operator=='O')
        {
            answer *= parseFloat(textar.innerText);
            console.log(answer);
            dispAnswer();
        }
        if(operator=='D')
        {
            answer /= parseFloat(textar.innerText);
            console.log(answer);
            dispAnswer();
        }
    }
    function dispAnswer()
    {
        textar.innerText = answer;
    }

    }
     