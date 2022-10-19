 async function tempo(request, response) {
    const apiSecret = process.env.CONVERTKIT_API_SECRET;        
    const dinamicDate = new Date();

    const subscribersResponse = await fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${apiSecret}`)
    const subscribersResponseJson = await subscribersResponse.json(); 
    const inscritos = subscribersResponseJson.total_subscribers;
    
    response.setHeader('cache-control','s-maxage=10, stale-while-revalidate');
    
    response.json({
    date: dinamicDate.toGTMString()
    
     
    })

}
    export default tempo;