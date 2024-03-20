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