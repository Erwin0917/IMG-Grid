(function(){

    let text = document.querySelectorAll(".img-grid-container h2");

    const tempTextOutput = Array.from(document.querySelectorAll(".img-grid-elem")).slice(-1)[0];

    
    function tempNodeHeight(tag, classname, output){
        let tempString = document.createElement(tag);

        tempString.innerText = "testString";
        tempString.classList.add(classname);
        tempString.style.color = "transparent"
        output.appendChild(tempString);

        let tagHeight = document.querySelector(`.${classname}`).offsetHeight;

        let tempElem = document.querySelector(`.${classname}`)
        output.removeChild(tempElem);

        return tagHeight;
    }

    function cutText(text){
        let tagHeight = tempNodeHeight("h2", "tempStringTest", tempTextOutput);     

        for(let string of text){

            const contWidth = string.offsetWidth,
            textTag = string.tagName;

            let newText = document.createElement(textTag),
            words = string.innerText.split(" "),
            newWidth = 0;
            

            for( let i = 0; i <= words.length; i++ ){                
                

                if( newWidth < contWidth ){
                    newText.innerText += `${words[i]} `;
                }

                string.innerText = newText.innerText;
                newWidth = string.clientWidth;
            }
            
            if( string.offsetHeight == (2 * tagHeight) ){
                string.innerHTML += "...";
            }
            
        }        
                
    }

    cutText(text);


})();



