$(document).ready(function(){

    $(".tet-thanks-slider .owl-carousel").owlCarousel({
        dot: false,
        items:1,
        border: 8,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        loop: true,
        autoWidth:true,
    })

    $('.tet-container .tet-contact .tet-form-submit').on('click', function() {
        Swal.fire({
    title: 'Cám ơn quý khách đã quan tâm tới dịch vụ của vietnam booking',
  text: 'Thông tin đã được ghi nhận. Chúng tôi sẽ liên hệ lại Quý khách trong thời gian sớm nhất.',
  confirmButtonText: 'Xác nhận'
})
    })
  })