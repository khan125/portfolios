// $('form').submit(function(){
//     var isValid = true;
//     $(this).find(':input').each(function(){
//         var regex = new RegExp($(this).attr('data-validation-use'));
//         if(!regex.exec($(this).val())){
//             $('.validationError').append($(this).attr('data-validation-error'));
//             $(this).addClass('invalid');
//             isValid = false;
//         }
//     });
//     return isValid;
// });
$(document).ready(function() {
    $(".modal").modal();
  });
  
  // function loader(){
  //     $("#loading").show(10000,function(){
  //         $("#loading").hide();
  //         });
  // }
  
  var validator = false;
  
  function reset(field, id, error_id) {
    document.getElementById(id).style.visibility = "hidden";
    document.getElementById(error_id).textContent = "";
    var x = document.getElementById(field);
    $(x).removeClass("invalid");
    $(x).removeClass("valid");
  }
  
  function validate_email() {
    var email = document.getElementById("email");
    if (email.value == "") {
      reset("email", "email_icon", "email_error");
    } else {
      var regxEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
      var email_result = regxEmail.test(email.value);
  
      if (email_result) {
        validator = true;
        document.getElementById("email_error").textContent = "";
        valid("email", "email_icon");
      } else {
        validator = false;
        document.getElementById("email_error").textContent = "e.g xyz@xyz.com";
        invalid("email", "email_icon");
      }
    }
  }
  /*
  
   Regular expression for name field that will accept alphabets 
   and only space character between words and total characters
    in field should be in betweem 2 and 30. i.e., field should
     accept min 2 chars and max of 30 chars
  */
  
  function validateName_f() {
    var name_f = document.getElementById("first_name").value;
    if (name_f == "") {
      reset("first_name", "firstn_icon", "firstn_error");
    } else {
      var regxName = /^[a-zA-Z ]{2,30}$/;
      var regresult = regxName.test(name_f);
      if (regresult) {
        validator = true;
        document.getElementById("firstn_error").textContent = " ";
        valid("first_name", "firstn_icon");
      } else if (name_f == "" || regresult == false) {
        validator = false;
        document.getElementById("firstn_error").textContent =
          "Only alphabets. (2-30)";
        invalid("first_name", "firstn_icon");
      }
    }
  }
  function validateName_l() {
    var name_l = document.getElementById("last_name").value;
    if (name_l == "") {
      reset("last_name", "lastn_icon", "lastn_error");
    } else {
      var regxName = /^[a-zA-Z ]{2,30}$/;
      var regresult = regxName.test(name_l);
      if (regresult) {
        validator = true;
        document.getElementById("lastn_error").textContent = "";
        valid("last_name", "lastn_icon");
      } else {
        validator = false;
        document.getElementById("lastn_error").textContent =
          "Only alphabets. (2-30)";
        invalid("last_name", "lastn_icon");
      }
    }
  }
  
  /*
  03231234567 | 0345-1234567 | +923211234567 
  +92324-1234567 | +92-3331234567 | +92-333-1234567 
  00923331234567 | 0092333-1234567 | 0092-3331234567 
   0092-333-1234567
  
  */
  
  function validate_phone() {
    var phone = document.getElementById("number").value;
    if (phone == "") {
      reset("number", "phone_icon", "phone_error");
    } else {
      var regxNumber = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
      var regresult = regxNumber.test(phone);
      if (regresult) {
        validator = true;
        document.getElementById("phone_error").textContent = "";
        valid("number", "phone_icon");
      } else {
        validator = false;
        document.getElementById("phone_error").textContent =
          "e.g 0345-1234567 +923211234567 or  +92-3331234567 etc";
        invalid("number", "phone_icon");
      }
    }
  }
  /*
  This allows 1-5 digits for the house number,
   a space, a character followed by a period (for N. or S.),
    1-2 words for the street name, finished with an 
    abbreviation (like st. or rd.).
    var regxAddress=/\d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*/
  
  /*
  Characters may include a-z, A-Z alphabets,
   whitespace, comma(,), dot(.), apostrophe ('), 
   and dash(-) symbols.
  
  */
  function validate_address() {
    var addr = document.getElementById("address").value;
    if (addr == "") {
      reset("address", "address_icon", "address_error");
    } else {
      var regxAddress = /^[a-zA-Z0-9\s,.'-]{3,}$/;
      var regresult = regxAddress.test(addr);
      if (regresult) {
        validator = true;
        document.getElementById("address_error").textContent = "";
        valid("address", "address_icon");
      } else {
        validator = false;
        document.getElementById("address_error").textContent =
          "e.g min 3 character";
        invalid("address", "address_icon");
      }
    }
  }
  /*
  At least one upper case English letter, (?=.*?[A-Z])
  At least one lower case English letter, (?=.*?[a-z])
  At least one digit, (?=.*?[0-9])
  At least one special character, (?=.*?[#?!@$%^&*-])
  Minimum eight in length .{8,} (with the anchors)
  */
  
  function validate_password() {
    var pass = document.getElementById("password").value;
    if (pass == "") {
      reset("password", "password_icon", "password_error");
    } else {
      var regxPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
      var regresult = regxPassword.test(pass);
      if (regresult) {
        validator = true;
        document.getElementById("password_error").textContent = "";
        valid("password", "password_icon");
      } else {
        validator = false;
        document.getElementById("password_error").textContent =
          "e.g Aa@3as323 min-length 8";
        invalid("password", "password_icon");
      }
    }
  }
  
  function valid(id, clas) {
    document.getElementById(id).setAttribute("class", "valid");
    // document.getElementById(clas).innerHTML = 'done';
    // document.getElementById(clas).setAttribute("class","icon");
    document.getElementById(clas).style.visibility = "visible";
    document.getElementById(clas).textContent = "done";
    document.getElementById(clas).style.color = "green";
  }
  
  function invalid(id, icon_id) {
    document.getElementById(id).setAttribute("class", "invalid");
    document.getElementById(icon_id).textContent = "clear";
    document.getElementById(icon_id).style.color = "red";
    if ((document.getElementById(icon_id).style.visibility = "hidden")) {
      document.getElementById(icon_id).style.visibility = "visible";
    }
  }
  loaded = true;
  $("form").on("submit", function() {
    var modal = M.Modal.getInstance($(".modal"));
    modal.open();
    var display = $(".form-content");
    if(!loaded){
      display.html('<img src="images/sending2.gif" id="loading" alt="loader"/>');
      setTimeout(function() {
          
          if (validator == false) {
            loaded = false;
            display.html(`
                      <h4 class="red">Please fill the form correctly.</h4>
                 `);
          } else {
              loaded = false;
              
            
              display.html(`
                  <h4>Please review your form data.</h4>
                  <table>
                     <tr>
                          <th>First Name</th>
                          <td>${$("#first_name").val()}</th>
                          <th>Last Name</th>
                          <td>${$("#last_name").val()}</th>
                     </tr>
                     <tr>
                          <th>Email</th>
                          <td>${$("#email").val()}</th>
                          <th>Phone</th>
                          <td>${$("#number").val()}</th>
                     </tr>
      
                  </table>
                  <p>Address: ${$("#address").val()}</p>
              `);
          }
        }, 3000);
    }else{
      setTimeout(function() {
          
          
          if (validator == false) {
            loaded = false;
            display.html(`
                      <h4 class="red">Please fill the form correctly.</h4>
                 `);
          } else {
              loaded = false;
              
            
              display.html(`
                  <h4>Please review your form data.</h4>
                  <table>
                     <tr>
                          <th>First Name</th>
                          <td>${$("#first_name").val()}</th>
                          <th>Last Name</th>
                          <td>${$("#last_name").val()}</th>
                     </tr>
                     <tr>
                          <th>Email</th>
                          <td>${$("#email").val()}</th>
                          <th>Phone</th>
                          <td>${$("#number").val()}</th>
                     </tr>
      
                  </table>
                  <p>Address: ${$("#address").val()}</p>
              `);
          }
        }, 3000);
    }
    
  });
  
  function reload(){
      window.reload();
  }