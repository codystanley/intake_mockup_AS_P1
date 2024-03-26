
/**
 * This script controls the form behavior and configuration settings.
 * It handles the visibility of form fields based on checkbox states and button clicks.
 * The script also includes event listeners for checkbox changes and button clicks.
 * 
 * @file This file is located at /Users/codystanley/Documents/apps/intake_mockup_AS_P1/form-script.js
 * @version 1.0.0
 */

// Set checkbox configurations to false.
let phoneDatabase = false;
let phoneResult = false;
let patientDatabase = false;
let patientResult = false;

$(document).ready(function()
{
    // Initially hide all of the fields except 'Phone Number'
    $("#dobDiv").hide();
    $("#ptLastNameDiv").hide();
    $("#nextPatientButtonDiv").hide();
    $("#ptFirstNameDiv").hide();
    $("#ptBiologicalSexDiv").hide();
    $("#patientCallerDiv").hide();
    $("#callerLastNameDiv").hide();
    $("#callerFirstNameDiv").hide();
    $("#callerRelationshipDiv").hide();
    $("#ptLocationDiv").hide();
    $("#complaintDiv").hide();
    $("#submitButtonDiv").hide();

    // Update configuration based on initial checkbox states
    phoneDatabase = $('#configPhoneCheckbox').is(':checked');
    phoneResult = $('#configPhoneResultsCheckbox').is(':checked');
    patientDatabase = $('#configPatientCheckbox').is(':checked');
    patientResult = $('#configPatientResultsCheckbox').is(':checked');

    // Event listeners for the Phone Database checkboxes
    $('#configPhoneCheckbox').change(function()
    {
        phoneDatabase = $(this).is(':checked');
    });

    $('#configPhoneResultsCheckbox').change(function()
    {
        phoneResult = $(this).is(':checked');
    });

    $('#configPatientCheckbox').change(function()
    {
        patientDatabase = $(this).is(':checked');
    });

    $('#configPatientResultsCheckbox').change(function()
    {
        patientResult = $(this).is(':checked');
    });


    /**
     * Event handler for the 'click' event of the '#nextPhoneButton' button.
     *
     * When the button is clicked, this function checks if both 'phoneDatabase' and 'phoneResult' are true.
     * If they are, it shows the '#confirmPhoneModal' modal and sets up a click event handler for the '#phoneBtnConfirm' button.
     * The '#phoneBtnConfirm' button's click event handler hides the modal, shows and hides various elements, and sets some dummy data.
     * If 'phoneDatabase' and 'phoneResult' are not both true, it hides the '#nextPhoneButtonDiv' div and shows the '#dobDiv' and '#ptLastNameDiv' divs.
     *
     * @listens #nextPhoneButton:click
     */

    $("#nextPhoneButton").click(function()
    {
        if(phoneDatabase && phoneResult)
        {
            $("#confirmPhoneModal").modal('show');

            // Confirm phone number patient button handler
            $("#phoneBtnConfirm").click(function() {
                $("#confirmPhoneModal").modal('hide');
                $("#nextPhoneButtonDiv").hide();
                $("#dobDiv").show();
                $("#ptLastNameDiv").show();
                $("#nextPatientButtonDiv").hide();
                $("#ptFirstNameDiv").show();
                $("#ptBiologicalSexDiv").show();
                $("#patientCallerDiv").show();
                $("#callerLastNameDiv").show();
                $("#callerFirstNameDiv").show();
                $("#callerRelationshipDiv").show();
                $("#ptLocationDiv").show();
                $("#complaintDiv").show();
                $("#submitButtonDiv").show();

                // Add dummy data
                $("#dob").val("2000-01-01");
                $("#dob").change();
                $("#ptLastName").val("Doe");
                $("#ptFirstName").val("John");
                $("#ptBiologicSex").val("M");
                $("#patientCaller").focus();
            });
        } else
        {
            $("#nextPhoneButtonDiv").hide();
            $("#dobDiv").show();
            $("#ptLastNameDiv").show();
            $("#nextPatientButtonDiv").show();
        }
    });

    /**
     * Event handler for the 'click' event of the '#nextPatientButton' button.
     *
     * When the button is clicked, this function checks if both 'patientDatabase' and 'patientResult' are true.
     * If they are, it shows the '#confirmPatientModal' modal and sets up a click event handler for the '#patientBtnConfirm' button.
     * The '#patientBtnConfirm' button's click event handler hides the modal, shows and hides various elements, and sets some dummy data.
     * If 'patientDatabase' and 'patientResult' are not both true, it hides the '#nextPatientButtonDiv' div and shows the '#dobDiv', '#ptLastNameDiv', '#ptFirstNameDiv', '#ptBiologicalSexDiv', '#patientCallerDiv', '#callerLastNameDiv', '#callerFirstNameDiv', '#callerRelationshipDiv', '#ptLocationDiv', '#complaintDiv', and '#submitButtonDiv' divs.
     *
     * @listens #nextPatientButton:click
     ***************************************/
    $("#nextPatientButton").click(function()
    {
        if(patientDatabase && patientResult)
        {
            $("#confirmPatientModal").modal('show'); // Show the modal

            // Confirmation Modal "Confirm" button handler
            $("#patientBtnConfirm").click(function() {
                $("#confirmPatientModal").modal('hide');
                $("#nextPhoneButtonDiv").hide();
                $("#dobDiv").show();
                $("#ptLastNameDiv").show();
                $("#nextPatientButtonDiv").hide();
                $("#ptFirstNameDiv").show();
                $("#ptBiologicalSexDiv").show();
                $("#patientCallerDiv").show();
                $("#callerLastNameDiv").show();
                $("#callerFirstNameDiv").show();
                $("#callerRelationshipDiv").show();
                $("#ptLocationDiv").show();
                $("#complaintDiv").show();
                $("#submitButtonDiv").show();

                // Add dummy data
                $("#ptFirstName").val("Jane");
                $("#ptBiologicSex").val("F");
                $("#patientCaller").focus();
            });
        } else
        {
            // "Next" button click handler
            $("#confirmPatientModal").modal('hide');
                $("#nextPhoneButtonDiv").hide();
                $("#dobDiv").show();
                $("#ptLastNameDiv").show();
                $("#nextPatientButtonDiv").hide();
                $("#ptFirstNameDiv").show();
                $("#ptBiologicalSexDiv").show();
                $("#patientCallerDiv").show();
                $("#callerLastNameDiv").show();
                $("#callerFirstNameDiv").show();
                $("#callerRelationshipDiv").show();
                $("#ptLocationDiv").show();
                $("#complaintDiv").show();
                $("#submitButtonDiv").show();
        }
    });

    /**
     * Event handler for the 'change' event of the '#dob' input element.
     *
     * When a date is entered, this function calculates the age based on the entered date
     * and updates the label with the calculated age.
     *
     * @listens #dob:change
     */
    $("#dob").change(function() {
        // Get the entered date
        var dob = new Date($(this).val());
    
        // Calculate the age
        var today = new Date();
        var age = today.getFullYear() - dob.getFullYear();
        var m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
    
        // Update the label
        $("label[for='dob']").text("Date of Birth* (Age: " + age + ")");
    });

    /**
     * Event handler for the 'change' event of the '#patientCaller' select element.
     *
     * When the selected value is "Patient", this function sets the values of
     * '#callerLastName', '#callerFirstName', and '#callerRelationship' to "same".
     *
     * @listens #patientCaller:change
     */
    $("#patientCaller").change(function() {

        if ($(this).val() === "Patient") {
            $("#callerLastName").val("same");
            $("#callerFirstName").val("same");
            $("#callerRelationship").val("same");
        }

    });

})
