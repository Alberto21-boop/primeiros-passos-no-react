const Events = () => {
    const handleMyEvent = () =>{
        console.log("Viu ? Não conateceu nada !!!!");
    }

    return(
        <div>
            <button onClick = {handleMyEvent}>Clique aqui para você ver !</button>
        </div>
    )

}

export default Events;