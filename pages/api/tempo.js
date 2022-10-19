function tempo(request, response) {
    const dinamicDate = new Date();

    response.json({
        date: dinamicDate.toGTMString()
    })

}
    export default tempo;