window.dosageCalculator = {
    API_BASE_URL: "http://localhost:8086",

    createPatient: function () {
        var firstName = $("#FirstName-field").val();
        var lastName = $("#LastName-field").val();
        var cnp = $("#Cnp-field").val();
        var age = $("#Age-field").val();
        var weight = $("#Weight-field").val();

        var patient = {
            firstName: firstName,
            lastName: lastName,
            cnp: cnp,
            age: age,
            weight: weight
        };

        $.ajax({
            url: dosageCalculator.API_BASE_URL + "/patients",
            method: "POST",
            // MIME type
            contentType: "application/json",
            data: JSON.stringify(patient)
        }).done(function () {
            dosageCalculator.getPatients();
        })
    },

    getPatients: function () {
        $.ajax({
            url: dosageCalculator.API_BASE_URL + "/patients",
            method: "GET",
        }).done(function (response) {
            console.log("Successfully received response");
            console.log(response);

            dosageCalculator.displayPatients(response);
        })
    },

    displayPatients: function (patients) {
        var tableBodyHtml = '';

        patients.forEach(patient => tableBodyHtml += dosageCalculator.getPatientRow(patient));

        $('#patient-table tbody').html(tableBodyHtml);
    },

    getPatientRow: function (patient) {
        return `<tr>
                <td>${patient.firstName}</td>
                <td>${patient.lastName}</td>
                <td>${patient.cnp}</td>
                <td>${patient.age}</td>
                <td>${patient.weight}</td>
                <td><a href="#" class="delete-patient fa fa-trash" data-id="${patient.id}"></a></td>
            </tr>`
    },

    deletePatient: function (patientId) {
        $.ajax({
            url: dosageCalculator.API_BASE_URL + "/patients/" + patientId,
            method: "DELETE"
        }).done(function () {
            dosageCalculator.getPatients();
        })
    },

    calculateDose: function (procedureType, weight) {
        return $.ajax({
            url: dosageCalculator.API_BASE_URL + "/dosages/getByProcedureAndWeight/" + procedureType + '/' + weight,
            method: "GET",
        })
    },

    bindEvents: function () {

        $('#new-patient-form').submit(function () {

            dosageCalculator.createPatient();
        });

        // using delegate because the element a.delete-item is dynamically injected
        // after the page has been loaded
        $('#patient-table').delegate('.delete-patient', 'click', function (event) {
            event.preventDefault();

            var patientId = $(this).data('id');

            dosageCalculator.deletePatient(patientId);
        });

        $('form[name="fn"]').submit(function (event) {
            const INPUT_SEL = 'input#wm';
            const SELECT_SEL = 'select';
            const RESULT_SEL = '#result';

            event.preventDefault();
            var procedureType = $(this).find(SELECT_SEL).val();
            var weight = $(this).find(INPUT_SEL).val();

            dosageCalculator
                .calculateDose(procedureType, weight)
                .done(function (response) {
                    $(RESULT_SEL).text(response);
                })
        })
    }
};

$(document).ready(function () {
    dosageCalculator.getPatients();
    dosageCalculator.bindEvents();
})
