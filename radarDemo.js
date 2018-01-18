!function() {
  
    
       var operation = d3.select('body').append('div').append('h6');
    
       data = 
          [  
            {  
              "key":"Rodolfo Piza",
              "values":[  
                {  "axis":"Aventurero", "value":0.84 }, {  "axis":"Outgoing", "value":0.69 },
                {  "axis":"Intereses Artísticos", "value":0.71 }, {  "axis":"Gregariousness", "value":0.49 },
                {  "axis":"Emocional", "value":0.39 }, {  "axis":"Altruism", "value":0.78 },
                {  "axis":"Imagintivo", "value":0.41 }, {  "axis":"Susceptible to stress", "value":0.30 },
                {  "axis":"Intelectual", "value":0.56 }, {  "axis":"Cooperation", "value":0.71 },
                {  "axis":"Autoritario", "value":0.78 }, {  "axis":"Modesty", "value":0.52 },
                {  "axis":"Empeñoso", "value":0.98 }, {  "axis":"Uncompromising", "value":0.59 },
                {  "axis":"Ciudadoso", "value":0.41 }, {  "axis":"Symphaty", "value":0.89 },
                {  "axis":"Dutifulness", "value":0.84 }, {  "axis":"Trust", "value":0.69 },
                {  "axis":"Orderliness", "value":0.60 }, {  "axis":"Fiery", "value":0.52 },
                {  "axis":"Self-discipline", "value":0.90 }, {  "axis":"Prone to worry", "value":0.42 },
                {  "axis":"Activity-level", "value":0.29 }, {  "axis":"Melancholy", "value":0.38 },
                {  "axis":"Self-efficacy", "value":0.71 }, {  "axis":"Immoderation", "value":0.31 },
                {  "axis":"Assertiveness", "value":0.82 }, {  "axis":"Self-consciusness", "value":0.35 },
                {  "axis":"Cheerfulness", "value":0.21 },
                {  "axis":"Excitement-Seeking", "value":0.67 }, {  "axis":"Susceptible to stress", "value":0.79 },
                
              ]
            },
            {  
              "key":"Juan Diego Castro",
              "values":[  
                {  "axis":"Aventurero", "value":0.36 }, {  "axis":"Outgoing", "value":0.31 },
                {  "axis":"Intereses Artísticos", "value":0.63 }, {  "axis":"Gregariousness", "value":0.40 },
                {  "axis":"Emocional", "value":0.52 }, {  "axis":"Altruism", "value":0.45 },
                {  "axis":"Imagintivo", "value":0.68 }, {  "axis":"Susceptible to stress", "value":0.68 },
                {  "axis":"Intelectual", "value":0.77 }, {  "axis":"Cooperation", "value":0.34 },
                {  "axis":"Autoritario", "value":0.84 }, {  "axis":"Modesty", "value":0.53 },
                {  "axis":"Empeñoso", "value":0.28 }, {  "axis":"Uncompromising", "value":0.36 },
                {  "axis":"Ciudadoso", "value":0.40 }, {  "axis":"Symphaty", "value":0.62 },
                {  "axis":"Dutifulness", "value":0.17 }, {  "axis":"Trust", "value":0.36 },
                {  "axis":"Orderliness", "value":0.42 }, {  "axis":"Fiery", "value":0.57 },
                {  "axis":"Self-discipline", "value":0.25 }, {  "axis":"Prone to worry", "value":0.72 },
                {  "axis":"Activity-level", "value":0.42 }, {  "axis":"Melancholy", "value":0.80 },
                {  "axis":"Self-efficacy", "value":0.42 }, {  "axis":"Immoderation", "value":0.65 },
                {  "axis":"Assertiveness", "value":0.45 }, {  "axis":"Self-consciusness", "value":0.73 },
                {  "axis":"Cheerfulness", "value":0.31 },
                {  "axis":"Excitement-Seeking", "value":0.97 }, {  "axis":"Susceptible to stress", "value":0.30 },
                
                
                
              ]
            },
            {  
              "key":"Álvarez Desanti",
              "values":[  
                {  "axis":"Aventurero", "value":0.39 }, {  "axis":"Outgoing", "value":0.65 },
                {  "axis":"Intereses Artísticos", "value":0.62 }, {  "axis":"Gregariousness", "value":0.32 },
                {  "axis":"Emocional", "value":0.63 }, {  "axis":"Altruism", "value":0.65 },
                {  "axis":"Imagintivo", "value":0.38 }, {  "axis":"Susceptible to stress", "value":0.56 },
                {  "axis":"Intelectual", "value":0.57 }, {  "axis":"Cooperation", "value":0.65 },
                {  "axis":"Autoritario", "value":0.60 }, {  "axis":"Modesty", "value":0.46 },
                {  "axis":"Empeñoso", "value":0.94 }, {  "axis":"Uncompromising", "value":0.30 },
                {  "axis":"Ciudadoso", "value":0.68 }, {  "axis":"Symphaty", "value":0.70 },
                {  "axis":"Dutifulness", "value":0.98 }, {  "axis":"Trust", "value":0.56 },
                {  "axis":"Orderliness", "value":0.96 }, {  "axis":"Fiery", "value":0.58 },
                {  "axis":"Self-discipline", "value":0.87 }, {  "axis":"Prone to worry", "value":0.46 },
                {  "axis":"Activity-level", "value":0.72 }, {  "axis":"Melancholy", "value":0.47 },
                {  "axis":"Self-efficacy", "value":0.45 }, {  "axis":"Immoderation", "value":0.35 },
                {  "axis":"Assertiveness", "value":0.50 }, {  "axis":"Self-consciusness", "value":0.42 },
                {  "axis":"Cheerfulness", "value":0.25 },
                {  "axis":"Excitement-Seeking", "value":0.60 }, {  "axis":"Susceptible to stress", "value":0.38 },
                
                
                
              ]
            },

            {  
              "key":"Carlos Alvarado",
              "values":[  
                {  "axis":"Aventurero", "value":0.92 }, {  "axis":"Outgoing", "value":0.51 },
                {  "axis":"Intereses Artísticos", "value":0.72 }, {  "axis":"Gregariousness", "value":0.49 },
                {  "axis":"Emocional", "value":0.66 }, {  "axis":"Altruism", "value":0.64 },
                {  "axis":"Imagintivo", "value":0.58 }, {  "axis":"Susceptible to stress", "value":0.30 },
                {  "axis":"Intelectual", "value":0.85 }, {  "axis":"Cooperation", "value":0.81 },
                {  "axis":"Autoritario", "value":0.68 }, {  "axis":"Modesty", "value":0.13 },
                {  "axis":"Empeñoso", "value":0.95 }, {  "axis":"Uncompromising", "value":0.82 },
                {  "axis":"Ciudadoso", "value":0.72 }, {  "axis":"Symphaty", "value":0.89 },
                {  "axis":"Dutifulness", "value":0.70 }, {  "axis":"Trust", "value":0.74 },
                {  "axis":"Orderliness", "value":0.84 }, {  "axis":"Fiery", "value":0.56 },
                {  "axis":"Self-discipline", "value":0.94 }, {  "axis":"Prone to worry", "value":0.22 },
                {  "axis":"Activity-level", "value":0.92 }, {  "axis":"Melancholy", "value":0.25 },
                {  "axis":"Self-efficacy", "value":0.77 }, {  "axis":"Immoderation", "value":0.25 },
                {  "axis":"Assertiveness", "value":0.85 }, {  "axis":"Self-consciusness", "value":0.42 },
                {  "axis":"Cheerfulness", "value":0.34 },
                {  "axis":"Excitement-Seeking", "value":0.62 }, {  "axis":"Susceptible to stress", "value":0.19 },
                
              ]
            }
            
          ];


          datados = 
          [  
            {  
              "key":"Rodolfo Piza",
              "values":[  
                {  "axis":"Aventurero", "value":0.84 }, {  "axis":"Outgoing", "value":0.69 },
                {  "axis":"Intereses Artísticos", "value":0.71 }, {  "axis":"Gregariousness", "value":0.49 },
                {  "axis":"Emocional", "value":0.39 }, {  "axis":"Altruism", "value":0.78 },
                {  "axis":"Imagintivo", "value":0.41 }, {  "axis":"Susceptible to stress", "value":0.30 },
                {  "axis":"Intelectual", "value":0.56 }, {  "axis":"Cooperation", "value":0.71 },
               
                
              ]
            },
            {  
              "key":"Juan Diego Castro",
              "values":[  
                {  "axis":"Aventurero", "value":0.36 }, {  "axis":"Outgoing", "value":0.31 },
                {  "axis":"Intereses Artísticos", "value":0.63 }, {  "axis":"Gregariousness", "value":0.40 },
                {  "axis":"Emocional", "value":0.52 }, {  "axis":"Altruism", "value":0.45 },
                {  "axis":"Imagintivo", "value":0.68 }, {  "axis":"Susceptible to stress", "value":0.68 },
                {  "axis":"Intelectual", "value":0.77 }, {  "axis":"Cooperation", "value":0.34 },
               
              
                
                
                
              ]
            },
            {  
              "key":"Álvarez Desanti",
              "values":[  
                {  "axis":"Aventurero", "value":0.39 }, {  "axis":"Outgoing", "value":0.65 },
                {  "axis":"Intereses Artísticos", "value":0.62 }, {  "axis":"Gregariousness", "value":0.32 },
                {  "axis":"Emocional", "value":0.63 }, {  "axis":"Altruism", "value":0.65 },
                {  "axis":"Imagintivo", "value":0.38 }, {  "axis":"Susceptible to stress", "value":0.56 },
                {  "axis":"Intelectual", "value":0.57 }, {  "axis":"Cooperation", "value":0.65 },
            
                
                
                
              ]
            },

            {  
              "key":"Carlos Alvarado",
              "values":[  
                {  "axis":"Aventurero", "value":0.92 }, {  "axis":"Outgoing", "value":0.51 },
                {  "axis":"Intereses Artísticos", "value":0.72 }, {  "axis":"Gregariousness", "value":0.49 },
                {  "axis":"Emocional", "value":0.66 }, {  "axis":"Altruism", "value":0.64 },
                {  "axis":"Imagintivo", "value":0.58 }, {  "axis":"Susceptible to stress", "value":0.30 },
                {  "axis":"Intelectual", "value":0.85 }, {  "axis":"Cooperation", "value":0.81 },
             
                
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


