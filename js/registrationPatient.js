window.RegistrationPatient= {
    API_BASE_VRL: "http://localhost:8086",

    getPatients: function () {
        $.ajax({
            url: RegistrationPatient.API_BASE_VRL + "/patients",
            method: "GET"
        }).done(function (response) {
            console.log(response);
            RegistrationPatient.displayPatients(response.content)
        })
    },

    displayPatients: function (patients) {
        var allPatientsHtml = "";

        patients.forEach(patient => allPatientsHtml += RegistrationPatient.getPatientsHtml(patient))

        $.html(allPatientsHtml);
    },
    getPatientsHtml: function (patient) {
        return
        `<th>${patient.firstName}</th>
        <th>${patient.lastName}</th>
        <th>${patient.cnp}</th>
        <th>${patient.age}</th>
        <th>${patient.weight}</th>
        <th>DELETE</th>
        `
    }
};
RegistrationPatient.getPatients();
