var list = document.querySelector('.movie');
var addButton = document.querySelector('.addBtn');
var searchBtn = document.querySelector('.searchbtn');
var information = [];
var data = {};

var applyInformation = (filter) => {
    

    list.innerHTML='';

    //var filterData = !filter ? information : information.filter(movie => movie.info.title.includes(filter));
    var filterData;
    if(!filter){
        filterData = information;
    }else{
        filterData = information.filter(movie => movie.info.title.includes(filter));
    }
    
    filterData.forEach( movie => {
       var element = document.createElement('li');

       var contant = movie.info.title + '_' ;
        for(var key in movie.info){
            if(key !== 'title'){
            contant = contant + `${key}:${movie.info[key]}`
        };};
      element.textContent=contant;
      list.append(element);
      contant = '';
    });
    
}

var search = () => {
var searchData = document.querySelector('.searchdata').value;
applyInformation(searchData);
}

var addInformation = () =>{
    var title = document.querySelector('.title').value;
    var name = document.querySelector('.name').value;
    var value = document.querySelector('.value').value;

    if(title.trim() =='' || name.trim() == '' || value.trim() == ''){
        alert("chack box!");
        return
    }

    data = {
        info:{
            title,
            [name]:value
        },
        id:Math.random()
    };
  
    information.push(data);

    if(information.length == 0){
        document.querySelector('.result').classList.remove("visible");
    }else{document.querySelector('.result').classList.add("visible");}

    applyInformation();
}

addButton.addEventListener('click',addInformation);
searchBtn.addEventListener('click',search)