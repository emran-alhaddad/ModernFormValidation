const disapleAll = () => {
    var elements = document.getElementsByClassName("input");
    for (const item of elements) {
        item.disabled = true;
    }
}

const disapleAllExcept = name => {
    var elements = document.getElementsByClassName("input");
    for (const item of elements) {
        if (item.id != name.id)
            item.disabled = true;
    }
}

const enableItem = id => document.getElementById(id).disabled = false;

const enableItems = ids => {
    for (const id of ids) {
        enableItem(id);
    }
}

const validateName = name => {
    if (name.value.length > 3 && name.value.length < 10) {
        name.classList.add('inputSuccessLightThem');
        document.getElementById('age').disabled = false;
    } else {
        name.classList.remove('inputSuccessLightThem');
        disapleAllExcept(name);
    }
}

const validateAge = age => {
    if (Number(age.value) > 18) {
        age.classList.add('inputSuccessLightThem');
        document.getElementById('email').disabled = false;
    } else {
        age.classList.remove('inputSuccessLightThem');
        disapleAllExcept(age);
        enableItems(['fullName']);
    }
}

const isValidHttpUrl = string => {
    let url;

    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}


const validateURL = url => {
    if (isValidHttpUrl(url.value)) {
        url.classList.add('inputSuccessLightThem');
        document.getElementById('subject').disabled = false;
    } else {
        url.classList.remove('inputSuccessLightThem');
        disapleAllExcept(url);
        enableItems(['fullName', 'age', 'email', 'Phone', 'password', 'confPassword']);
    }
}


const validateEmail = (email) => {
    if (String(email.value)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
        email.classList.add('inputSuccessLightThem');
        document.getElementById('Phone').disabled = false;
    } else {
        email.classList.remove('inputSuccessLightThem');
        disapleAllExcept(email);
        enableItems(['fullName', 'age']);
    }
}


const validatePhone = phone => {
    if (phone.value.startsWith('777') && phone.value.length == 9) {
        phone.classList.add('inputSuccessLightThem');
        document.getElementById('password').disabled = false;
    } else {
        phone.classList.remove('inputSuccessLightThem');
        disapleAllExcept(phone);
        enableItems(['fullName', 'age', 'email']);
    }
}


function validatePassword(password) {
    if (password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,20}$/)) {
        password.classList.add('inputSuccessLightThem');
        document.getElementById('confPassword').disabled = false;
    } else {
        password.classList.remove('inputSuccessLightThem');
        disapleAllExcept(password);
        enableItems(['fullName', 'age', 'email', 'Phone']);
    }
}


const validateRePassword = rePass => {
    if (rePass.value === document.getElementById('password').value) {
        rePass.classList.add('inputSuccessLightThem');
        document.getElementById('link').disabled = false;
    } else {
        rePass.classList.remove('inputSuccessLightThem');
        disapleAllExcept(rePass);
        enableItems(['fullName', 'age', 'email', 'Phone', 'password']);
    }
}


const validateMSG = msg => {
    if (msg.value.length > 20) {
        msg.classList.add('inputSuccessLightThem');
        document.getElementById('submit').disabled = false;
    } else {
        msg.classList.remove('inputSuccessLightThem');
        disapleAllExcept(msg);
        enableItems(['fullName', 'age', 'email', 'Phone', 'password', 'confPassword', 'link']);
    }
}


const toggleThem = () => {
    var body = document.getElementsByTagName('body')[0];
    if (body.classList.contains('Dark-Them')) {
        body.classList.remove('Dark-Them');
        body.classList.add('Light-Them');
    } else {
        body.classList.remove('Light-Them');
        document.getElementsByTagName('body')[0].classList.add('Dark-Them');
    }
}