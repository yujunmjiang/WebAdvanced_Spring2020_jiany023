## Week 03 Assignment

#### Task
1. Design the way you want your website to look (Sketch, Illustrator, Hand Drawing...)
2. Create the structure (HTML / CSS) for your final project. Make sure that it’s responsive.

#### Solution
I created a quiz website to test people's common sense on art history. Each multiple choice only has one correct answer and people will know the result immediately base on the background color change. In my style sheet, I used `:root` to declare global CSS variables and `--hue: var(--hue-neutral)` to represent a default neutral color. In the JavaScript part, all the questions are stored as block-scoped variables by `const`. Lastly, `shuffledQuestions = questions.sort(() => Math.random() - .5)` will let your broswer to run a random question when you hit refresh or next button. 

<img src="https://github.com/yujunmjiang/WebAdvanced_Spring2020_jiany023/blob/master/week2_hw/flow_diagram.png" width="50%"/>
