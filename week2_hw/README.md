## Week 02 Assignment

#### Task
1. Create a flow diagram on a decision-based activity.
2. Create a small quiz or text adventure (example is available on [CodePen](https://codepen.io/jannypie/pen/DcHdo)).

#### Solution
I created a quiz website to test people's common sense on art history. Each multiple choice only has one correct answer and people will know the result immediately base on the background color change. In my style sheet, I used `:root` to declare global CSS variables and `--hue: var(--hue-neutral)` to represent a default neutral color. In the JavaScript part, all the questions are stored as block-scoped variables by `const`. Lastly, `shuffledQuestions = questions.sort(() => Math.random() - .5)` will let your broswer to run a random question when you hit refresh or next button. 

<img src="https://github.com/yujunmjiang/WebAdvanced_Spring2020_jiany023/blob/master/week2_hw/flow_diagram.png" width="50%"/>
