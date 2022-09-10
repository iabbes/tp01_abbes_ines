$('form').submit((event)=>{
    event.preventDefault();//recup la valeur que j'ai écrit quand j'ai submit
    let mdp = $('#mdp').val();
    let mdpConfirmation = $('#mdp2').val();
    if(mdp !== mdpConfirmation){
        alert('Les mots de passe sont différents')
    }
})