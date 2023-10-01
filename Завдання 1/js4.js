
//1

let hh1 = document.createElement("h1");
hh1.textContent = 'Завдання 1-1';

let column = 4;
let row = 5;

document.body.appendChild(hh1);

function tableCreate(m, n) {
    const body = document.body;
    tbl = document.createElement('table');
    tbl.style.width = '100px';
    tbl.style.border = '1px solid black';
    for (let i = 0; i < m; i++) {
        const tr = tbl.insertRow();
        for (let j = 0; j < n; j++) {
            const td = tr.insertCell();
            td.style.border = '1px solid black';
            td.style.padding = '20px';
        }
    } body.appendChild(tbl);
}

tableCreate(column, row);

//2
let h1 = document.createElement("h1");
h1.textContent = 'Завдання 1-2';

// Створюємо елементи форми
const form = document.createElement('form');
const loginLabel = document.createElement('label');
const loginInput = document.createElement('input');
const passwordLabel = document.createElement('label');
const passwordInput = document.createElement('input');
const confirmPasswordLabel = document.createElement('label');
const confirmPasswordInput = document.createElement('input');
const genderLabel = document.createElement('label');
const maleRadio = document.createElement('input');
const femaleRadio = document.createElement('input');
const cityLabel = document.createElement('label');
const citySelect = document.createElement('select');
const interestsLabel = document.createElement('label');
const interestsCheckbox1 = document.createElement('input');
const interestsCheckbox2 = document.createElement('input');
const interestsCheckbox3 = document.createElement('input');
const interestsCheckbox4 = document.createElement('input');

loginInput.classList.add("input-style");
passwordInput.classList.add("input-style");
confirmPasswordInput.classList.add("input-style");
genderLabel.classList.add("label-style");
cityLabel.classList.add("label-style");
citySelect.classList.add("input-style");
interestsCheckbox1.classList.add("input-style");
interestsCheckbox2.classList.add("input-style");
interestsCheckbox3.classList.add("input-style");
interestsCheckbox4.classList.add("input-style");

// Встановлюємо атрибути для елементів форми
loginLabel.textContent = 'Логін:';
loginInput.type = 'text';
loginInput.name = 'login';
passwordLabel.textContent = 'Пароль:';
passwordInput.type = 'password';
passwordInput.name = 'password';
confirmPasswordLabel.textContent = 'Повторіть пароль:';
confirmPasswordInput.type = 'password';
confirmPasswordInput.name = 'confirmPassword';
genderLabel.textContent = 'Стать:';
maleRadio.type = 'radio';
maleRadio.name = 'gender';
maleRadio.value = 'male';
femaleRadio.type = 'radio';
femaleRadio.name = 'gender';
femaleRadio.value = 'female';
cityLabel.textContent = 'Оберіть місто:';
citySelect.name = 'city';
const cities = ['Житомир', 'Київ', 'Львів'];
cities.forEach(city => {
  const option = document.createElement('option');
  option.value = city;
  option.textContent = city;
  citySelect.appendChild(option);
});
interestsLabel.textContent = 'Виберіть інтереси:';
interestsCheckbox1.type = 'checkbox';
interestsCheckbox1.name = 'interests';
interestsCheckbox1.value = 'футбол';
interestsCheckbox1.textContent = 'футбол';

interestsCheckbox2.type = 'checkbox';
interestsCheckbox2.name = 'interests';
interestsCheckbox2.value = 'шахи';
interestsCheckbox2.textContent = 'шахи';

interestsCheckbox3.type = 'checkbox';
interestsCheckbox3.name = 'interests';
interestsCheckbox3.value = 'малювання';
interestsCheckbox3.textContent = 'малювання';

interestsCheckbox4.type = 'checkbox';
interestsCheckbox4.name = 'interests';
interestsCheckbox4.value = 'музика';
interestsCheckbox4.textContent = 'музика';

// Додаємо елементи до форми
form.appendChild(loginLabel);
form.appendChild(loginInput);
form.appendChild(document.createElement('br'));
form.appendChild(passwordLabel);
form.appendChild(passwordInput);
form.appendChild(document.createElement('br'));
form.appendChild(confirmPasswordLabel);
form.appendChild(confirmPasswordInput);
form.appendChild(document.createElement('br'));
form.appendChild(genderLabel);
form.appendChild(maleRadio);
form.appendChild(document.createTextNode('Чоловік'));
form.appendChild(femaleRadio);
form.appendChild(document.createTextNode('Жінка'));
form.appendChild(document.createElement('br'));
form.appendChild(cityLabel);
form.appendChild(citySelect);
form.appendChild(document.createElement('br'));
form.appendChild(interestsLabel);
form.appendChild(interestsCheckbox1);
form.appendChild(document.createTextNode('футбол'));
form.appendChild(interestsCheckbox2);
form.appendChild(document.createTextNode('шахи'));
form.appendChild(interestsCheckbox3);
form.appendChild(document.createTextNode('малювання'));
form.appendChild(interestsCheckbox4);
form.appendChild(document.createTextNode('музика'));
form.appendChild(document.createElement('br'));


const submitButton = document.createElement('input');
submitButton.type = 'submit';
submitButton.value = 'Відправити';

submitButton.classList.add("submit-button");

// Додаємо кнопку до форми
form.appendChild(submitButton);


// Створюємо кнопку для очищення
const clearButton = document.createElement('input');
clearButton.type = 'reset';
clearButton.value = 'Очистити';

clearButton.classList.add("clear-button");

// Додаємо кнопку для очищення до форми
form.appendChild(clearButton);


// Додаємо форму до сторінки
document.body.appendChild(h1);
document.body.appendChild(form);

