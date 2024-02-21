const express = require('express');
const xml2js = require('xml2js');
const csv = require('csv-parser');
const fs = require('fs');
const jsyaml = require('js-yaml');

const app = express();
const port = 8081;

app.get("/json", (req, res) => {
    
    fs.readFile('../data/data.json', 'utf8', (err, jsonData) => {
        if (err) {
          return res.status(500).send('Error reading JSON file: ' + err);
        }
        const parsedData = JSON.parse(jsonData);
        res.send(parsedData);
      });
});


app.get("/txt", (req, res) => {
    fs.readFile('../data/data.txt', 'utf8', (err, txtData) => {
        if (err) {
          return res.status(500).send('Error reading TXT file: ' + err );
        }
    
        
        const parsedData = { text: txtData };
        res.send(parsedData);
      });
});

app.get("/yaml", (req, res) => {
    fs.readFile('../data/data.yaml', 'utf8', (err, yamlData) => {
        if (err) {
          return res.status(500).send('Error reading YAML file: ' + err );
        }

        const parsedData = jsyaml.load(yamlData);
        res.send(parsedData);
      });
});

app.get("/csv", (req, res) => {
    fs.readFile('../data/data.csv', 'utf8', (err, csvData) => {
        if (err) {
          return res.status(500).send('Error reading CSV file: ' + err );
        }

        const parsedData = []; 
        require('stream').Readable.from(csvData)
        .pipe(csv())
        .on('data', (row) => {
            parsedData.push(row);
        })
        .on('end', () => {
            res.send(parsedData);
        });
      });
});


app.get("/xml", (req, res) => {
    fs.readFile('../data/data.xml', 'utf8', (err, xmlData) => {
        if (err) {
          return res.status(500).send('Error reading XML file: ' + err );
        }
    
        
        xml2js.parseString(xmlData, (err, result) => {
            if (err) {
              return res.status(500).send('Error parsing XML: ' + err);
            }
            res.send(result);
          });
      });
});

app.listen(port);