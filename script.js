
$(document).ready(() => {

    $('#music').get(0).play();




    $('#banner').on('mouseenter', () => {
        $('#banner').animate({
            opacity: 0.25,
            
            
        }, 500);
    })

    $('#banner').on('mouseleave', () => {
        $('#banner').animate({
            opacity: 4,
            
            
        }, 500);
        
    })


    $('.card').on('mouseenter', (event) => {
        $('.cardImg').animate({
            opacity: 0.5
        }, 100);
    })
    $('.card').on('mouseleave', (event) => {
        $('.cardImg').animate({
            opacity: 1
        }, 500);
    })


    $('#bio').on('click', () => {
        $('.nav').slideToggle(500, () => {


        })
        
    })
 


    $('#projectsButton').on('click', () => {
        $('#cards').toggle()
        
    })


    $('#aboutButton').on('click', () => {
        $('#about').toggle()
        
    })


    $('#contactButton').on('click', () => {
        $('#contact').toggle()
        
    })



})




