function getProp(){
let city = document.getElementById("cityname").value;
var y=document.getElementById("city");
y.innerHTML = "<h3>Weather at "+city+"</h3>"

let weather = fetch("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=3dd0107503cefb19bbf5bc1b2c2b6a1a");
// console.log(weather);
weather.then((result)=>{
     let res = result.json();
     res.then((finalRes)=>{

      var d=[];
      var v=[];
      for(var i=1,j=0;i<40;i=i+8,j++){
         d[j] = finalRes.list[i].dt_txt.slice(0,10);
         v[j] = finalRes.list[i].main.temp;
         
      }

         // don't edit this
         var ctx = document.getElementById('myChart').getContext('2d');
         var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: d,
                datasets: [{
                    label: 'Temprature',
                    data:  v,


                    backgroundColor: [
                        'rgba(255, 99, 132, 1.5)',
                        'rgba(54, 162, 235,1.5)',
                        'rgba(255, 206, 86, 1.5)',
                        'rgba(75, 192, 192, 1.5)',
                        'rgba(153, 102, 255, 1.5)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1.9)',
                        'rgba(54, 162, 235, 1.9)',
                        'rgba(255, 206, 86, 1.9)',
                        'rgba(75, 192, 192, 1.9)',
                        'rgba(153, 102, 255, 1.9)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            }
        });
     })
})
}
