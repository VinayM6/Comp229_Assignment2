/*
File Name - app.js
Student Name - VinayKumar Mannem
Student Id - 301211306
Date - 20-10-2021
 */
//function to get confirmation from user for any button where class is btn-danger
(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');
        
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")) 
                {
                    event.preventDefault();
                    window.location.assign('/user-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();