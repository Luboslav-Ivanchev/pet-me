function solve() {

     let inputElements=Array.from(document.querySelectorAll('#container input'));

      let[name,age,kind,owner]=inputElements;

      let adoption=document.querySelector('#adoption ul')

    console.log(adoption);

       let button=document.querySelector('#container button');
   
       button.addEventListener('click',function (e) {


           let liElement=document.createElement('li');
           let pElement=document.createElement('p');
           let spanElement=document.createElement('span');

           let buttonElement=document.createElement('button');
           buttonElement.textContent=`Contact with owner`;
           spanElement.textContent=`Owner:${owner.value}`;

           pElement.textContent=`${name.value} is a ${age.value} year old ${kind.value}`


           liElement.appendChild(pElement);
           liElement.appendChild(spanElement);
           liElement.appendChild(buttonElement);
           adoption.appendChild(liElement);

           name.value='';
           age.value='';
           kind.value='';
           owner.value='';



           buttonElement.addEventListener('click',function (e) {

               let parent=e.currentTarget.parent;
               e.currentTarget.remove();

               let divElement=document.createElement('div');
               let inputElement=document.createElement('div');
               let takeButtonElement=document.createElement('button');

               takeButtonElement.setAttribute('placeholder','Enter your names');
               takeButtonElement.textContent='Yes i take it ';
               divElement.appendChild(inputElement);
               divElement.appendChild(takeButtonElement);

               takeButtonElement.addEventListener('click',onTakeItButtonClick);
               
           })

           function onTakeItButtonClick() {

               let liElement=e.currentTarget.parentElement.parentElement;
               adoption.appendChild(liElement);

               let newOwnerInputElement=liElement.querySelector('input');
               let ownerNameSpanElement=liElement.querySelector('span');

               let newOwnerName=newOwnerInputElement.value;
               ownerNameSpanElement.textContent=`New owner:${newOwnerName}`;

               buttonElement.remove();

               let checkedButtonElement=document.createElement('button');
               checkedButtonElement.textContent='Checked';

               liElement.appendChild(checkedButtonElement);

               checkedButtonElement.addEventListener('click',e=>{
                   e.currentTarget.parentElement.remove();
               })

           }
           
});
}

