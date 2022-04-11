let count = 0;
let countEl = document.getElementById('count-el');
function increment(){
    count+=1
    // console.log(count);
    countEl.textContent = count;

}
let saveEl = document.getElementById('save-el');
let savedCount;
function save(){
    savedCount = count + ' ' + ' - ';
    saveEl.textContent += savedCount;
    count = 0
    countEl.textContent = 0
    
}
