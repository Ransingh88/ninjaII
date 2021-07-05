function AddNotes(e) {
    e.preventDefault();
    let day = document.getElementById('day').value;
    let title = document.getElementById('title').value;
    let desc = document.getElementById('desc').value;

    console.log(day, title, desc)
    
    let note = {
        day,
        title,
        desc
    }

    var arr
    arr = localStorage.getItem('notes')
    console.log('notes: ', arr);
    

    if(arr == null){
        arr = []

    }
    else {
        arr = JSON.parse(localStorage.getItem('notes'))
    }

    arr.push(note)
     localStorage.setItem('notes', JSON.stringify(arr))
    console.log('arr: ', arr);
    alert('Note Added Successfully')
    
    
    document.getElementById('day').value = '';
    document.getElementById('title').value = null;
    document.getElementById('desc').value = null;
    


    
}

function searchNotes() {


    let day = document.getElementById('daay').value;

    let noteDiv = document.getElementById('noteDiv');
    
    noteDiv.innerHTML = ''

    let notes = JSON.parse(localStorage.getItem('notes'));

    notes.forEach((ele) => {
        if (ele.day == day) {
            let div = document.createElement('div')
            let title = document.createElement('h1')
            title.innerText = ele.title
            let desc = document.createElement('p')
            desc.innerText = ele.desc
            div.append(title, desc)
            noteDiv.setAttribute('class','noteDiv')
            noteDiv.append(div)
        }
    });

    //console.log({notes:{day}})
}

function reset() {

    document.getElementById('day').value = '';
    document.getElementById('title').value = null;
    document.getElementById('desc').value = null;
    
}