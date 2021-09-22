const form = (formSelector) => {
    const forms = document.querySelectorAll(formSelector);

    const message = {
        succes: `Данные отправлены скоро мы с вами свяжемся.`,
        send: 'Идет отправка данных...',
        error: 'Произошла ошибка.'
    };

    const postData = async (url, data) => {

        let res = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: data
        });

        return await res;
    };

    const bindData = (form) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
        
            const div = document.createElement('div');
            div.classList.add('form__thanks-message');
            div.innerHTML = message.send;
            form.append(div);


            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            
            postData('https://jsonplaceholder.typicode.com/posts/', json)
            .then((data) => {
                if (!data.ok) {
                    const error = new Error(data.status);
                    throw error;
                }
                formMessage(form, message.succes);
            })
            .catch((data) => {
                formMessage(form, message.error);
                console.log(data);
            })
            .finally(() => {
                div.remove();
                form.reset();
            });    
        });
    };

    const formMessage = (form, msg) => {
        const div = document.createElement('div');
        div.classList.add('form__thanks-message');
        div.innerHTML = msg;
        form.append(div);

        setTimeout(() => {
            div.remove();
        }, 3000);
    };

    forms.forEach(form => {
        bindData(form);
    });

};

export default form;
