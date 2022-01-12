import { Request } from './module/MyAjax';

const r1 = new Request('GET', 'http://localhost:51980/admin/api/settings/values/portal/portal/theme?token=6e0ef64bb581e9f26673a8913f9359641a47b77a468928efe0035f528ab670cd');
r1.addHeader('Accept', '*/*');
r1.send().then((result) => {
  console.log(`r1: ${result}`);
}).catch((error) => {
  console.log(`r1:error: ${error}`);
});

async function request2() {
  const r2 = new Request('POST', 'http://localhost:51980/api/streamingdatasets?token=6e0ef64bb581e9f26673a8913f9359641a47b77a468928efe0035f528ab670cd');
  r2.addHeader('Content-Type', 'application/json');
  r2.addHeader('Accept', '*/*');
  const data = {
    name: 'dataSetName--',
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
  return await r2.send(data);
}

request2().then((result) => {
  console.log(`r2: ${result}`);
}).catch((error) => {
  console.log(`r2:error: ${error}`);
});
