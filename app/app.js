function initListeners(){
    $("#submit").click(function(e){
        e.preventDefault();
        let firstName = $("#fName").val();
        let lastName = $("#lName").val();
        let email = $("#email").val();
        let phone = $("#phone").val();
        let address = $("#address").val();
        let gender = $("#gender").val();
        let city = $("#city").val();
        let state = $("#state").val();
        let zip = $("#zip").val();
        let title = $("#title").val();
        console.log("inputs" + firstName + lastName + email + phone + address + gender + city + state + zip + title);
    });

    $("#edit").click(function(e){
        e.preventDefault();

        let userObj = {
            fName: "James",
            lName: "Dixon",
            email: "@outlook.com",
            phone: "317-xxx-xxxx",
            address: "Blueridge Rd.",
            gender: "male",
            city: "greenwood",
            state: "indiana",
            zip: "46xxx",
            title: "mr."
        };

        console.log(userObj);
        $("#fName").val(userObj.fName);
        $("#lName").val(userObj.lName);
        $("#email").val(userObj.email);
        $("#phone").val(userObj.phone);
        $("#address").val(userObj.address);
        $("#gender").val(userObj.gender);
        $("#city").val(userObj.city);
        $("#state").val(userObj.state);
        $("#zip").val(userObj.zip);
        $("#title").val(userObj.title);
        // console.log("inputs" + firstName + "" + lastName);
    });

    $(window).on("hashchange", changeRoute);
    changeRoute();

    $(".bars").click(function(e){
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });

    $(".links a").click(function(e){
        $(".bars").toggleClass("active");
        $(".links").removeClass("active");
    });

}



$(document).ready(function(){
    initListeners();
});