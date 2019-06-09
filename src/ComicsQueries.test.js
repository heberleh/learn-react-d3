
import { expect } from 'chai';
const cTable = require('console.table');

import ComicsQueries from './ComicsQueries'


describe('Data Management', function() {
    describe('Comics Queries', function() {        

        it('Characters\' total number of skills', () => {           
            let result = ComicsQueries.charactersTotalSkills();
            //console.table(result.data);
        });

        it('Characters\' total number of skills', () => {           
            let result = ComicsQueries.skillsDistribution();
            console.table(result.data);
        });
        
    });
});