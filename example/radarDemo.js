!function() {
  
    
       var operation = d3.select('body').append('div').append('h6');
    
       data = 
          [  
            {  
              "key":"Rodolfo Piza",
              "values":[  
                {  "axis":"Strucure", "value":0.55 }, {  "axis":"Ideal", "value":0.56 },
                {  "axis":"Stability", "value":0.87 }, {  "axis":"Harmony", "value":0.25 },
                {  "axis":"Self-expression", "value":0.55 }, {  "axis":"Excitement", "value":0.43 },
                {  "axis":"Practicality", "value":0.49 }, {  "axis":"Curiosity", "value":0.20 },
                {  "axis":"Love", "value":0.59 }, {  "axis":"Closeness", "value":0.90 },
                {  "axis":"Liberty", "value":0.35 }, {  "axis":"Challenge", "value":0.27 },
              
                
              ]
            },
            {  
              "key":"Juan Diego Castro",
              "values":[  
                {  "axis":"Strucure", "value":0.23 }, {  "axis":"Ideal", "value":0.33 },
                {  "axis":"Stability", "value":0.71 }, {  "axis":"Harmony", "value":0.28 },
                {  "axis":"Self-expression", "value":0.22 }, {  "axis":"Excitement", "value":0.33 },
                {  "axis":"Practicality", "value":0.49 }, {  "axis":"Curiosity", "value":0.22 },
                {  "axis":"Love", "value":0.42 }, {  "axis":"Closeness", "value":0.34 },
                {  "axis":"Liberty", "value":0.30 }, {  "axis":"Challenge", "value":0.26 },
              
                
              ]
            },
            {  
              "key":"Álvarez Desanti",
              "values":[  
                {  "axis":"Strucure", "value":0.10 }, {  "axis":"Ideal", "value":0.29 },
                {  "axis":"Stability", "value":0.94 }, {  "axis":"Harmony", "value":0.69 },
                {  "axis":"Self-expression", "value":0.18 }, {  "axis":"Excitement", "value":0.29 },
                {  "axis":"Practicality", "value":0.39 }, {  "axis":"Curiosity", "value":0.25 },
                {  "axis":"Love", "value":0.32 }, {  "axis":"Closeness", "value":0.11 },
                {  "axis":"Liberty", "value":0.45 }, {  "axis":"Challenge", "value":0.21 },
              
                
              ]
            },

            {  
              "key":"Carlos Alvarado",
              "values":[  
                {  "axis":"Strucure", "value":0.91 }, {  "axis":"Ideal", "value":0.39 },
                {  "axis":"Stability", "value":0.89 }, {  "axis":"Harmony", "value":0.45 },
                {  "axis":"Self-expression", "value":0.33 }, {  "axis":"Excitement", "value":0.12 },
                {  "axis":"Practicality", "value":0.53 }, {  "axis":"Curiosity", "value":0.90 },
                {  "axis":"Love", "value":0.34 }, {  "axis":"Closeness", "value":0.22 },
                {  "axis":"Liberty", "value":0.37 }, {  "axis":"Challenge", "value":0.53 },
              
                
              ]
            }
            
          ];


       

         /* setTimeout(function() { 
            operation.text(' radarChart.data(data).duration(1000).update(); ');
            radarChart.invert(4).update();
         }, 200);   */

        /* setTimeout(function() { 
          operation.text(" radarChart.invert(4).update(); ");
          radarChart.invert(4).update();
         }, 200);  */
         
        setTimeout(function() { 
          operation.text(' radarChart.data(data).duration(1000).update(); ');
          radarChart.data(data).duration(1000).update();
          operation.html(" radarChart.options({'legend': {display: true}}); <br> radarChart.colors({'Álvarez Desanti': 'blue', 'Juan Diego Castro': 'red', 'Rodolfo Piza': 'yellow'}).update(); ");
          radarChart.options({'legend': {display: true}});
          radarChart.colors({'Álvarez Desanti': 'green', 'Juan Diego Castro': 'red', 'Rodolfo Piza': 'blue','Carlos Alvarado': 'yellow'}).update();
       }, 200);

/* 
       setTimeout(function() { 
        operation.text(' radarChartdos.datados(datados).duration(1000).update(); ');
        radarChart.datados(datados).duration(1000).update();
        operation.html(" radarChartdos.options({'legend': {display: true}}); <br> radarChartdos.colors({'Álvarez Desanti': 'blue', 'Juan Diego Castro': 'red', 'Rodolfo Piza': 'yellow'}).update(); ");
        radarChart.options({'legend': {display: true}});
        radarChart.colors({'Álvarez Desanti': 'green', 'Juan Diego Castro': 'red', 'Rodolfo Piza': 'blue','Carlos Alvarado': 'yellow'}).update();
     }, 200); */


      /*  setTimeout(function() { 
        operation.html(" datados.forEach(function(e) { e.values.forEach(function(v) { v.value = (Math.random() * .6) + .2; }) })<br> radarChart.data(datados).update(); ");
        chart_data = JSON.parse(JSON.stringify(datados));
        chart_data.forEach(function(e) { e.values.forEach(function(v) { v.value = (Math.random() * .6) + .2; }) })
        radarChart.data(chart_data).update();
     }, 4000); */
  

   

       /* setTimeout(function() { 
        operation.html(" radarChart.options({'legend': {display: true}}); <br> radarChart.colors({'Álvarez Desanti': 'blue', 'Juan Diego Castro': 'red', 'Rodolfo Piza': 'yellow'}).update(); ");
        radarChart.options({'legend': {display: true}});
        radarChart.colors({'Álvarez Desanti': 'blue', 'Juan Diego Castro': 'red', 'Rodolfo Piza': 'yellow'}).update();
     }, 4000);
      */
       
       /* setTimeout(function() { 
          operation.html(" radarChart.options({'legend': {display: true}}); <br> radarChart.colors({'Álvarez Desanti': 'blue', 'Juan Diego Castro': 'red', 'Rodolfo Piza': 'yellow'}).update(); ");
          radarChart.options({'legend': {display: true}});
          radarChart.colors({'Álvarez Desanti': 'blue', 'Juan Diego Castro': 'red', 'Rodolfo Piza': 'yellow'}).update();
       }, 4000);
       
       setTimeout(function() { 
          operation.html(" radarChart.filterAxes(7); <br> radarChart.options({circles: {maxValue: 1, levels: 4}}).update(); ");
          radarChart.filterAxes(7);
          radarChart.options({circles: {maxValue: 1, levels: 4}}).update();
       }, 8000);
       
       setTimeout(function() { 
          operation.text(" radarChart.maxValue(.5).levels(7).update(); ");
          radarChart.maxValue(.5).levels(7).update();
       }, 12000);
       
    
    
       setTimeout(function() { 
          operation.text(" radarChart.ranges({'Fiery': [-1, 2]}).update(); ");
          radarChart.ranges({'Fiery': [-1, 2]}).update();
       }, 20000);
    
       setTimeout(function() { 
          operation.html(" data.forEach(function(e) { e.values.forEach(function(v) { v.value = (Math.random() * .6) + .2; }) })<br> radarChart.data(data).update(); ");
          chart_data = JSON.parse(JSON.stringify(data));
          chart_data.forEach(function(e) { e.values.forEach(function(v) { v.value = (Math.random() * .6) + .2; }) })
          radarChart.data(chart_data).update();
       }, 24000);
    
       setTimeout(function() { 
          operation.html(" var one = radarChart.slice(1, 2); <br> radarChart.data(one).update(); ");
          var one = radarChart.slice(1, 2);
          radarChart.data(one).update();
       }, 28000);
    
       setTimeout(function() { 
          operation.html(" radarChart.ranges({'Fiery': []}).invert(4); <br> radarChart.data(data).update(); ");
          radarChart.ranges({'Fiery': []}).invert(4);
          radarChart.data(data).update();
       }, 32000);
    
       setTimeout(function() { 
          operation.html(" radarChart.options({circles: {fill: 'violet'}}); <br> radarChart.options({axes: {lineColor: 'lightyellow'}}); <br> radarChart.options({circles: {color: '#FF99CC'}}); <br> radarChart.colors({'Álvarez Desanti': 'black', 'Juan Diego Castro': 'green', 'Rodolfo Piza': 'purple'}); ");
          radarChart.options({circles: {fill: 'violet', color: '#FF99CC'}});
          radarChart.options({axes: {lineColor: "lightyellow"}});
          radarChart.colors({'Álvarez Desanti': 'black', 'Juan Diego Castro': 'green', 'Rodolfo Piza': 'purple'});
          radarChart.update();
       }, 36000);
    
       setTimeout(function() { 
          operation.text(" radarChart.options({circles: {maxValue: 1, levels: 3}, legend: {symbol: 'circle'}, filter: false}).update(); ");
          radarChart.options({circles: {maxValue: 1, levels: 3}, legendSymbol: 'circle', filter: false}).update();
       }, 40000);
    
       setTimeout(function() { 
          operation.text(" radarChart.height(300).width(300).options({'areas': {'dotRadius': 2}}).update(); ");
          radarChart.height(300).width(300).options({'areas': {'dotRadius': 2}}).update();
       }, 44000);
    
       setTimeout(function() { 
          operation.text(" radarChart.height(500).width(500).options({'areas': {'dotRadius': 4}}).update(); ");
          radarChart.height(600).width(600).options({'areas': {'dotRadius': 4}}).update();
       }, 48000);
    
       setTimeout(function() { 
          operation.html(" radarChart.options({circles: {fill: '#CDCDCD', color: '#CDCDCD'}}); <br> radarChart.options({axes: {lineColor: 'white'}}); <br> radarChart.colors({}).data(data).update(); <br> radarChart.maxValue(.5).levels(7).filterAxes(7);");
          radarChart.options({circles: {fill: '#CDCDCD', color: '#CDCDCD'}});
          radarChart.options({axes: {lineColor: 'white'}, filter: 'glow'});
          radarChart.maxValue(.5).levels(7).filterAxes(7);
          radarChart.colors({}).data(data).update();
       }, 52000);

       setTimeout(function() { 
        operation.text(" radarChart.invert(4).update(); ");
        radarChart.invert(4).update();
     }, 16000);
     */
    }();


