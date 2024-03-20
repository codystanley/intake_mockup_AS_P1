let showModal = true; // Activate/Deactive the search modal

$(document).ready(function() {
    // Initially hide the fields
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
                $("#nextButtonDiv").hide();
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
                $("#nextButtonDiv").hide();
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