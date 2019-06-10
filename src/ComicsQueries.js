
const comicsDB = require('comics-characters-js-database/src/ComicsDB')

class ComicsQueries{

    static charactersTotalSkills(){
        let query = "SELECT c.char AS url, c.charLabel AS name, COUNT(DISTINCT a.ability) AS total\
                     FROM character c JOIN abilities a ON a.char = c.char\
                     GROUP BY c.char, c.charLabel\
                     ORDER BY total\
                     LIMIT 500"

        return {
            data: comicsDB.exec(query), 
            bandFunc: d=>d.name, 
            valueFunc: d=>d.total, 
            urlFunc: d=>d.url
        }
    }
    
    static skillsDistribution(){
        let query = "SELECT LOWER (a.abilityLabel) AS ability, COUNT(c.char) AS total, a.abilityDescription AS description\
                     FROM character c JOIN abilities a ON a.char = c.char\
                     GROUP BY LOWER (a.abilityLabel), a.abilityDescription\
                     ORDER BY total"

        return {
            data: comicsDB.exec(query), 
            bandFunc: d=>d.ability, 
            valueFunc: d=>d.total, 
            urlFunc: d=>d.url,
            descriptionFunc: d=>d.description
            }
    }

    static skillsDistributionByGender(){
        let gendersWithLabels = ["male", "male organism", "female", "female organism", "neutral sex", "hermaphrodite", "genderfluid", "transgender female", "agender", "non-binary"]
        
        let query = `SELECT LOWER (a.abilityLabel) AS ability,\
                            a.abilityDescription   AS description,\
                            g.genderLabel          AS gender,\
                            COUNT(c.char)          AS total\
                     FROM character c JOIN abilities a ON a.char = c.char\
                                      LEFT JOIN gender g\
                     WHERE g.gender IN ("male", "male organism", "female", "female organism", "neutral sex", "hermaphrodite", "genderfluid", "transgender female", "agender", "non-binary")\
                     GROUP BY LOWER (a.abilityLabel), a.abilityDescription, g.genderLabel\
                     ORDER BY total`

        return {
            data: comicsDB.exec(query), 
            bandFunc: d=>d.ability, 
            valueFunc: d=>d.total, 
            urlFunc: d=>d.url,
            descriptionFunc: d=>d.description
        }
    }

    static findGenders(){
        let query = "SELECT DISTINCT genderLabel from gender"
        return {data: comicsDB.exec(query)}
        // == Result == kown = []
        // male              
        // male organism     
        // female            
        // female organism   
        // neutral sex       
        // hermaphrodite     
        // genderfluid       
        // transgender female
        // agender           
        // t1331922231       
        // t1300761634       
        // non-binary        
        // t1435955685  
    }
}

export default ComicsQueries;