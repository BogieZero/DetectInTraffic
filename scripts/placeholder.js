$(function(){

$('#mce-EMAIL').data('holder',$('#mce-EMAIL').attr('placeholder'));

$('#mce-EMAIL').focusin(function(){
    $(this).attr('placeholder','');
});
$('#mce-EMAIL').focusout(function(){
    $(this).attr('placeholder',$(this).data('holder'));
});


})