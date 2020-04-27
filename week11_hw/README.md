## Week 11 Assignment

#### Task
You can follow any concept you want as long as you use one of the followings
* React
* Angular
* Vue (If you already know it)
* Node.js
* D3 + Three.js

#### Solution
Base on the [previous project](https://github.com/yujunmjiang/WebAdvanced_Spring2020_jiany023/tree/master/week8_hw) about the re-design of the NYPD's [CompStat 2.0](https://compstat.nypdonline.org/2e5c3f4b-85c1-4635-83c6-22b27fe7c75c/view/89) virtual portal, I have re-constructed the whole website with [Vue.js](https://vuejs.org/) and connected it to other APIs. In this version, I can move my code from the server side into a browser. Vue.js is an approachable JavaScript framework which can provide maintainable and testable code base.

```JavaScript
import axios from 'axios'

  mounted: function() {

    axios.get('copy and paste my API url in here')
         .then((r) => {
           this.incidents = r.data;
         })
  }
```

In the beginning, I linked the metadata of [NYPD Shooting Incident Data (Year To Date)](https://data.cityofnewyork.us/Public-Safety/NYPD-Shooting-Incident-Data-Year-To-Date-/5ucz-vwe8) to my Vue application by `mounted` function. The reason is I do not have to convert and save any of them as GeoJSON on Mapbox. Then, I can run command `npm run serve` in my console and print the data in a browser to check if the connection is successful as below:

<img src="https://github.com/yujunmjiang/WebAdvanced_Spring2020_jiany023/blob/master/week11_hw/image/Screen%20Shot%202020-04-26%20at%206.49.09%20PM.png" width="50%"/>

As the UI building process, I used [Bootstrap](https://getbootstrap.com/) library to build my entire application with Sass variables, responsive grid system, and extensive prebuilt components.
