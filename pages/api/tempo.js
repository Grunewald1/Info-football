 async function tempo(request, response) {
    const dinamicDate = new Date();

    const subscribersResponse = await fetch(" https://api.convertkit.com/v3/subscribers?api_secret=<your_secret_api_key>&from=2016-02-01&to=2015-02-28")
    const subscribersResponseJson = await subscribersResponse.json(); 
    const inscritos = subscribersResponseJson.total_subscribers;
    
    
    response.json({
        date: dinamicDate.toGTMString()
        inscritos: inscritos

    })

}
    export default tempo;