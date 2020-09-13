var no_notes = {
    number: 0
}
document.querySelector('#add').addEventListener('click', function () {
    document.querySelector('#sugest').innerHTML = " ";
    var a = document.querySelector('table').innerHTML;
    var b = " <tr><td> <span>Untitled Document</span> <a title='Delete' onClick='remove(this)' id='delete'> Delete <a/><a title='Rename' id='Rename' onClick='opentitlearea(this)' > Rename <a/> <a id='open' title='Open' onClick='openDoc(this)' > Open </a> <a title='Edit' onClick='writingtextarea(this)' id='Edit'> Edit </a> <div id='titlearea'><input type='text' placeholder='Your title goes here...' id='Title' /> <input type='button' onClick='savethedoc(this)' value='Save' id='save'/></div> <br/><div id='textarea'><div>Empty document !</div> <a title='Cancle'  onClick='cancle(this)' id='Cancle'> Cancle </a> </div><div id='textarea'><textarea></textarea><br/><input type='button' value='Save' onClick='setvalue(this)' id='savedit'/></div></td></tr>";
    var c = a.concat(b);
    document.querySelector('table').innerHTML = c;
    no_notes.number++;
    document.querySelector('#no_notes').value = no_notes.number;
});

function remove(deleteit) {

    deleteit.parentNode.parentNode.parentNode.innerHTML = "";
    no_notes.number--;
    document.querySelector('#no_notes').value = no_notes.number;
}

function opentitlearea(area) {
    area.parentNode.children[7].setAttribute('id', 'distitle');

}
function savethedoc(savingdoc) {
    var x = savingdoc.parentNode.children[0].value;
    savingdoc.parentNode.parentNode.children[0].innerText = x;
    savingdoc.parentNode.setAttribute('id', 'titlearea');
}
function openDoc(open) {
    open.parentNode.children[9].setAttribute('id', 'disfulldocument');

}
function removenext(element) {
    element.parentNode.parentNode.parentNode.innerHTML = " ";
}
function cancle(cancleit) {
    cancleit.parentNode.setAttribute('id', 'textarea');
}
function writingtextarea(apply) {
    apply.parentNode.children[10].setAttribute('id', 'disfulldocument');
}
function setvalue(set) {
    var z = set.parentNode.children[0].value;
    set.parentNode.previousSibling.children[0].innerText = z;
    set.parentNode.setAttribute('id', 'titlearea');
}
