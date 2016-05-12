var ww = new Worker('/js/worker.js');
ww.onmessage = function (e) {
  var worker_data = e.data;
  doc = worker_data.value;
  $("#preview").attr('src', doc);
};

$('button').on('click', function() {
  ww.postMessage($("#name").val());
});
