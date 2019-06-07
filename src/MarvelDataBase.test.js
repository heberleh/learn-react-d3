import MarvelDataBase from './MarvelDataBase';

it('show first 5 gender items', () => {

    let db = MarvelDataBase()

    console.log(db.exec('SELECT genderLabel FROM gender LIMIT 5'))

});

it('count number of different registered abilities among genders', () => {

    let db = MarvelDataBase()

    console.log(db.exec('SELECT gender.genderLabel as gender, COUNT(DISTINCT abilities.abilityLabel) as abilities\
                         FROM abilities JOIN gender ON abilities.characterId = gender.characterId\
                         GROUP BY gender.genderLabel'))
    
});


it('get details about transgender female with ability registered', () => {

    let db = MarvelDataBase()

    console.log(db.exec('SELECT character.characterIdLabel, gender.genderLabel, abilities.abilityLabel\
                            FROM character JOIN gender on character.characterId = gender.characterId\
                            JOIN abilities ON character.characterId = abilities.characterId\
                            WHERE gender.genderLabel LIKE "transgender female"'))
    
});



