$("#htmlHeader").load('../Header.html')
$("#htmlFooter").load('../Footer.html')
$("#container >.wrp >.colright").load('../ColRight.html')

setTimeout(() => {
    $('#photoAlbumRight .group').each(function () {
        $(this).owlCarousel(owlslide($(this).find('>*').size(), [10, 10, 10, 10, 10, 10], true, true, true, [1, 4, 3, 2, 1], "", ""));
    });
    $("#linkWebsite select").change(function () {
        var value = $(this).val();
        if (value !== "") window.open(value, '_blank');
    });
    $('#bttop').click(function (e) {
        scrollHead(e);
    });
}, 1000); 