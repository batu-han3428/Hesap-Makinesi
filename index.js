let sonuc = document.getElementById('sonuc');
var tuslar = document.getElementById('bodyAnaRow');
var header = document.querySelector('.header');
var ilkSayi;
var ikinciSayi;
var islem;
var islemYapildi = false;

if(sonuc.textContent == "|"){
    var ani = setInterval(() => {
        sonuc.style.visibility='hidden';
        setTimeout(function(){
            sonuc.style.visibility='visible';
        }, 500); 
    }, 1000);
 
}

tuslar.addEventListener('click',function(e){

    if(e.target.getAttribute('class').includes("border")){
       
        if(sonuc.textContent == "|"){
            sayi(e.target.textContent);
        }else{
            sayi(e.target.textContent);
            islemTuru(e.target.textContent);
        }
    }
});


function islemTuru(e){
 
    if(e == "/" || e == "x" || e == "+" || e == "-"){
        if(islemYapildi != true){
            
        
            if(sonuc.textContent != "/" && sonuc.textContent != "x" && sonuc.textContent != "+" && sonuc.textContent != "-" && ilkSayi == undefined){
                ilkSayi = Number(sonuc.textContent);
                islem = e;
                sonuc.textContent=e;

            }

        
            if(sonuc.textContent == "/" || sonuc.textContent == "x" || sonuc.textContent == "+" || sonuc.textContent == "-"){
                islem = e;
                sonuc.textContent=e;
            }
        

            if(sonuc.textContent != "/" && sonuc.textContent != "x" && sonuc.textContent != "+" && sonuc.textContent != "-" && ilkSayi != undefined && islem == e){
                ikinciSayi = Number(sonuc.textContent);

                if(islem == "/"){
                    sonuc.textContent = (ilkSayi / ikinciSayi);
                    header.innerHTML +='<span id="eklendi">Sonuç:</span>';
                    islemYapildi = true;
                }else if(islem == "x"){
                    sonuc.textContent = (ilkSayi * ikinciSayi);
                    header.innerHTML +='<span id="eklendi">Sonuç:</span>';
                    islemYapildi = true;
                }else if(islem == "-"){
                    sonuc.textContent = (ilkSayi - ikinciSayi);
                    header.innerHTML +='<span id="eklendi">Sonuç:</span>';
                    islemYapildi = true;
                }else if(islem == "+"){
                    sonuc.textContent = (ilkSayi + ikinciSayi);
                    header.innerHTML +='<span id="eklendi">Sonuç:</span>';
                    islemYapildi = true;
                }
                    
                
            }
        }
    }else if(e == "="){

        if(islemYapildi != true){
            if(sonuc.textContent != "/" && sonuc.textContent != "x" && sonuc.textContent != "+" && sonuc.textContent != "-" && ilkSayi != undefined ){
                ikinciSayi = Number(sonuc.textContent);

                if(islem == "/"){
                    sonuc.textContent = (ilkSayi / ikinciSayi);
                    header.innerHTML +='<span id="eklendi">Sonuç:</span>';
                    islemYapildi = true;
                }else if(islem == "x"){
                    sonuc.textContent = (ilkSayi * ikinciSayi);
                    header.innerHTML +='<span id="eklendi">Sonuç:</span>';
                    islemYapildi = true;
                }else if(islem == "-"){
                    sonuc.textContent = (ilkSayi - ikinciSayi);
                    header.innerHTML +='<span id="eklendi">Sonuç:</span>';
                    islemYapildi = true;
                }else if(islem == "+"){
                    sonuc.textContent = (ilkSayi + ikinciSayi);
                    header.innerHTML +='<span id="eklendi">Sonuç:</span>';
                    islemYapildi = true;
                }
                    
                
            }
        }
    }else if(e == "AC"){
        window.location.reload();
    }
};

function sayi(e){
    
    for (let index = 0; index < 10; index++) {     
        if(e == index.toString() || e == "."){
            
           if(islemYapildi != true){
    
                if(sonuc.textContent == "|" && e != "."){
                    clearInterval(ani);
                    sonuc.textContent=e;
                }else if(sonuc.textContent == "0"){
                    clearInterval(ani);
                    if(e == "."){
                        sonuc.textContent+=e;
                    }else{
                        sonuc.textContent=e;
                    }
                }else if(sonuc.textContent == "/" || sonuc.textContent == "x" || sonuc.textContent == "+" || sonuc.textContent == "-"){
                    if(e != "."){
                        clearInterval(ani);
                        sonuc.textContent=e;
                    }              
                }else if(e == "."){
                    if(!sonuc.textContent.includes(".") && sonuc.textContent != "|"){                      
                        clearInterval(ani);
                        sonuc.textContent+=e;  
                    }
                }
                else{
                    clearInterval(ani);
                    sonuc.textContent+=e;
                }   

            }
        }
    }
};