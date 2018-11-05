document.getElementById('storeEmails').onclick = store;
document.getElementById('email').onsubmit = store;

function store(e){
    e.preventDefault();
    const inputEmail= document.getElementById("email").value;
    if (!inputEmail) return;
    let emails = localStorage.getItem("emails") ? JSON.parse(localStorage.getItem("emails")) : [];
    emails.push(inputEmail);
    localStorage.setItem("emails", JSON.stringify(emails));
    document.getElementById("email").value = "Enter email for newsletter";
}

$( document ).ready(function() {
    var options = {
        url: "json/data.json",
        list: {
            match: {
                enabled: true
            }
        }
    };
    $('#slider').on('slide.bs.carousel', function (e) {
        const ind = $(e.relatedTarget).index();
        $('.slider-items .item').eq(ind).addClass('active').siblings().removeClass('active');
    })
    $("#autocompleteDropdown").easyAutocomplete(options);
    $('#btnContainer .btn').click(function() {
        if ($(this).hasClass('active')) return;
        $(this).addClass('active').parent().siblings().find('.btn').removeClass('active');
        if ($(this).data('view') === 'grid') {
            $('.products .product-item').addClass('col-sm-6 col-md-4').removeClass('list-view');
        } else if ($(this).data('view') === 'list') {
            $('.products .product-item').removeClass('col-sm-6 col-md-4').addClass('list-view');
        }
    })
});
