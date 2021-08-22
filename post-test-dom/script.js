
//soal no. 1

const button1 = document.getElementById('buttonSatu')
button1.addEventListener('click', function(){

    const sectionASatu = document.getElementsByClassName('p1')[0];
    const sectionADua = document.getElementsByClassName('p2')[0];
    const sectionATiga = document.getElementsByClassName('p3')[0];

    const sectionB = document.querySelector('#b p');

    const sectionC = document.querySelector('#c p');
    // const sectionC = document.getElementById('c');


    sectionASatu.style.backgroundColor = 'orange';
    sectionADua.style.backgroundColor = 'orange';
    sectionATiga.style.backgroundColor = 'orange';
    sectionB.style.backgroundColor = 'orange';
    sectionC.style.backgroundColor = 'orange';
    // const ubahButtonSatu = document.querySelector('#body p')
    // ubahButtonSatu.style.backgroundColor = "orange"
    
})


//soal no. 2

const button2 = document.getElementById('buttonDua')
button2.addEventListener('click', function(){

    button2.style.backgroundColor = "violet"
    button2.style.color = 'white'
    button2.style.fontFamily = 'calibri';
    
})

// soal nomer 3
const button3 = document.getElementById('buttonTiga')
button3.addEventListener('click', function(){

    const sectionASatu = document.getElementsByClassName('p1')[0];
    const sectionADua = document.getElementsByClassName('p2')[0];
    const sectionATiga = document.getElementsByClassName('p3')[0];

    const sectionB = document.querySelector('#b p');

    const sectionC = document.getElementById('c');


    sectionASatu.style.color = 'red';
    sectionADua.style.color = 'red';
    sectionATiga.style.color = 'red';
    sectionB.style.color = 'red';
    sectionC.style.color = 'red';
    sectionASatu.style.fontFamily = 'calibri';
    sectionADua.style.fontFamily = 'calibri';
    sectionATiga.style.fontFamily = 'calibri';
    sectionB.style.fontFamily = 'calibri';
    sectionC.style.fontFamily = 'calibri';

    // const ubahButtonSatu = document.querySelector('#body p')
    // ubahButtonSatu.style.backgroundColor = "orange"
})

// soal nomer 4 
const button4 = document.getElementById('buttonEmpat')
button4.addEventListener('click', function(){

    // const cariP = document.querySelectorAll('.p');
    // const cariPDiganti = document.querySelector('p')
    // const a = document.getElementById('c')
    // a.style.fontFamily = 'calibri'
    // cariP.style.fontSize='30px'

    // const satu = document.querySelector('p');
	// const banyak = document.querySelectorAll('.p');	
	// // satu.style.fontSize  = '30px';
    // // banyak.style.fontFamily ='calibri'
	
	// for (var i=0;i<banyak.length;i++)
	// {
	// 	banyak[i].style.fontFamily = 'calibri';
	// }
    

    const sectionASatu = document.getElementsByClassName('p1')[0];
    const sectionADua = document.getElementsByClassName('p2')[0];
    const sectionATiga = document.getElementsByClassName('p3')[0];

    const sectionB = document.querySelector('#b p');

    // const sectionC = document.querySelector('#c p');
    const sectionC = document.getElementById('c')
    // a.style.fontFamily = 'calibri'

    sectionASatu.style.fontSize = '20px';
    sectionADua.style.fontSize = '20px';
    sectionATiga.style.fontSize = '20px';
    sectionB.style.fontSize = '20px';
    sectionC.style.fontSize = '20px';
    
})

//soal button no. 5

const button5 = document.getElementById('buttonLima')
button5.addEventListener('click', function(){

    const warnaLuar = document.getElementById('container')
    warnaLuar.style.backgroundColor = "lightblue"

})

//soal no. 6
const button6 = document.getElementById('buttonEnam')
button6.addEventListener('click', function(){

    // const ubahH2 = document.getElementById('p1');
    const ubahH2 = document.getElementsByClassName('p1')[0];
    const tagH2 = document.createElement('h2');
    tagH2.innerHTML = "replaced p1!";
    ubahH2.parentNode.replaceChild(tagH2,ubahH2)
    // ubahH2.classList.replace('p1','h2')

// const h2 = document.createElement('h2')
// const tulisanBaru = document.createTextNode('Para Mentor')
// //gabungkan node text ke h2
// h2.appendChild(tulisanBaru)

// //define p4
// const sectionB = document.getElementsByClassName('p1')[0];
// const p4 = sectionB.getElementsByClassName('p1')[0];

// //define parentNode


// // replace p4 menjadi h2
// sectionB.replaceChild(h2,p4);

});

//soal button no. 7

const button7 = document.getElementById('buttonTujuh')

button7.addEventListener('click',function(){
    const elemenDihapus = document.querySelector('#b li')
    elemenDihapus.removeChild(elemenDihapus.childNodes[0]);
    const newLi = document.createElement('li')
    const isiNewLi = document.createTextNode('Mentor Baru')
    const ul = document.querySelector('#b ul')
    newLi.appendChild(isiNewLi)
    ul.appendChild(newLi);
    
    
})

button7.addEventListener('dblclick', function(){
    const elemenDihapus = document.querySelector('#b li')
    elemenDihapus.removeChild(elemenDihapus.childNodes[0]);
}) 

//soal button no. 8

const button8 = document.getElementById('buttonDelapan')
button8.addEventListener('click', function(){

    const elementDiubah = document.getElementById('judul')  ; 
    elementDiubah.innerHTML= 'Post Test';
})

//soal button no. 9

const button9 = document.getElementById('buttonSembilan')
button9.addEventListener('click', function(){

    const elemen = document.querySelector('a')
    elemen.parentNode.removeChild(elemen)

})

//soal button no. 10

const button10 = document.getElementById('buttonSepuluh');

button10.addEventListener('click',function(){
    
    const a = document.createElement('a');
      const letak = document.getElementById('c')
      const linkText = document.createTextNode("link github medita");
      a.appendChild(linkText);
      a.title = "my title text";
      a.href = "https://github.com/meditakurnia";
      letak.appendChild(a);
    
})






