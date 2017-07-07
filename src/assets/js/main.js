const render = (root) =>{
  root.empty();

  const wrapper = $('<div class="wrapper"></div>');

  setTimeout(function(){
    wrapper.append(Portada(update));
  },2000);




  const update = function(){
    render(root);
  };

  root.append(wrapper);
}

const state ={
  inicial:null
}

$(_ =>{

  $.get("https://swapi.co/api/people/",(data) =>{
    if(!data){ return alert('sin data')};

    state.inicial= data.results;
    console.log(state.inicial);
  });


  const root = $('#root');
  render(root);
});
