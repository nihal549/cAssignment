const surveyForm = document.getElementById('surveyForm');
    const resetBtn = document.getElementById('resetBtn');
    const submitBtn = document.getElementById('submitBtn');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');

    resetBtn.addEventListener('click', () => {
        surveyForm.reset();
    });

    submitBtn.addEventListener('click', () => {
        console.log("helo clicked..!")
        if (surveyForm.checkValidity()) {
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const dob = document.getElementById('dob').value;
            const country = document.getElementById('country').value;
            const genderMale = document.getElementById('male').checked ? 'Male' : '';
            const genderFemale = document.getElementById('female').checked ? 'Female' : '';
            const gender = genderMale && genderFemale ? 'Male, Female' : genderMale || genderFemale;
            const profession = document.getElementById('profession').value;
            const email = document.getElementById('email').value;
            const mobile = document.getElementById('mobile').value;

            const popupData = `
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Date of Birth:</strong> ${dob}</p>
                <p><strong>Country:</strong> ${country}</p>
                <p><strong>Gender:</strong> ${gender}</p>
                <p><strong>Profession:</strong> ${profession}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mobile Number:</strong> ${mobile}</p>
            `;

            document.getElementById('popup-data').innerHTML = popupData;
            popup.style.display = 'flex';
        }
    });

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
        surveyForm.reset();
    });
