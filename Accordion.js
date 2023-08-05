
        /*===========================================================================
         ============================================================================
         ===Opening the accordion by selecting the button and targeting its========== 
         ==== parent's => parent's => secondChild(that is = accordion body)==========
         ============================================================================
         ==========================================================================*/


        // const button  = document.querySelectorAll('.button')
        // const content = document.querySelector('.content')    

        // button.forEach(function(button){
        //     button.addEventListener('click',function(btn){
        //         let clickedimage = btn.target
        //         toggleURL(clickedimage)
        //         btn.target.parentElement.parentElement.children[1].classList.toggle('active')
        //     })
        // })

        // let toggleURL = function (clickedimage) {
        //     let currentSrc = clickedimage.src
        //     let newSrc = 'http://127.0.0.1:5500/ICON/arrowUp.png'
        //     return (currentSrc === newSrc ? clickedimage.src = 'http://127.0.0.1:5500/ICON/arrowDown.png' : clickedimage.src = newSrc)
        // }






        /*===========================================================================
         ============================================================================
         ===Accordion that need to be closed they dont close automatically ========== 
         ============= when we click on some other accordion=========================
         ============================================================================ 
         ============================================================================*/


         let item = document.querySelectorAll('.accordionItem')

         item.forEach(accordion => {
             let button = accordion.querySelector('.button')
             let accordionBody = accordion.querySelector('.content')
 
             button.addEventListener('click', () => {
                 toggleURL(button)
                 accordionBody.classList.toggle('active')
             })
         })
 
 
         let toggleURL = function (img) {
             let currentSrc = img.src;
             let newSrc = 'http://127.0.0.1:5500/Accordion/ICON/arrowUp.png';

             return (currentSrc === newSrc ? img.src = 'http://127.0.0.1:5500/Accordion/ICON/arrowDown.png' : img.src = newSrc);

         }
 
 

         /*===========================================================================
          ============================================================================
          ================Accordion that  close automatically ========================
          =============== when we click on some other accordion=======================
          ============================================================================ 
          ============================================================================*/
 
          
         //  let item=  document.querySelectorAll('.accordionItem')
          
          
          
         //  item.forEach((accordion)=>{
         //      let button = accordion.querySelector('.button')
         //      let visibleContent = accordion.querySelector('.content')
              
              
         //      button.addEventListener('click',()=>{
         //          toggleButton(button)
         //          for(let i =0 ; i<item.length ;i++ ){
         //              if(item[i]=== accordion){
         //                  visibleContent.classList.toggle('active')
         //             }
         //             else{
         //                 item[i].children[1].classList.remove('active')
         //             }
         //         }
                 
         //     })
         //     const toggleButton = button=>{
         //         let currentButton = button.src
         //         let newButton = 'http://127.0.0.1:5500/ICON/arrowUp.png'
 
         //         return (newButton===currentButton? button.src = 'http://127.0.0.1:5500/ICON/arrowDown.png': button.src=newButton )
         //     }
         //  })
 