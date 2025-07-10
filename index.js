
/*const customSelects = document.querySelectorAll('.custom-select');

for (const element of customSelects){
    const selectButton = element.querySelector('.select-button');
    const selectedSpan = element.querySelector('.selected');
    const dropdown = element.querySelector('.dropdown');
    const dropdownItems = dropdown.querySelectorAll('li');

    selectButton.addEventListener('click', () => {
        element.classList.toggle('open');
        dropdown.classList.toggle('hidden');
    })
}*/




document.addEventListener('DOMContentLoaded', () => {
    const customSelects = document.querySelectorAll('.custom-select');

    customSelects.forEach(customSelect => {
        const selectButton = customSelect.querySelector('.select-button');
        const selectedSpan = customSelect.querySelector('.selected');
        const dropdown = customSelect.querySelector('.dropdown');
        const dropdownItems = dropdown.querySelectorAll('li');

        // Toggle dropdown visibility on button click
        selectButton.addEventListener('click', () => {
            customSelect.classList.toggle('open');
            dropdown.classList.toggle('hidden');
        });

        // Handle selection of an item
        dropdownItems.forEach(item => {
            item.addEventListener('click', () => {
                const selectedText = item.textContent;
                console.log(selectedText);
                selectedSpan.textContent = selectedText;


                customSelect.classList.remove('open');
                dropdown.classList.add('hidden');
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (event) => {
            if (!customSelect.contains(event.target)) {
                customSelect.classList.remove('open');
                dropdown.classList.add('hidden');
            }
        });
    });
});


const buttons = document.querySelectorAll('.text-option');

buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        let command = button.dataset['element'];

        if (command == 'createLink'){
            let url = prompt('Enter link:', 'http://');
            document.execCommand(command, false, url);
        }
        if (command == 'h1'){
            console.log('h1');
            document.execCommand('formatBlock', false, '<h1>');
        }
        if (command == 'h2'){
            document.execCommand('formatBlock', false, '<h2>');
        }

        if (command == 'font-size-small'){
            document.execCommand('fontSize', false, 1);
        }
        if (command == 'font-size-normal'){
            document.execCommand('fontSize', false, 3);
        }if (command == 'font-size-large'){
            document.execCommand('fontSize', false, 5);
        }
        if (command == 'font-size-huge'){
            document.execCommand('fontSize', false, 7);
        }


        else{
        document.execCommand(command, false, null);
        }
    })
})



/*const bold_button = document.getElementsByClassName('text-option bold');


console.log(bold_button);
console.log(bold_button.item(0));*/



/*bold_button.addEventListener('click', () =>{
    console.log("1");
    let a = window.getSelection();
    console.log(a.toString());
})*/


/*const buttons = document.querySelectorAll('.text-option');
console.log(buttons);*/