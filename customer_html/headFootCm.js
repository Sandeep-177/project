
        function loadContent(url, elementId) {
            fetch(url)
            // fetch(newUrl)
                .then(response => response.text())
                // .then(data => {document.getElementById(elementId).innerHTML = data;})
                .then(data => {
                        let element = document.getElementById(elementId);
                    if (element) {
                        element.innerHTML = data;
                        // if (callback) callback();
                    } else {
                        console.error(`Element with ID '${elementId}' not found in the DOM!`);
                    }
                })
                .catch(error => console.error(`Error loading '${url}':`, error));
            }
    
        // Load Header
        loadContent('/project/customer_html/header.html', 'head');
        // loadContent('header.html', 'head',attachNavEventListeners);

        // Load who we are
        loadContent('/project/customer_html/whoWeAre.html', 'who');

        // Load Footer
        loadContent('/project/customer_html/footer.html', 'foot');


        
// setTimeout(() => {
//     lnkCls.classList.remove("noTransition");
// }, 100);

setTimeout(() => {
    let linkImg2=document.getElementById("barImg");
    let linkImg=document.getElementById("barImg2");
    let lnkCls= document.getElementById("abAfterblink");
        // let linkImg3=document.getElementById("headerNav");
        function imgtest() {
            console.log("bar icon clicked");
            console.log(lnkCls);
            if (lnkCls.classList.contains("active")) {
                // lnkCls.forEach(element => {
                //     element.classList.remove("active");
                // });
            //     Array.from(lnkCls).forEach(element => {
            //    element.classList.remove("active");
            //     console.log('active class removed');
            //   });
            lnkCls.classList.remove("active");
              linkImg.innerHTML="<img src='/project/icon/bars-solid.svg' alt='no bar image'>";
              document.body.style.overflowX = "hidden";
                
            } else {
                // lnkCls.forEach(element => {
                //     element.classList.add("active");
                // });
            //     Array.from(lnkCls).forEach(element => {
            //    element.classList.add("active");
            //     console.log('active class added');
            //   });
            lnkCls.classList.add("active");
              linkImg.innerHTML="<img src='/project/icon/xmark-solid.svg' alt='no xmark image'>";
              document.body.style.overflowX = "hidden"; 
            }
            // Array.from(lnkCls).forEach(element => {
            //     element.classList.toggle("active");
            //     console.log('change in class');
            //   });
              console.log("exit img test function");
              
        }
        linkImg2.addEventListener('click',imgtest);
    }, 3000);

        
        


       
        