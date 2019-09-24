const fs = require('fs');

fs.readFile('./symptoms.csv', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }

  const dataCopy = data.split('\n');
  const newArray = [];

  for (let i = 0; i < dataCopy.length; i += 1) {
    const symptoms = dataCopy[i].split(', ');
    newArray.push(symptoms);
  }
  const result = [];
  let id = 0;

  for (let i = 0; i < newArray.length; i += 1) {
    const map = {};
    const symptom = newArray[i][0];
    map.id = id;
    id += 1;
    map.name = symptom;
    map.diagnosis = [];

    let diagId = 0;
    const frequency = 0;
    for (let j = 1; j < newArray[i].length; j += 1) {
      const diagMap = {};
      const diagnosisName = newArray[i][j];

      diagMap.diagId = diagId;
      diagMap.name = diagnosisName;
      diagMap.frequency = frequency;
      diagId += 1;

      map.diagnosis.push(diagMap);
    }
    result.push(map);
  }

  fs.writeFile('./symptoms.json', JSON.stringify(result), (err) => {
    if (err) {
      throw err;
    }
  });
});
