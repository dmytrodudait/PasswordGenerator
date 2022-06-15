var reg = new RegExp('.', 'g');

var passwordElement = document.getElementById('password');
var passwordText = passwordElement.textContent;
const toastLiveExample = document.getElementById('liveToast');

// console.log(document.querySelectorAll('.cube'));

document.querySelectorAll('.cube').forEach((cube) => {
    cube.addEventListener("click", () => {
        navigator.clipboard.writeText(passwordElement.textContent);

        const toast = new bootstrap.Toast(toastLiveExample);
        toast.show();

        var passHolder = document.getElementsByClassName('password')[0];
        for (let i = 0; i < passHolder.children.length; i++) {
            setTimeout(() => {
                passHolder.children[i].classList.add('show-bottom');
            }, 100 * i);
        }
    });
});