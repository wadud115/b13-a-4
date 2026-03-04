



let currentTab = "all"

const tabActive = ["bg-blue-500", "text-white"];

const inActive = ["bg-gray-200", "text-gray-600"];


const allcards = document.getElementById('allcards')

const empty = document.getElementById("empty-state")

const  interviewSection = document.getElementById(' interview-section');

const RejectedSection = document.getElementById('Rejected-section')

const stats = document.getElementById('stats')
console.log(allcards,interviewSection,RejectedSection);





function switchTab(tab){

    console.log(tab);

    

    const tabs = ["all" , "interview" , "rejected" ]
    currentTab = tab;

    for(const t of tabs){
        const tabName = document.getElementById("tab-" + t)



        if(t === tab){


            tabName.classList.remove(...inActive)
            tabName.classList.add(...tabActive)



            
        }


        else{
            
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...inActive);
        }
    }


    const pages = [allcards,interviewSection,RejectedSection]

    for (const section of pages) {
        section.classList.add("hidden")
        
    }




empty.classList.add("hidden")


    if(tab==="all"){
        if(allcards.children.length <1){
            empty.classList.remove("hidden")
        }

        allcards.classList.remove("hidden")

    }


    else if(tab === 'interview'){
         if(interviewSection.children.length <1){
            empty.classList.remove("hidden")
        }
        interviewSection.classList.remove('hidden')
        

    }


    else{
         if(RejectedSection.children.length <1){
            empty.classList.remove("hidden")
        }
        RejectedSection.classList.remove('hidden')
    }
    updateState()
}





// state update


let total = document.getElementById('total')
let interviewCount = document.getElementById('interviewCount')
let RejectedCount = document.getElementById('RejectedCount')


document.getElementById("jobs-container").addEventListener("click",function(event){

    const clickElement = event.target;

   const card = clickElement.closest(".card")
   const parent = card.parentNode;


 const status = card.querySelector('.applide')

    





 
    

    if(clickElement.classList.contains("intervew-btn"))
        
    {
         status.innerText = "interviewd"
         interviewSection.appendChild(card)
         updateState()

    }


    if(clickElement.classList.contains("rejected-btn"))
    { status.innerText = "rejected"
         RejectedSection.appendChild(card)
         updateState()
    }

    
    if(clickElement.classList.contains("delete"))
    {
         parent.removeChild(card)
         updateState()
    }


    
})




    
// const interviewBtn = document.getElementsByClassName("intervew-btn");
// const rejectedBtn = document.getElementsByClassName("rejected-btn");
// const statusBtn = document.getElementsByClassName("applide");

// interviewBtn.addEventListener("click", function() {
//     statusBtn.innerText = "Interview";
// });

// rejectedBtn.addEventListener("click", function() {
//     statusBtn.innerText = "Rejected";
// });


function updateState(){

    // total.innerText= allcards.children.length;
    // interviewCount.innerText= interviewSection.children.length;
    // RejectedCount.innerText= RejectedSection.children.length;

    const counts = {
        all:allcards.children.length ,
         interview:interviewSection.children.length ,
         rejected:RejectedSection.children.length,

    }

    total.innerText = counts.all
    interviewCount.innerText = counts.interview
    RejectedCount.innerText = counts.rejected

    stats.innerText = counts[currentTab]

    if(counts[currentTab]<1){
        empty.classList.remove("hidden")

    }
    else{
        empty.classList.add("hidden")
    }

}

updateState()





switchTab(currentTab);