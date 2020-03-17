## Week 08 Assignment

#### Task
Submit your Midterm code and documentation explaining:

1. Concept
2. References if any
3. Explain your project
4. Challenges
5. Next Steps

If you previously had issues with your code, this is a good time to fix errors and complete the assignment. 

#### Background
The NYPD maintains statistical data which is used as a management tool in reducing crime, improving procedure and training, and providing transparency to the public and government oversight agencies. In 1994, the department implemented CompStat, which through management, statistics, and accountability, successfully drove down crime to record levels not seen since the 1950s.

The department provides up-to-date crime-related statistics in the seven major crime categories on the citywide, borough, and precinct levels, as well as historical crime data. The public can also access this data through the department’s [CompStat 2.0](https://compstat.nypdonline.org/2e5c3f4b-85c1-4635-83c6-22b27fe7c75c/view/89) virtual portal.

<img src="https://github.com/yujunmjiang/WebAdvanced_Spring2020_jiany023/blob/master/week8_hw/screencapture-compstat-nypdonline-org-2e5c3f4b-85c1-4635-83c6-22b27fe7c75c-view-89-2020-03-16-23_11_58.png" width="50%"/>

#### Concept
My idea is to build one function on the user side that allows people to report shooting incident in a real-time system. The reason is the police department could preserve public safety, but not for everyone under any situation. The new function will alert other citizens who are living or working in the same area that shooting incident happenes. The final goal is focusing on how to make people be aware of any shooting incident and keep them safe. To protect the user privacy, each report will be recorded as anonymous and it can be verified by the police department later (NYPD keeps the right to update or remove data point on the map). Meanwhile, I would like to redesign the interface to make it more user friendly.

#### Dataset
Base on the NYPD's crime data, I reduced it to the shooting incident data in the greater New York area. I found [NYPD Shooting Incident Data (Historic)](https://data.cityofnewyork.us/Public-Safety/NYPD-Shooting-Incident-Data-Historic-/833y-fsy8) on the NYC OpenData website.

#### Solution
I visualized the shooting incidents data base on five boroughs in the greater New York City area, and then used [Chart.js](https://www.chartjs.org/) to create three interactive charts to match the different variables. The color palette that I selected fot the charts referenced borough flags and human skin colors in RGB mode.
