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

In the beginning, I linked the metadata of [NYPD Shooting Incident Data (Year To Date)](https://data.cityofnewyork.us/Public-Safety/NYPD-Shooting-Incident-Data-Year-To-Date-/5ucz-vwe8) to my Vue application by `mounted` function. So, I do not have to convert and save any of them as GeoJSON on [Mapbox](https://www.mapbox.com/).
