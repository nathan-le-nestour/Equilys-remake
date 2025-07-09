
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