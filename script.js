
let interviewlist = []
let Rejectedlist = []




let total = document.getElementById('total')
let interviewCount = document.getElementById('interviewCount')
let RejectedCount = document.getElementById('RejectedCount')

const allcard = document.getElementById('allcards')
console.log(allcard.children.length);

const mainContainer = document.querySelector('main')
console.log(mainContainer);



function clculateCount(){

    total.innerText = allcard.children.length

    interviewCount.innerText = interviewlist.length;

    RejectedCount.innerText = Rejectedlist.length;


    
}
clculateCount()


const allFilterBtn = document.getElementById('all-filter-button')
const interviewFilterButton = document.getElementById('interview-filter-button')
const RejectedFilterButton = document.getElementById('Rejected-filter-button')

function toggleStyle(id){
    
    allFilterBtn.classList.remove('bg-blue-400', 'text-white')
    interviewFilterButton.classList.remove('bg-blue-400', 'text-white')
    RejectedFilterButton.classList.remove('bg-blue-400', 'text-white')


    allFilterBtn.classList.add('bg-white', 'text-black')
    interviewFilterButton.classList.add('bg-white', 'text-black')
    RejectedFilterButton.classList.add('bg-white', 'text-black')

    const selected = document.getElementById(id)
    console.log(selected);

    selected.classList.add('bg-blue-400', 'text-white')
    selected.classList.remove('bg-white', 'text-black')

    
}


mainContainer.addEventListener('click',function(event){

    

    const parentNode = event.target.parentNode.parentNode

    const jobName = parentNode.querySelector('.job-name')

    



     
})