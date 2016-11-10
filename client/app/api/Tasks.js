import request from 'superagent';

export function addTaskSideEffect() {
  console.log('addTaskSideEffect');
  request.get("http://127.0.0.1:8000/api/tasks/")
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .end(function(err, res) {
      console.log('end');
      console.log(err);
      console.log(res);
    });
  /*
  const resp = fetch('/tasks', {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  if (resp.status !== 200) throw new Error(resp.statusText);
  const {data} = resp.json();
  console.log(data);
  return data;
  */
}
