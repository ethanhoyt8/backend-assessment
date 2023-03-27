let quoteArray = []

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A fresh start will put you on your way.", "A faithful friend is a strong defense.", "A pleasant surprise is waiting for you.", "Adventure can be real happiness.", "All your hard work will soon pay off."]

        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },


    getMotivation: (req, res) => {
        const motivations = ["Everything you can imagine is real.", "Your passion is waiting for your courage to catch up.", "Hold the vision, trust the process."]

        let randomIndex = Math.floor(Math.random() * motivations.length)
        let randomMotivation = motivations[randomIndex]

        res.status(200).send(randomMotivation)
    },

    addQuote: (req, res) => {
        let {quote} = req.body
        console.log(quote)
        quoteArray.push(quote)
        res.status(200).send(quoteArray)
    },

    getEncouragement: (req, res) => {
        const encouragement = ["Courage is going from failure to failure without losing enthusiasm.", "It always seems impossible until it's done.", "Don't compare your beginning to someone else's middle.", "Don't compare your beginning to someone else's middle."]

        let randomIndex = Math.floor(Math.random() * encouragement.length)
        let randomEncouragement = encouragement[randomIndex]

        res.status(200).send(randomEncouragement)
    }

}