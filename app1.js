const h1 = Goal.createElement('h1',{},"hi ");

const p = Goal.createElement('p',{},"From MapsaHr")

const div = Goal.createElement('div',{
    children: [h1,p],
    style:{fontSize:'30px',color:"blue"},
    className:"Test"
});

GoalDOM.render(div,document.getElementById('app'))


// console.log(goalH1);

// const h1 = document.createElement('h1');
// h1.textContent = '0';

// const ReactH1 = React.createElement('h1',{
//     children:['hi','mahdi'],
//     students:['ali'],
//     style:{color:'red',fontSize:'50px',backgroundColor:'green'}
// });
// const reactH1 = React.createElement('h1', {
//     children:'Hello, world',
// }) 


// const reactP = React.createElement('p', {
//     children:"from MapsaHr....",
// })

// const reactDiv = React.createElement('div',{
//     children:[reactH1, reactP],
//     style:{
//         backgroundColor:"gray",
//         display:'flex',
//         justifyContent: 'center', 
//         alignItems: 'center',
//         height:'100vh',
//         flexDirection:'column'
//     }
// })


// ReactDOM.render(reactDiv,document.getElementById('app'))


