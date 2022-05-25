let userId=1;
loadUsersPosts(userId)

document.querySelector('button').addEventListener('click',function(e){
   userId++;    
    loadUsersPosts(userId)
})

function loadUsersPosts(userId){
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(response=>response.json())
    .then(data=>{
    
        data.forEach(element => {
            let card = `<div class="col-md-4 mt-2">
                        <div class="card" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.body}</p>
                        <a href="#" class="card-link text-decoration-none text-dark m-2">User : ${element.userId}</a>
                        <button class=" addbtn border border-danger"><a href="#" class="card-link text-decoration-none text-dark">Add to Bookmark</a></button>
                        </div>
                        </div> 
                        </div>`
    
            document.querySelector('.row').innerHTML += card;
        });
        
    })
}

let btns = document.querySelectorAll('.addbtn');

function BookItem(name, id, count) {
        this.Name = name,
        this.Id = id,
        this.Count = count
}

let bookmarkStr = localStorage.getItem('bookmark');
if (!bookmarkStr) {
    var bookItems = [];
} else {
    var bookItems = JSON.parse(bookmarkStr);
}


let badge = document.querySelector(".item-count");
badge.innerText = bookItems.length;


btns.forEach(el => {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        // let dataId = el.parentNode.parentNode.getAttribute('data-id');
        // let item = bookItems.find(x => x.Id == dataId);
        // if (item) {
        //     item.Count++;
        // } else {
        //     item = new BookItem("name1", dataId, 1);
        //     bookItems.push(item);
        // }

        badge.innerText = bookItems.length;

        localStorage.setItem('bookmark', JSON.stringify(bookItems));

    })

})
