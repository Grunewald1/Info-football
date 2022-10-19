async function tempo(request, response) {

    const apiSecret = process.env.CONVERTKIT_API_SECRET;

    const dynamicDate = new Date();


    const subscribersResponse = await fetch(`https://info-football.free.beeceptor.com/times`); 


    const subscribersResponseJson = await subscribersResponse.json();



    response.setHeader('Cache-Control', 's-maxage=10', 'stale-white-revalidate');

    response.json({
        date: dynamicDate.toUTCString(),
        nome_time: subscribersResponseJson.name,
        url_image: subscribersResponseJson.logoImage 
    })

}
export default tempo;



