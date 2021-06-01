
$(document).ready(function () {
    $('.toggle-botton').on('click', () => {
        $(".collapsable").addClass("show");
    })
    $('.cross-botton').on('click', () => {
        $(".collapsable").removeClass("show");
    })
    $('.account .toggle-botton').on('click', () => {
        $(".account-sidebar").addClass("show");
    })
    $('.account .cross-botton').on('click', () => {
        $(".account-sidebar").removeClass("show");
    })
    var checboxes;

    $("td .checkbox-container input[type='checkbox']").on('click', (e) => {
        $(e.target).parents('tr').toggleClass('active')
    })
    $("#selectAll input[type='checkbox']").on('click', (e) => {
        checboxes = $(e.target).parents('table').find("td .checkbox-container input[type='checkbox']");
        $("#deSelectAll input[type='checkbox']").prop("checked", false);
        if ($("#selectAll input[type='checkbox']:checked").length > 0) {
            checboxes.prop("checked", true);
        }
        else if ($("#selectAll input[type='checkbox']:not(:checked)").length > 0) {
            checboxes.prop("checked", false);
        }
        if (checboxes.prop("checked") == true) {
            checboxes.parents('tr').addClass("active");
        } else if (checboxes.prop("checked") == false) {
            checboxes.parents('tr').removeClass("active");
        }
    });
    $("#deSelectAll input[type='checkbox']").on('click', (e) => {
        $("#selectAll input[type='checkbox']").prop("checked", false);
        checboxes = $(e.target).parents('table').find("td .checkbox-container input[type='checkbox']");
        checboxes.prop("checked", false);
        if (checboxes.prop("checked") == true) {
            checboxes.parents('tr').addClass("active");
        } else if (checboxes.prop("checked") == false) {
            checboxes.parents('tr').removeClass("active");
        }
    });

    //color picker 
    // var colors = $('input[type = color]');
    // for (let i = 0; i < colors.length; i++) {
    //     // $(colors[i]).parent().find('img').attr('src', '../assets/img/dropper.svg');
    //     $(colors[i]).parent().find('img').css('display', 'none !important')
    // }
    // console.log(color.parentElement.querySelector('img').src)
});
//cart button
function valueUp(e) {
    e.parentNode.querySelector('input[type = number]').stepUp();
}
function valueDown(e) {
    e.parentNode.querySelector('input[type = number]').stepDown();
}

//bulk action checkbox drop down
var expanded = false;

function showCheckboxes(index) {
    checkboxes = document.querySelectorAll(".checkboxes");
    if (!expanded) {
        checkboxes[index].style.display = "block";
        expanded = true;
    } else {
        checkboxes[index].style.display = "none";
        expanded = false;
    }
}

