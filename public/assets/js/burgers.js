$(function () {
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");

    var newDevouredState = {
      devoured: 1
    };
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        console.log("new devoured state is ", newDevouredState);
        location.reload();
      }
    );
  });
  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    var newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: 0
    };
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        location.reload();
      }
    );
  });

});
