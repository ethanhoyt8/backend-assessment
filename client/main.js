
let baseURl = 'http://localhost:4000'

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const quoteBtn = document.querySelector("#addQuoteButton")
const motivationBtn = document.querySelector("#motivationButton")
const encouragementBtn = document.querySelector("#encouragementButton")



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data
            alert(data)
    })
}

const getMotivation = () => {
   
    axios.get("http://localhost:4000/api/motivation")
        .then(res => {
            const data = res.data
            alert(data)
        })

}

    const getEncouragement = () => {

        axios.get("http://localhost:4000/api/encouragement")
        .then(res => {
            const data = res.data
            alert(data)
        })
 }



const addQuote = () => {

    axios.post(`${baseURl}/quotes`, bodyObj)
    .then((res) => {
        console.log(res.data)

        for(let i = 0; i < res.data.length; i++){
            let newSpan = document.createElement('p')
            newSpan.textContent = `${i+1}. ${res.data[i]}`
            quoteBtn.appendChild(newSpan)
        }
    })
    .catch((err) => {
        console.log(err)
    })
}



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
quoteBtn.addEventListener('click',addQuote)
motivationBtn.addEventListener('click', getMotivation)
encouragementBtn.addEventListener('click', getEncouragement)

