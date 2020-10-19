const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');

Database.then(async db => {
    // Inserir dados na tabela 
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6555874",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "999555333",
        images: [
            "https://images.unsplash.com/photo-1599988288485-534984f5cd21?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1597385573259-d2d9f0b7135d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    });

    // Consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
    
    // Consultar somente um orphanato somente pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    // Deletar dado da tabela
    /*console.log(await db.run("DELETE FROM orphanages WHERE id ='4'"))
    console.log(await db.run("DELETE FROM orphanages WHERE id ='5'"))*/
})