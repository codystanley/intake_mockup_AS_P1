/**
 * This script controls the behavior of a form, including showing and hiding fields based on user interactions.
 * It also handles the activation and deactivation of a search modal.
 *
 * @file This file contains the JavaScript code for the form script.
 * @summary Controls the behavior of a form and manages the search modal.
 * @description The script initializes the form by hiding certain fields and setting up event listeners.
 * It also handles the "Next" button click event, showing the search modal if necessary, and updating the visibility of fields accordingly.
 * @requires jQuery
 * @version 1.0
 * @since 2022-10-01
 */
let showModal = false; // Activate/Deactive the search modal

$(document).ready(function() {
    // Initially hide the fields
    $("#dobDiv").hide();
    $("#ptLastNameDiv").hide();
    $("#ptFirstNameDiv").hide();
    $("#ptBiologicalSexDiv").hide();
    $("#patientCallerDiv").hide();
    $("#callerLastNameDiv").hide();
    $("#callerFirstNameDiv").hide();
    $("#callerRelationshipDiv").hide();
    $("#ptLocationDiv").hide();
    $("#submitButtonDiv").hide();

    // Update showModal based on initial checkbox state
    showModal = $('#showModalCheckbox').is(':checked');

    // Event listener for the checkbox
    $('#showModalCheckbox').change(function() {
    showModal = $(this).is(':checked');
    });

    // "Next" button click handler
    $("#nextButton").click(function() {
        if(showModal) {
            $("#confirmModal").modal('show'); // Show the modal

            // Confirmation Modal "Confirm" button handler
            $("#btnConfirm").click(function() {
                $("#confirmModal").modal('hide'); // Hide the modal
                $("#nextButtonRow").hide();
                $("#ptFirstNameDiv").show();
                $("#ptBiologicalSexDiv").show();
                $("#patientCallerDiv").show();
                $("#callerLastNameDiv").show();
                $("#callerFirstNameDiv").show();
                $("#callerRelationshipDiv").show();
                $("#ptLocationDiv").show();
                $("#submitButtonDiv").show();
            })
        }   else {
                // "Next" button click handler
                $("#nextButtonRow").hide();
                $("#ptFirstNameDiv").show();
                $("#ptBiologicalSexDiv").show();
                $("#patientCallerDiv").show();
                $("#callerLastNameDiv").show();
                $("#callerFirstNameDiv").show();
                $("#callerRelationshipDiv").show();
                $("#ptLocationDiv").show();
                $("#submitButtonDiv").show();
            }
        })
    })
