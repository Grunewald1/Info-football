function Tempo(request, response) {
    const dinamicDate = new Date();

    response.json({
        date: dinamicDate.toDateString()
    })

}
    export default Tempo;