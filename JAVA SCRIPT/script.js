document.addEventListener('DOMContentLoaded', () => {
    const editButtons = document.querySelectorAll('.edit-button');
    const saveButton = document.getElementById('save-button');
    const cancelButton = document.getElementById('cancel-button');
    const profileForm = document.getElementById('profile-form');

    let originalValues = {};

    editButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const inputField = document.getElementById(targetId);
            
            if (inputField.disabled) {
                originalValues[targetId] = inputField.value;
                inputField.required = false;
                saveButton.required = false;
                cancelButton.required = false;
            }
        });
    });

    saveButton.addEventListener('click', () => {
        const inputs = profileForm.querySelectorAll('input');
        inputs.forEach(input => {
            input.required = true;
        });
        saveButton.required = true;
        cancelButton.required = true;
        alert('Profile updated successfully!');
    });

    cancelButton.addEventListener('click', () => {
        const inputs = profileForm.querySelectorAll('input');
        inputs.forEach(input => {
            input.value = originalValues[input.id];
            input.required = true;
        });
        saveButton.required = true;
        cancelButton.required = true;
    });
});
