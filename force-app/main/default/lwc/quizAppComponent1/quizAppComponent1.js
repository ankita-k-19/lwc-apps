import { LightningElement } from 'lwc';

export default class QuizAppComponent1 extends LightningElement {

    selectedValues={};
    correctValues=0;

    get allSelected()
    {
        return !(Object.keys(this.selectedValues).length===this.myQuestions.length)
    }

    myQuestions=[
        {
            id:1,
            question:"National sport of India",
            options:{

                a:"Hockey",
                b:"Badminton",
                c:"Cricket"

            },
            correctAnswer:"a"
        },

        {
            id:2,
            question:"Prime Minister of India",
            options:{
                a:"Uddhav Thackrey",
                b:"Amit Shaha",
                c:"Narendra Modi"
            },
            correctAnswer:"c"
        },

        {
            id:3,
            question:"Largest Planet in the solar system",
            options:{
                a:"Earth",
                b:"Moon",
                c:"Jupiter"

            },
            correctAnswer:"c"
        },

        {
            id:4,
            question:"President of the USA",
            options:{
                a:"Barack Obama",
                b:"Donald Trump",
                c:"Kamala Harris"

            },
                
            correctAnswer:"b"
        },

        {
            id:5,
            question:"Captial of India",
            options:{
                a:"Mumbai",
                b:"New Delhi",
                c:"Bangalore",

            },
            correctAnswer:"b"
        },
    ]


    saveOption(e) {
        console.log(e.target.value)
        console.log(e.target.name)
        const{name,value}=e.target
        this.selectedValues = {...this.selectedValues,[name]:value};
        console.log("oBJECT "+Object.keys(this.selectedValues));
        
        
        
    }
   
    submitHandler(event)
    {

        event.preventDefault();
        let correct=this.myQuestions.filter(item=>this.selectedValues[item.id]===this.myQuestions.correctAnswer);
        this.correctValues=correct.length;
        console.log(this.correctValues);
        console.log("Object LENGTH" +Object.keys(this.selectedValues));
    }
    

    resetHandler()
    {
        this.selectedValues={};
        this.correctValues=0;
    }
    
   
}