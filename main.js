var count = document.getElementById('count');
var input = document.getElementById('input');

input.addEventListener('keyup', function(e){
    count.innerText = e.target.value.split(/[^\s]+/).length - 1;
});
