//Obtengo elementos del DOM
 const usersContainter = document.getElementById('listaUsuarios');

//Obtengo datos de la API. fetch
fetch ('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        if(!response.ok){
            throw new Error ('La colicitud no fue exitosa')
        }
        return response.json()
    })
    .then((data) =>{
        const userInformation = []; //creo el nuevo array
        data.forEach((user) =>{//recorro user con un forEach
            const{id,...rest} = user;//obtengo la propiedad ID y el resto d epropiedades del objeto user (...)
            userInformation.push({//añado toda la información del usuario al nuevo array mediante push
                age: Math.floor(Math.random()*(35-17+1)) + 17,//Creo propiedad edas con una edad aleatoria entre 17-35 años
                img: `/moduloUno-sprint5-Unidad1/assets/img/${user.id}.jpeg`,//creo propiedad img accediendo al id de cada imagen
                id, //accedo a la propiedad id
                ...rest,//accedo al resto de propiedades
            })
        });
        console.log(userInformation)
        
        userInformation.forEach((user) =>{/*recorro toda la información que hay almacenada en userInformation*/
            const listUsers = document.createElement('li'); /*creo un elemento de tipo lista para almacenar toda la información*/
            listUsers.className = 'listUsers';
            /*a listUSers le añado la información solicitada, accediendo a user.propiedad
            //data-label como atributo para poder dar estilo en css, unicamente a las palabras que hay delante de */
            listUsers.innerHTML = `  
            <img class = 'image' src=${user.img} alt=${user.name}/img>
            <p data-label ='Name:'> ${user.name}</p>
            <p data-label ='Age:'>${user.age}</p>
            <p data-label ='Username:'>${user.username}</p>
            <p data-label ='Phone:'> ${user.phone}</p>
            <p data-label ='Email:'>${user.email}</p></br>
            <p data-label ='Company:'>${user.company.name}</p>
            <p data-label ='Address:'>${user.address.street}, ${user.address.suite}, ${user.address.city}'</p>
            `
            usersContainter.appendChild(listUsers);/*añado listUser al contenedor usersContainer, que he obtenido al principio mediante DOM*/
        })
    })
    .catch((error) =>{
        usersContainter.innerText = 'Error. No se pudo obtener información de la API'
    });