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
        
        let query = `SELECT LOWER (a.abilityLabel) AS abilityLabel,\
                            a.abilityDescription   AS description,\
                            LOWER (g.genderLabel)  AS genderLabel,\
                            COUNT(c.char)          AS total\
                     FROM character c 
                            JOIN      abilities a ON a.char = c.char\
                            LEFT JOIN gender    g ON c.char = g.char\
                     GROUP BY LOWER (a.abilityLabel), a.abilityDescription, LOWER (g.genderLabel)\
                     ORDER BY abilityLabel`


        let data = comicsDB.exec(query)        
        let newData = {}
        let allGenders = new Set()
        let allGendersTotals = {}        
        data.forEach(row => {
            if (row.abilityLabel in newData){
                newData[row.abilityLabel].values[row.genderLabel] = row.total
            } else{
                let node = {values: {}, description: row.description}
                node.values[row.genderLabel] = row.total
                newData[row.abilityLabel] = node
            }

            !(row.genderLabel in allGenders) && allGenders.add(row.genderLabel)
            row.genderLabel in allGenders? allGendersTotals += row.total : allGendersTotals[row.genderLabel] = row.total
        });       

        // Sort by gender
        allGenders = Array.from(allGenders)
        allGenders.sort((a,b) =>allGendersTotals[b]-allGendersTotals[a])        

        let rows = []
        for (let ability in newData){
            let row = {description: newData[ability].description, ability: ability, values: []}
            for (let i in allGenders){
                let gender = allGenders[i]
                if (gender in newData[ability].values){
                    row.values.push(newData[ability].values[gender])
                }else{
                    row.values.push(0)
                }
            }
            rows.push(row)
        }
        
        // Sor by ability
        rows.sort((d1, d2) => d2.values.reduce((a,b)=>a+b) - d1.values.reduce((a,b)=>a+b))
        
        return {
            data: rows, 
            labels: allGenders,
            bandFunc: d=>d.ability, 
            valueFunc: d=>d.values, 
            urlFunc: d=>'',
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