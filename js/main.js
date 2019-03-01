$( document ).ready(function() {
    $.ajax({
      url:"../templates/tmpl.htm",
      type: "GET",
      crossDomain: true,
      xhrFields: {
      withCredentials: true
   },
       success: function(templates) {
        var nav_template = $(templates).filter('#tpl-nav-bar').html();
        var slide_template = $(templates).filter('#tpl-slide-show').html();
        var content_template  = $(templates).filter('#tpl-modal').html();
        var footer_template = $(templates).filter('#tpl-footer').html();
        $('#nav-bar-container').append(Mustache.render(nav_template));
        $('#slide-container').append(Mustache.render(slide_template));
        $('#default-container-area').append(Mustache.render(content_template));
        $('#footer-container').append(Mustache.render(footer_template));
    }
  })
});

function getSiteJSON(tpl_URL,json_element, tpl_name, target_div, is_append) {
    $.getJSON("../data/data.json", function(data) {
        addTemplateToDiv(tpl_URL,tpl_name, target_div, {
            "dataArray": data[json_element]
        }, is_append);
    }).fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
    });
}

function addTemplateToDiv(tpl_URL,tpl_name, target_div, data, is_append) {
    var dfd = jQuery.Deferred();
    $.get(tpl_URL, function(templates) {
        var template = $(templates).filter('#' + tpl_name).html();
        if (is_append) {
            if (data == "")
                $('#' + target_div).append(Mustache.render(template));
            else
                $('#' + target_div).append(Mustache.render(template, data));
        } else {
            if (data == "")
                $('#' + target_div).html(Mustache.render(template));
            else
                $('#' + target_div).html(Mustache.render(template, data));
        }
        dfd.resolve("Template addition successful");
    });

    return dfd.promise();
}

function processPageData(currentControl){
    var top_nav = currentControl.innerText;
    /*  if (top_nav == "About") {
        getSiteJSON("../templates/tmpl.htm", "about", "tpl-about", "default-container-area", false)
        window.history.replaceState("", "About", "#About");
    }*/
     if (top_nav == "Service") {
        getSiteJSON("../templates/tmpl.htm", "service", "tpl-service", "default-container-area", false)
        window.history.replaceState("", "service", "#service");
    }
     if (top_nav == "Contacts") {
        getSiteJSON("../templates/tmpl.htm", "Contacts", "tpl-Contacts", "default-container-area", false)
        window.history.replaceState("", "Contacts", "#Contacts");
    }
}

function processSideBarData(currentControl){
    var sideBar_nav = currentControl.innerText;
    if(sideBar_nav == "GroundWorks"){
       getSiteJSON("../templates/tmpl.htm", "GroundWorks", "tpl-GroundWorks", "default-container-area", false)
        window.history.pushState("", "GroundWorks", "#GroundWorks");
        window.location.pathname + '?tpl-GroundWorks=' + id;
    }
    if(sideBar_nav == "Foundation"){
       getSiteJSON("../templates/tmpl.htm", "Foundation", "tpl-Foundation", "default-container-area", false)
        window.history.replaceState("", "Foundation", "#Foundation");
    }
      if(sideBar_nav == "Excavation"){
       getSiteJSON("../templates/tmpl.htm", "Excavation", "tpl-Excavation", "default-container-area", false)
        window.history.replaceState("", "Excavation", "#Excavation");
    }
    if(sideBar_nav == "Piping"){
       getSiteJSON("../templates/tmpl.htm", "Piping", "tpl-Piping", "default-container-area", false)
        window.history.replaceState("", "Piping", "#Piping");
    }
    if(sideBar_nav == "Concreting"){
       getSiteJSON("../templates/tmpl.htm", "Concreting", "tpl-Concreting", "default-container-area", false)
        window.history.replaceState("", "Concreting", "#Concreting");
    }
     if(sideBar_nav == "Block Paving"){
       getSiteJSON("../templates/tmpl.htm", "Block", "tpl-Block", "default-container-area", false)
        window.history.replaceState("", "Block", "#Block");
    }
     if(sideBar_nav == "Drainage"){
       getSiteJSON("../templates/tmpl.htm", "Drainage", "tpl-Drainage", "default-container-area", false)
        window.history.replaceState("", "Drainage", "#Drainage");
    }
     if(sideBar_nav == "Patios/Paving"){
       getSiteJSON("../templates/tmpl.htm", "Patios", "tpl-Patios", "default-container-area", false)
        window.history.replaceState("", "Patios", "#Patios");
    }
     if(sideBar_nav == "Pathways"){
       getSiteJSON("../templates/tmpl.htm", "Pathways", "tpl-Pathways", "default-container-area", false)
        window.history.replaceState("", "Pathways", "#Pathways");
    }
     if(sideBar_nav == "Driveways"){
       getSiteJSON("../templates/tmpl.htm", "Driveways", "tpl-Driveways", "default-container-area", false)
        window.history.replaceState("", "Driveways", "#Driveways");
    }
    if(sideBar_nav == "Fencing"){
       getSiteJSON("../templates/tmpl.htm", "Fencing", "tpl-Fencing", "default-container-area", false)
        window.history.replaceState("", "Fencing", "#Fencing");
    }
     if(sideBar_nav == "NEW! Z Stone Cladding"){
       getSiteJSON("../templates/tmpl.htm", "Cladding", "tpl-Cladding", "default-container-area", false)
        window.history.replaceState("", "Cladding", "#Cladding");
    }

    /*right side */
     if(sideBar_nav == "LandScaping"){
       getSiteJSON("../templates/tmpl.htm", "LandScaping", "tpl-LandScaping", "default-container-area", false)
        window.history.replaceState("", "LandScaping", "#LandScaping");
    }
    if(sideBar_nav == "LM Gardens"){
       getSiteJSON("../templates/tmpl.htm", "Gardens", "tpl-Gardens", "default-container-area", false)
        window.history.replaceState("", "Gardens", "#Gardens");
    }
    if(sideBar_nav == "Garden Lighting"){
       getSiteJSON("../templates/tmpl.htm", "Lighting", "tpl-Lighting", "default-container-area", false)
        window.history.replaceState("", "Lighting", "#Lighting");
    }
     if(sideBar_nav == "Planting"){
       getSiteJSON("../templates/tmpl.htm", "Planting", "tpl-Planting", "default-container-area", false)
        window.history.replaceState("", "Planting", "#Planting");
    }
     if(sideBar_nav == "Garden Decking"){
       getSiteJSON("../templates/tmpl.htm", "Decking", "tpl-Decking", "default-container-area", false)
        window.history.replaceState("", "Decking", "#Decking");
    }
     if(sideBar_nav == "Water Features"){
       getSiteJSON("../templates/tmpl.htm", "Features", "tpl-Features", "default-container-area", false)
        window.history.replaceState("", "Features", "#Features");
    }
     if(sideBar_nav == "Pergolas"){
       getSiteJSON("../templates/tmpl.htm", "Pergolas", "tpl-Pergolas", "default-container-area", false)
        window.history.replaceState("", "Pergolas", "#Pergolas");
    }
     if(sideBar_nav == "Wheelie Bin Screens"){
       getSiteJSON("../templates/tmpl.htm", "Bin", "tpl-Bin", "default-container-area", false)
        window.history.replaceState("", "Bin", "#Bin");
    }
    if(sideBar_nav == "Raised Beds"){
       getSiteJSON("../templates/tmpl.htm", "RaisedBeds", "tpl-RaisedBeds", "default-container-area", false)
        window.history.replaceState("", "RaisedBeds", "#RaisedBeds");
    }
     if(sideBar_nav == "Synthetic Grass"){
       getSiteJSON("../templates/tmpl.htm", "Grass", "tpl-Grass", "default-container-area", false)
        window.history.replaceState("", "Grass", "#Grass");
    }
      if(sideBar_nav == "Garden Sheds"){
       getSiteJSON("../templates/tmpl.htm", "Sheds", "tpl-Sheds", "default-container-area", false)
        window.history.replaceState("", "Sheds", "#Sheds");
    }
}



function validateForm() {
  var fname = document.forms["quote-Form"]["firstname"].value;
  if (fname == "") {
    alert("First Name must be filled out");
    return false;
  }
     var lname = document.forms["quote-Form"]["lastname"].value;
  if (lname == "") {
    alert("Last name must be filled out");
    return false;
  }
     var email_address = document.forms["quote-Form"]["email"].value;
  if (email_address == "") {
    alert("Email address must be filled out");
    return false;
  }
     var telephone = document.forms["quote-Form"]["phone"].value;
  if (telephone == "") {
    alert("Phone number must be filled out");
    return false;
  }

}

// send email//
$('#quote-form').submit(function(e){
    var message = document.getElementById('comment'),
        email = document.getElementById('email'),
        fname = document.getElementById('firstName'),
        lname = document.getElementById('lastName'),
        teleph = document.getElementById('phone');

    if(!message.value || !email.value || !fname.value || !lname.value || !teleph.value){
        alertify.error('Please check your entries')
    }else{
        $.ajax({
            url: "https://formspree.io/gbs.landscape@gmail.com",
            method: "POST",
            data: $(this).serialize(),
            dataType:"json"
        });
        e.preventDefault()
        $(this).get(0).reset()
        alertify.success('Message been sent, Thank you!')
    }
})
