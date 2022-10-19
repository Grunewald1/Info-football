function tempo(request, response) {
    const dinamicDate = new Date();

    response.json({
        date: dinamicDate.toDateString()
    })

}
    export default tempo;