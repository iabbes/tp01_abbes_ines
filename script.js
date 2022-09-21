$('#form').submit((event)=>{
    event.preventDefault();//recup la valeur que j'ai écrit quand j'ai submit sans envoyer
    if( $('#mdp').val() !== $('#mdp2').val()){
        $('.invalid-feedback').show();
        $('#mdp2').addClass('is-invalid');
    }
})

$(function(){
    $("input[name='codepostal']").on('input', function (e) {
      $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });
});