import {MyRequest} from './module/MyAjax';

const r1 = new MyRequest('GET', 'http://localhost:51980/admin/api/settings/values/portal/portal/theme?token=6e0ef64bb581e9f26673a8913f9359641a47b77a468928efe0035f528ab670cd');
r1.addHeaders({
  'Accept': '*/*'
});
r1.fetchData().then((result) => {
  console.log(`r1: ${result}`);
}).catch((error) => {
  console.log(`r1:error: ${error}`);
});

async function request2() {

  const r2 = new MyRequest('POST', 'http://localhost:51980/api/streamingdatasets?token=6e0ef64bb581e9f26673a8913f9359641a47b77a468928efe0035f528ab670cd');
  r2.addHeaders({
    'Content-Type': 'application/json',
    'Accept': '*/*',
  });
  const data = {
    name: 'dataSetName',
    columns: [
      {
        AddIndex: false, Name: 'test', Type: 'Number', FieldDescription: '', DbColumnName: 'column_1',
      },
    ],
    comment: '',
    tagIds: [],
    residenceTime: 900000,
    residenceTimeUnit: 'minutes',
    pushDataToken: '16RTaaQGnLWizRPg8ksF',
  };
  return await r2.fetchData(data);
}

request2().then((result) => {
  console.log(`r2: ${result}`);
}).catch((error) => {
  console.log(`r2:error: ${error}`);
});
