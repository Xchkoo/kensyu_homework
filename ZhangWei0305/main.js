const form = document.getElementById('loginForm');
const statusText = document.getElementById('formStatus');
const sparkles = document.getElementById('sparkles');

const fields = [
    {
        input: document.getElementById('identity'),
        validate(value) {
            if (!value.trim()) {
                return '銉°兗銉偄銉夈儸銈广€併伨銇熴伅浼氬摗ID銈掑叆鍔涖仐銇︺亸銇犮仌銇勩€�';
            }
            return '';
        }
    },
    {
        input: document.getElementById('password'),
        validate(value) {
            if (!value.trim()) {
                return '銉戙偣銉兗銉夈倰鍏ュ姏銇椼仸銇忋仩銇曘亜銆�';
            }
            if (value.trim().length < 6) {
                return '銉戙偣銉兗銉夈伅6鏂囧瓧浠ヤ笂銇у叆鍔涖仐銇︺亸銇犮仌銇勩€�';
            }
            return '';
        }
    }
];

function renderFieldState(input, message) {
    const errorElement = input.parentElement.querySelector('.field__error');
    errorElement.textContent = message;
    input.classList.toggle('is-invalid', Boolean(message));
}

fields.forEach(({ input, validate }) => {
    input.addEventListener('input', () => {
        renderFieldState(input, validate(input.value));
        if (statusText.textContent) {
            statusText.textContent = '';
        }
    });
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let hasError = false;

    fields.forEach(({ input, validate }) => {
        const message = validate(input.value);
        renderFieldState(input, message);
        if (message && !hasError) {
            hasError = true;
            input.focus();
        }
    });

    if (hasError) {
        statusText.textContent = '鍏ュ姏鍐呭銈掔⒑瑾嶃仐銇︺€併倐銇嗕竴搴︺亰瑭︺仐銇忋仩銇曘亜銆�';
        return;
    }

    statusText.textContent = '銉偘銈ゃ兂鎯呭牨銈掔⒑瑾嶃仐銇俱仐銇熴€傘倛銇嗐亾銇濄€乼rip7澶╃┖娓╂硥銉涖儐銉伕銆�';
    form.reset();

    fields.forEach(({ input }) => {
        renderFieldState(input, '');
    });
});

for (let i = 0; i < 26; i += 1) {
    const dot = document.createElement('span');
    dot.className = 'sparkle';
    dot.style.left = `${10 + Math.random() * 80}%`;
    dot.style.top = `${8 + Math.random() * 76}%`;
    dot.style.animationDelay = `${Math.random() * 4}s`;
    dot.style.animationDuration = `${3 + Math.random() * 3}s`;
    sparkles.appendChild(dot);
}