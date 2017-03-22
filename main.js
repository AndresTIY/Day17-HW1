var urlZa = 'http://tiny-za-server.herokuapp.com/collections/dres-list/';


var settings = {
  type: 'GET',
  dataType: 'json',
  url: urlZa
}


$.ajax(settings).then(function(data, status, xhr){

  data.forEach(function(object, i, arr){
    // console.log(object.task);
    var delButton = '<button class="delete" type="button" name="button"><i class="fa fa-times-circle" aria-hidden="true"></i></button>';
    var delButton = '<button class="delete" type="button" name="button"><i class="fa fa-times-circle" aria-hidden="true"></i></button>';
    var taskInTag = '<li class="list-item">'+object.task+delButton+'</li>';
    $('.list').append(taskInTag)
  })

})

$('.save').on('click', function(e){
  var taskName = $('.input').val();
  var postSettings = {
    type: 'POST',
    contentType: 'application/json',
    url: urlZa,
    data: JSON.stringify ({
      task: taskName
    })
  }
  $.ajax(postSettings).then(function(data, status, xhr){
    var delButton = '<button class="delete" type="button" name="button"><i class="fa fa-times-circle" aria-hidden="true"></i></button>'
    var taskTag = '<li class="list-item">'+ data.task + delButton +'</li>'

    $('.list').prepend(taskTag);
  })
  $("input").trigger("reset");
});

$('.delete-list').on('click', function(e){
  $.ajax(settings).then(function(data, status, xhr){
    data.forEach(function(item, i, arr){
      var id = item._id;
      var url = urlZa + id
      $.ajax({
        type: 'DELETE',
        url: url
      })
    })
  })
})

$('.delete').on('click', function(e){
  console.log('yay');
})
