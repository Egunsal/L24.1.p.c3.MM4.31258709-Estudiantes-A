let estudiantes=[
    {nombre: "Tomi", semestre: 3, nota: 1},
    {nombre: "Joe", semestre: 3, nota: 15},
    {nombre: "Edwuard", semestre: 7, nota: 13},
    {nombre: "Franxu", semestre: 3, nota: 20},
    {nombre: "Juan", semestre: 2, nota: 17},
    {nombre: "Kelvin", semestre: 6, nota: 20},
    ]
    let estudiantesSemestre = (estudiantes, semestre) => {
        let estudiantesFiltrados = [];
        estudiantes.forEach(estudiante => {
            if(estudiante.semestre == semestre) estudiantesFiltrados.push(estudiante)
        });
    return estudiantesFiltrados;
    }
    let estudiantesSemestre3 = estudiantesSemestre(estudiantes, 3)

    let salida= document.getElementById("salida")

    salida.innerHTML = "Estudiantes que estan en el semestre 3:<br>"
    estudiantesSemestre3.forEach((estudiante) => {
        salida.innerHTML +="Nombre: " + estudiante.nombre +"-"+ " Nota:"+ estudiante.nota+"<br>"
    } )

